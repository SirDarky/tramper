import React, { useState } from "react";
import { Box, Button, Card, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputForm from "../InputForm/InputForm";
import BotaoExcluir from "./BotaoExcluir";

const BotaoADD = ({ label, nome }) => {
  const [experiencias, setExperiencias] = useState([]);

  const adicionar = () => {
    const novaExperiencia = {
      id: Math.random().toString(),
      componente: (
        <Box sx={{ mt: 5, width: "100%" }}>
          <Box
            style={{
              boxShadow: "0 -1px 0px rgb(169, 169, 169)",
            }}
          >
            <Typography
              style={{ color: "white" }}
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              {nome}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                "@media (max-width:600px)": {
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "column",
                },
              }}
            >
              <InputForm label="NOME DA INSTITUIÇÕES" />
              <InputForm label="CURSO" />
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
                  alignItems: "stretch",
                },
              }}
            >
              <TextField
                sx={{
                  mt: 1,
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
                label="DATA DE CONCLUSÃO "
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
        onClick={adicionar}
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

export default BotaoADD;
