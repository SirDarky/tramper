import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  InputAdornment,
  TextField,
  createTheme,
} from "@mui/material";
import Foto_tela_Cadastro from "../../Img/Foto_cadastro_usuario.jpg";
import {
  ArrowBack,
  Email,
  Lock,
  Person,
  SensorOccupied,
  HowToReg,
} from "@mui/icons-material";
import { ThemeProvider } from "styled-components";

const theme = createTheme({});

export const Cadastro_Usuarios = () => {
  return (
    <Box
      className="funto_cadastro_usuarios" //Pai de todos
      sx={{
        display: "flex",
        width: "100%",
        height: "100ch",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card // filho do pai de todos mt
        sx={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <Box
          sx={{
            m: 20,
            width: "60%",
            display: "flex",
            alignItems: "center",
            "@media (max-width:600px)": {
              width: "100%",
              m: 0,
            },
          }}
        >
          {/* Box da Esquerda */}
          <Box
            sx={{
              width: "100%",
              "@media (max-width:600px)": {
                width: "0px",
              },
            }}
          >
            <CardMedia
              sx={{
                height: 735,
                "@media (max-width:600px)": {
                  height: "0ch",
                },
              }}
              component="img"
              image={Foto_tela_Cadastro}
              alt="fundo"
            />
          </Box>
          {/* Box do FOrmulario */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              "@media (max-width:600px)": {
                height: "100ch",
              },
            }}
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          >
            {/* Logo */}
            <ThemeProvider theme={theme}>
              <SensorOccupied
                sx={{
                  mt: 2,
                  fontSize: 90,
                  color: "#ffffff", // Defina a cor do ícone para branco
                  "@media (max-width:600px)": {
                    mb: 2,
                  },
                }}
              />
            </ThemeProvider>

            <TextField
              sx={{ m: 2, width: "80%" }}
              style={{ backgroundColor: "#dbd6fff0" }}
              label="EMAIL"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={{ fontSize: 35, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ m: 2, width: "80%" }}
              style={{ backgroundColor: "#dbd6fff0" }}
              label="NOME"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={{ fontSize: 35, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ m: 1, width: "80%" }}
              style={{ backgroundColor: "#dbd6fff0" }}
              label="SENHA"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ fontSize: 35, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              sx={{ m: 2, width: "80%" }}
              style={{ backgroundColor: "#dbd6fff0" }}
              label="REPITA A SENHA"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={{ fontSize: 35, color: "#000" }} />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="RESUMO SOBRE VOCÊ"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              multiline
              variant="filled"
              rows={7}
              sx={{ mt: 3, ml: 1, mr: 1, width: "80%" }}
              style={{ backgroundColor: "#dbd6fff0" }}
            />
            <Box
              sx={{
                mt: 3,
                mb: 2,
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                "@media (max-width:600px)": {mt: 8,},
              }}
            >
              <ThemeProvider theme={theme}>
                <Button sx={{}} variant="contained" startIcon={<HowToReg />}>
                  REGISTRAR
                </Button>
                <Button sx={{}} variant="contained" startIcon={<ArrowBack />}>
                  VOLTAR
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
