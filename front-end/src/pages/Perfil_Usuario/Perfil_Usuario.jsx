import React, { useState } from "react";
import Botao from "../../components/ferramentas/Botoes/Botao";
import {
  Alert,
  Box,
  Snackbar,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import InputForm from "../../components/ferramentas/InputForm/InputForm";
import BotaoADD from "../../components/ferramentas/Botoes/BotaoADD";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { TextField } from "@mui/material";
import { Email } from "@mui/icons-material";
import { FotoUploader } from "../../components/FotoUploader/FotoUploader";
import BotaoADD_Experiencia from "../../components/ferramentas/Botoes/BotaoADD_Experiencia";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const locations = [
  "Manaus-AM",
  "São Paulo-SP",
  "Rio de Janeiro-RJ",
  "Salvador-BA",
  "Fortaleza-CE",
  "Belo Horizonte-MG",
  "Brasília-DF",
  "Curitiba-PR",
  "Recife-PE",
  "Porto Alegre-RS",
];

function getStyles(location, selectedLocations, theme) {
  return {
    fontWeight:
      selectedLocations.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const theme = createTheme();

export const Perfil_Usuario = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  const [selectedLocations, setSelectedLocations] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [nome_curso_faculdade, setNome_curso_faculdade] = useState("");
  const [nome_da_Intituicao_faculdade, setNome_da_Intituicao_faculdade] =
    useState("");
  const [data_De_Inicio_Curso_faculdade, setData_De_Inicio_Curso_faculdade] =
    useState("");
  const [data_De_Fim_Curso_faculdade, setData_De_Fim_Curso_faculdade] =
    useState("");
  const [nome_da_intituicao_Curso, setNome_da_intituicao_Curso] = useState("");
  const [nome_Curso_Cruso, setNome_Curso_Cruso] = useState("");
  const [data_De_Inicio_Curso_Curso, setData_De_Inicio_Curso_Curso] =
    useState("");
  const [data_De_Fim_Curso_Curso, setData_De_Fim_Curso_Curso] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleClick = () => {
    setLoading(true);
    api
      .post("/registrar", {
        nome_Curso_Cruso: nome_Curso_Cruso,
        data_De_Fim_Curso_Curso: data_De_Fim_Curso_Curso,
        data_De_Inicio_Curso_Curso: data_De_Inicio_Curso_Curso,
        nome: nome,
        email: email,
        nome_da_intituicao_Curso: nome_da_intituicao_Curso,
        nome_curso_faculdade: nome_curso_faculdade,
        nome_da_Intituicao_faculdade: nome_da_Intituicao_faculdade,
        data_De_Inicio_Curso_faculdade: data_De_Inicio_Curso_faculdade,
        data_De_Fim_Curso_faculdade: data_De_Fim_Curso_faculdade,
        tipo: "u", //tipo do Usuario = (u)usuario
      })

      .then(({ data }) => {
        setSucesso(true);
      })
      .catch((error) => {
        setError(error.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
    setTimeout(() => {
      localStorage.setItem("user-token", "seu-token-aqui");
      localStorage.setItem("user-type", "seu-tipo-aqui");
    }, 2000);
  };

  return (
    <Box
      className="font-perfilUsuario"
      sx={{
        mt: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "80%",
          }}
        >
          <Typography>
            <Snackbar
              open={sucesso}
              autoHideDuration={6000}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                Cliente cadastrado com sucesso
              </Alert>
            </Snackbar>
            <Snackbar
              open={error}
              autoHideDuration={6000}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity="error" sx={{ width: "100%" }}>
                {error}
              </Alert>
            </Snackbar>
            <Box></Box>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                "@media (max-width:600px)": {
                  justifyContent: "center",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "stretch",
                },
              }}
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              {/* LADO ESQUEDOR */}
              <Box
                sx={{
                  display: "flex",
                  width: "100",
                  flexDirection: "column",
                  "@media (max-width:600px)": {
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column",
                  },
                }}
              >
                {/* FOTO-PERFIL */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ width: "80%" }}>
                    <FotoUploader
                      sx={{ width: "100%" }}
                      style={{
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "100px",
                        boxShadow: "0 0 15px #14037e",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* LADO DIREITO */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                }}
                style={{
                  backgroundColor: "rgba(0,0,0,0.3)",
                  boxShadow: "0 0 11px rgb(169, 169, 169)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Box style={{ color: "white", width: "100%" }}>
                    <Typography
                      style={{ width: "100" }}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      fontSize="20px"
                    >
                      {nome}
                     
                    </Typography>
                  </Box>
                  <Box
                    style={{ color: "white" }}
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  ></Box>

                  <Box
                    sx={{
                      mb: 3,
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 3,
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around",
                        "@media (max-width:600px)": {
                          justifyContent: "center",
                          width: "100%",
                          flexDirection: "column",
                          alignItems: "stretch",
                        },
                      }}
                    >
                      <InputForm
                        style={{ color: "white", width: "45%" }}
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                        label="Nome"
                      />
                      <InputForm
                        style={{ color: "white", width: "45%" }}
                        onChange={(e) => setEmail(e.target.value)}
                        value={Email}
                        label="EMAIL"
                      />
                    </Box>

                    {/* Cidade */}
                    <FormControl
                      sx={{ mt: 2, width: "100%" }}
                      style={{ backgroundColor: "#dbd6fff0" }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                    >
                      <InputLabel id="demo-multiple-location-label">
                        <LocationOnIcon /> LOCAL
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-location-label"
                        id="demo-multiple-location"
                        multiple
                        value={selectedLocations}
                        onChange={handleChange}
                        input={<OutlinedInput label="Local" />}
                        MenuProps={MenuProps}
                      >
                        {locations.map((location) => (
                          <MenuItem
                            key={location}
                            value={location}
                            style={getStyles(
                              location,
                              selectedLocations,
                              theme
                            )}
                          >
                            {location}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
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
                        mt: 2,
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
                      width: "100%",
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
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        FORMAÇÃO ACADÊMICA
                      </Typography>
                      <Box
                        sx={{
                          mt: 2,
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

                  <Botao
                    loading={loading}
                    onClick={handleClick}
                    sx={{ mt: 5 }}
                    fullWidth
                  >
                    SALVAR
                  </Botao>
                </Box>
              </Box>
            </Box>
          </Typography>
        </Box>
      </ThemeProvider>
    </Box>
  );
};
