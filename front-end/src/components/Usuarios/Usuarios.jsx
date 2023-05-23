import React, { useState } from "react";
import {
  Box,
  Button,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Article, Email, Message } from "@mui/icons-material";

const Usuario_Usuario = [
  {
    id: 1,
    nome: "João",
    age: 25,
    bio: "Lorem ipsum dolor sit amet.",
    cidade: "São Paulo",
    nomeFaculdade: "Universidade ABC",
    curso: "Engenharia Civil",
    dataInicio: "01/01/2018",
    dataConclusao: "31/12/2022",
    img: "https://i.pinimg.com/564x/da/1d/6c/da1d6cacfb6ee816e4037a7cf055619f.jpg",
    email: "joao@example.com",
    pdf: "https://example.com/arquivo.pdf", // Adicione aqui o URL do arquivo PDF para download
  },
  {
    id: 2,
    nome: "Maria",
    age: 28,
    bio: "Consectetur adipiscing elit.",
    cidade: "Rio de Janeiro",
    nomeFaculdade: "Universidade XYZ",
    curso: "Administração",
    dataInicio: "01/02/2017",
    dataConclusao: "30/11/2021",
    img: "https://i.pinimg.com/564x/cd/69/94/cd6994e979e83a0bd5ca846eb7b0adbb.jpg",
    email: "maria@example.com",
  }, {
    id: 3,
    name: "Julia Luiz",
    age: 28,
    bio: "Namorada do Mateus Luiz",
    cidade: "Manaus-AM",
    nomeFaculdade: "Casa do Mateus",
    curso: "Sexologia",
    dataInicio: "01/03/2019",
    dataConclusao: "30/06/5000",
    img: "https://i.pinimg.com/564x/41/8f/09/418f092f0f97cb27a1f0651dc78dcb9d.jpg",
    email: "julia@example.com",
  },
  // Novos usuários
  {
    id: 4,
    name: "Lucas",
    age: 32,
    bio: "Lorem ipsum dolor sit amet.",
    cidade: "Belo Horizonte",
    nomeFaculdade: "Universidade DEF",
    curso: "Ciência da Computação",
    dataInicio: "01/01/2015",
    dataConclusao: "31/12/2019",
    img: "https://i.pinimg.com/564x/cd/69/94/cd6994e979e83a0bd5ca846eb7b0adbb.jpg",
    email: "lucas@example.com",
  },
  {
    id: 5,
    name: "Isabela",
    age: 27,
    bio: "Consectetur adipiscing elit.",
    cidade: "Curitiba",
    nomeFaculdade: "Universidade GHI",
    curso: "Psicologia",
    dataInicio: "01/02/2016",
    dataConclusao: "30/11/2020",
    img: "https://i.pinimg.com/564x/cd/69/94/cd6994e979e83a0bd5ca846eb7b0adbb.jpg",
    email: "isabela@example.com",
  },
  
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
});

const Usuarios = () => {
  const usuarios = Usuario_Usuario;
  const [usuarioAtual, setUsuarioAtual] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [emailToDisplay, setEmailToDisplay] = useState("");

  const handleDownload = () => {
    setOpenDialog(true);
  };

  const handleEmailConfirmation = (email) => {
    setEmailToDisplay(email);
    setOpenDialog(true);
  };

  const handleEmail = () => {
    setOpenDialog(false);
    window.open(`mailto:${emailToDisplay}`);
  };

  const handleDownloadConfirmed = () => {
    setOpenDialog(false);
    const fileUrl = usuarios[usuarioAtual].pdf;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "usuario.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      {usuarios.map((usuario) => (
        <Box
          key={usuario.id}
          sx={{
            mb: 5,
            mt: 5,
            display: "flex",
            width: "90%",
          }}
          style={{
            backgroundColor: "#eaeaea",
            boxShadow: "0 0 11px rgb(169, 169, 169)",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image={usuario.img}
            alt={usuario.nome}
          />
          <div>
            <Box sx={{ width: "100%" }}>
              <CardHeader title={usuario.nome} subheader={usuario.cidade} />
              <Box sx={{ ml: 2, mr: 2 }}>
                <Typography
                  color="black"
                  style={{ color: "black" }}
                  sx={{ m: 1 }}
                >
                  Formação Acadêmica: {usuario.nomeFaculdade} {usuario.curso} data
                  de início {usuario.dataInicio} conclusão {usuario.dataConclusao}
                </Typography>
                <Typography
                  color="black"
                  style={{ color: "black" }}
                  sx={{ m: 1 }}
                >
                  {usuario.bio}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* BOTOES */}
                  <ThemeProvider theme={theme}>
                    <Box>
                      <Button>
                        <Message sx={{ fontSize: 40 }} />
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => handleEmailConfirmation(usuario.email)}
                      >
                        <Email sx={{ fontSize: 40 }} />
                      </Button>
                    </Box>
                    <Box>
                      <Button onClick={() => handleDownload()}>
                        <Article sx={{ fontSize: 40 }} />
                      </Button>
                    </Box>
                  </ThemeProvider>
                  {/* ------------------ */}
                </Box>
              </Box>
              {/* Dialog para confirmar o email ou download */}
              <Dialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
              >
                <DialogTitle>
                  {emailToDisplay
                    ? "Confirmar envio de email"
                    : "Confirmar download"}
                </DialogTitle>
                <DialogContent>
                  <Typography>
                    {emailToDisplay
                      ? `Deseja realmente enviar um email para ${emailToDisplay}?`
                      : "Deseja realmente fazer o download do arquivo em PDF?"}
                  </Typography>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setOpenDialog(false)}
                    color="primary"
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={
                      emailToDisplay ? handleEmail : handleDownloadConfirmed
                    }
                    color="primary"
                    autoFocus
                  >
                    Confirmar
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </div>
        </Box>
      ))}
    </>
  );
};

export default Usuarios;
