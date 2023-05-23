import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  TextField,
  CardHeader,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputForm from "../InputForm/InputForm";
import BotaoExcluir from "./BotaoExcluir";

const BotaoADD_Experiencia = ({ label, nome }) => {
  const [experiencias, setExperiencias] = useState([]);

  const adicionarExperiencia = () => {
    const novaExperiencia = {
      id: Math.random().toString(),
      componente: (
        <Box sx={{
          width:"100%",
          display: "flex",
          flexDirection: "column",
        }}style={{
          boxShadow: "0 -1px 0px rgb(169, 169, 169)",
        }}
        >

          <Box
            sx={{
              width: "100%",
            }}
            
          >
            <Typography
              style={{ color: "white" }}
              sx={{
                display: "flex",
                alignItems: "center",
                
               
                flexDirection: "column",
              }}
            >
              EXPERIÊNCIA
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                "@media (max-width:600px)": {
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "column",
                },
              }}
            >
              <InputForm label="EMPRESA" />
              <InputForm label="CARGO" />
            </Box>
            <Box
              sx={{
                mt: 4,
                
                mb: 2,
                width: "100%",
                display: "flex",
                alignItems: "center",
                
                justifyContent: "space-evenly",
                "@media (max-width:600px)": {
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "column",
                },
              }}
            >
              <TextField
                multiline
                rows={7}
                sx={{
                  mt: 2,
                  mb: 2,
                  width: "40%",
                  "@media (max-width:600px)": {
                    width: "100%",
                  },
                }}
                style={{
                  backgroundColor: "rgba(219, 214, 255, 0.941)",
                  borderRadius: "5",
                }}
                label="resumo"
              />

              <Box //datas
                sx={{
                  width: "40%",
                  display: "flex",
                  flexDirection: "column",
                  "@media (max-width:600px)": {
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column",
                  },
                }}
              >
                <TextField
                  sx={{
                    mt: 1,
                    width: "100%",
                  }}
                  id="date"
                  label="DATA DE INÍCIO"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    backgroundColor: "rgba(219, 214, 255, 0.941)",
                    borderRadius: "5",
                  }}
                />
                <TextField
                  sx={{
                    mt: 2,
                  }}
                  id="date"
                  label="DATA DE TÉRMINO"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{
                    backgroundColor: "rgba(219, 214, 255, 0.941)",
                    borderRadius: "5",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 2,
             
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
            }}
          >
            {/* <BotaoADD_Experiencia nome="nome" label="ADICIONAR NOVA EXPERIÊNCIA" /> */}
          </Box>
        </Box>
      ),
    };
    setExperiencias((prevExperiencias) => [
      ...prevExperiencias,
      novaExperiencia,
    ]);
  };

  const removerExperiencia = (id) => {
    setExperiencias((prevExperiencias) =>
      prevExperiencias.filter((experiencia) => experiencia.id !== id)
    );
  };

  return (
    <>
      {experiencias.map((experiencia) => (
        <React.Fragment key={experiencia.id}>
          {experiencia.componente}
          <BotaoExcluir onClick={() => removerExperiencia(experiencia.id)} />
        </React.Fragment>
      ))}
      <Button
        sx={{
          alignItems: "center",
          
        }}
        variant="contained"
        endIcon={<AddIcon />}
        onClick={adicionarExperiencia}
        style={{
          color: "white",
          backgroundColor: "#14037E",
        }}
      >
        {label}
      </Button>
    </>
  );
};

export default BotaoADD_Experiencia;
