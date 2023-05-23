import { Email, Lock, SensorOccupied } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  TextField,
} from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import React from "react";
import styled from "styled-components";

const WhiteIcon = styled(({ ...other }) => <span {...other} />)(
  ({ theme }) => ({
    color: "#000",
  })
);

export const Login = () => {
  return (
    <div className="funto_login">
      <Box
        className="Filtro"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              width: "60%",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "rgba(217, 217, 217, 0.43)",
              "@media (max-width:600px)": {
                width: "100%",
              },
            }}
          >
            {/* Logo */}
            <SensorOccupied
              sx={{
                mb: 3,
                mt: 5,
                fontSize: 90,
                "@media (max-width:600px)": {
                  mt: 2,
                },
              }}
            />
            <Box
              sx={{
                m: 2,
                display: "flex",
                backgroundColor: "#fff",
                alignItems: "center",
                width: "70%",
                "@media (max-width:600px)": {
                  width: "90%",
                },
              }}
            >
              <WhiteIcon>
                <Email sx={{ fontSize: 35 }} />
              </WhiteIcon>
              <Box className="Filtro2" sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Box
              sx={{
                mb: 2,
                width: "70%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                "@media (max-width:600px)": {
                  width: "90%",
                },
              }}
            >
              <WhiteIcon>
                <Lock sx={{ fontSize: 35 }} />
              </WhiteIcon>
              <Box className="Filtro2" sx={{ width: "100%" }}>
                <TextField
                  sx={{ width: "100%" }}
                  label="Senha"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Button sx={{ mt: 3, mb: 3, color: "black" }}>
              ESQUECI MINHA SENHA
            </Button>

            <Button
              sx={{ mt: 4 }}
              fullWidth
              variant="contained"
              endIcon={<BookmarkAddIcon />}
              style={{ color: "white", backgroundColor: "#14037e" }}
            >
              LOGIN
            </Button>
          </Card>
        </Container>
      </Box>
    </div>
  );
};
