import { Button, CardHeader, Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import InputForm from "../../components/ferramentas/InputForm/InputForm";

import { createTheme } from "@mui/material/styles";

import BotaoADD from "../../components/ferramentas/Botoes/BotaoADD";
import BotaoADD_Experiencia from "../../components/ferramentas/Botoes/BotaoADD_Experiencia";
// import BotaoADD from "../../components/ferramentas/Botaos/BotaoADD";

const theme = createTheme({
  palette: {
    primary: {
      main: "##000000",
    },
  },
});

export const Cadastro_Curriculo_Usuario = () => {
  return (
    <Box
      sx={{
        //  PAI DE TODOS
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }} style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        boxShadow: "0 0 11px rgb(169, 169, 169)",
      }}
    >
      <Box
        sx={{
          //FILHO DO PAI DE TODOS
          mt: 2,
          width: "60%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          "@media (max-width:600px)": {
            width: "100%",
          },
        }}
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          boxShadow: "0 0 11px rgb(169, 169, 169)",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {/* <BoxHeader
            sx={{
              mt: 1,
              mb: 1,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
            style={{ color: "#black" }}
            title="CURRICULO"
          /> */}

          {/* EXPERIÊNCIA */}
          <Box
            sx={{
              width: "100%",
            }}
            style={{
              boxShadow: "0 -1px 0px rgb(169, 169, 169)",
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
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BotaoADD_Experiencia
              label="ADICIONAR NOVA FORMAÇÃO"
              nome="FORMAÇÃO"
            />
          </Box>
        </Box>

        {/* FORMAÇÃO ACADÊMICA */}
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
              FORMAÇÃO ACADÊMICA
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
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BotaoADD
              label="ADICIONAR NOVA FORMAÇÃO"
              nome="FORMAÇÃO ACADÊMICA"
            />
          </Box>
        </Box>

        {/* CURSOS */}
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
              CURSOS
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
          <Box
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BotaoADD label="ADICIONAR NOVO CURSO" nome="CURSOS" />
          </Box>
        </Box>

        {/* ADICIONAIS */}
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
              ADICIONAIS
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TextField
                multiline
                rows={7}
                sx={{
                  m: 3,
                  width: "100%",
                  marginBottom: "4%",
                }}
                style={{
                  backgroundColor: "rgba(219, 214, 255, 0.941)",
                  borderRadius: "5",
                }}
                label="ADICIONAIS"
              />
            </Box>
          </Box>
        </Box>

        {/* SALVAR */}
        <Box
          sx={{
            mb: 4,
            mt: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            endIcon={<BookmarkAddIcon />}
            style={{ color: "white", backgroundColor: "#14037e" }}
          >
            SALVAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
