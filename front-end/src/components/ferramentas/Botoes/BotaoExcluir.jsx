import React from "react";
import { Button, createTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ThemeProvider } from "@mui/material";

const BotaoExcluir = ({ onClick }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff0101",
      },
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
      
      <Button
        sx={{m:1, display: "flex" }}
        variant="contained"
        primary
        onClick={onClick}
        startIcon={<DeleteIcon />}
      >
        Excluir
      </Button>
    </ThemeProvider>
  );
};

export default BotaoExcluir;
