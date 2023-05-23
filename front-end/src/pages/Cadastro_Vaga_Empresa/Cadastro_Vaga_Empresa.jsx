import React, { useState } from "react";
import { Button, Card, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputForm from "../../components/ferramentas/InputForm/InputForm";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      darker: "#000000",
    },
  },
});

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

function getStyles(
  location,
  jobPosition,
  selectedJobPositions,
  selectedLocations,
  theme
) {
  const isJobPositionSelected =
    selectedJobPositions.indexOf(jobPosition) !== -1;
  const isLocationSelected = selectedLocations.indexOf(location) !== -1;

  return {
    fontWeight:
      isJobPositionSelected || isLocationSelected
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

const jobPositions = [
  "Programador",
  "Gerente",
  "Analista de Dados",
  "Designer",
  "Engenheiro de Software",
  "Consultor de Negócios",
  "Analista de Marketing",
  "Administrador de Sistemas",
  "Analista Financeiro",
  "Gerente de Projeto",
];

export const Cadastro_Vaga_Empresa = () => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedJobPositions, setSelectedJobPositions] = useState([]);

  const handleLocationChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedLocations(typeof value === "string" ? value.split(",") : value);
  };

  const handleJobPositionChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedJobPositions(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mt: 2,
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "@media (max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <Box //formulario
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            "@media (max-width:600px)": {
              height: "100ch",
            },
          }}
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <Box
            sx={{
              mt: 2,
              width: "70%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <ThemeProvider theme={theme}>
              <Box // local cargo
                sx={{
                  width: "100%",
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  "@media (max-width:600px)": {
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column",
                  },
                }}
              >
                <FormControl
                  sx={{
                    width: "45%",
                    "@media (max-width:600px)": {
                      width: "100%",
                    },
                  }}
                >
                  <InputLabel id="demo-multiple-location-label">
                    <LocationOnIcon /> LOCAL
                  </InputLabel>
                  <Select
                    value={selectedLocations}
                    onChange={handleLocationChange}
                    multiple
                    style={{ backgroundColor: "#dbd6fff0" }}
                    sx={{ backgroundColor: "#dbd6fff0" }}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {locations.map((location) => (
                      <MenuItem
                        key={location}
                        value={location}
                        style={getStyles(
                          location,
                          "",
                          selectedJobPositions,
                          selectedLocations,
                          theme
                        )}
                      >
                        {location}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl
                  sx={{
                    width: "45%",
                    "@media (max-width:600px)": {
                      mt: 1,
                      width: "100%",
                    },
                  }}
                >
                  <InputLabel id="demo-multiple-jobPosition-label">
                    <WorkIcon /> Cargo
                  </InputLabel>
                  <Select
                    value={selectedJobPositions}
                    onChange={handleJobPositionChange}
                    multiple
                    style={{ backgroundColor: "#dbd6fff0" }}
                    sx={{ backgroundColor: "#dbd6fff0" }}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {jobPositions.map((jobPosition) => (
                      <MenuItem
                        key={jobPosition}
                        value={jobPosition}
                        style={getStyles(
                          "",
                          jobPosition,
                          selectedJobPositions,
                          selectedLocations,
                          theme
                        )}
                      >
                        {jobPosition}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box // titulo salario
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  "@media (max-width:600px)": {
                    justifyContent: "center",
                    width: "100%",
                    flexDirection: "column",
                  },
                }}
              >
                <InputForm label="TITULO DA VAGA"   sx={{
                 
                }} />
                <InputForm label="SALARIAL" />
              </Box>
              <Box //beneficio requisito descricao
                sx={{
                  mt: 2,
                  width: "100%",
                }}
              >
                <TextField
                  className="cor"
                  multiline
                  rows={7}
                  sx={{
                    mb: 4,
                    width: "100%",
                  }}
                  label="BENEFÍCIOS"
                  style={{
                    backgroundColor: "rgba(219, 214, 255, 0.941)",
                  }}
                />

                <TextField
                  className="cor"
                  multiline
                  rows={7}
                  sx={{
                    mb: 4,
                    width: "100%",
                  }}
                  label="REQUISITOS"
                  style={{
                    backgroundColor: "rgba(219, 214, 255, 0.941)",
                  }}
                />

                <TextField
                  multiline
                  rows={7}
                  sx={{
                    mb: 2,
                    width: "100%",
                  }}
                  label="DESCRIÇÃO DA VAGA"
                  style={{
                    backgroundColor: "rgba(219, 214, 255, 0.941)",
                  }}
                />
                <Box
                  sx={{
                    mt: 2,
                    mb: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* SALVAR */}
                  <Button
                    variant="contained"
                    endIcon={<BookmarkAddIcon />}
                    style={{ color: "white", backgroundColor: "#14037e" }}
                  >
                    SALVAR
                  </Button>
                </Box>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
