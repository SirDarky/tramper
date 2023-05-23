import React from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  InputAdornment,
  TextField,
  createTheme,
} from "@mui/material";
import {
  ArrowBack,
  Email,
  Lock,
  HowToReg,
  Business,
  Domain,
  LocationOn,
  LocationCity,
} from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
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

export const Cadastro_Empresas = () => {
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

  return (
    <div className="funto_cadastro_usuarios">
      <Box //pai de todos
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
            "@media (max-width:600px)": {
              display: "block",
              alignItems: "stretch",
            },
          }}
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <Box
            sx={{
              m: 20,
              width: "50%",
              display: "flex",
              alignItems: "center",
              "@media (max-width:600px)": {
                m: 0,
                width: "100%",
                alignItems: "stretch",
              },
            }}
          >
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
              style={{ backgroundColor: "rgba(217, 217, 217, 0.41)" }}
            >
              {/* Logo */}
              <ThemeProvider theme={theme}>
                <LocationCity
                  sx={{
                    mb: 3,
                    mt: 2,
                    fontSize: 110,
                    color: "black",
                    "@media (max-width:600px)": { mt: 2, mb: 2, fontSize: 150 },
                    // Defina a cor do ícone para branco
                  }}
                />
              </ThemeProvider>

              <TextField
                sx={{ m: 2, width: "80%" }}
                style={{ backgroundColor: "#dbd6fff0", padding: "" }}
                label="NOME DA EMPRESA"
                InputLabelProps={{
                  style: { color: "black" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business sx={{ fontSize: 35, color: "#000" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                sx={{ m: 2, width: "80%" }}
                style={{ backgroundColor: "#dbd6fff0" }}
                label="ÁREA DE ATUAÇÃO"
                InputLabelProps={{
                  style: { color: "black" },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Domain sx={{ fontSize: 35, color: "#000" }} />
                    </InputAdornment>
                  ),
                }}
              />
              {/* LOCAL */}
              <FormControl
                sx={{ m: 2, width: "80%" }}
                style={{ backgroundColor: "#dbd6fff0" }}
                InputLabelProps={{
                  style: { color: "black" },
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
                      style={getStyles(location, selectedLocations, theme)}
                    >
                      {location}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                sx={{ m: 2, width: "80%" }}
                style={{ backgroundColor: "#dbd6fff0" }}
                label="EMAIL"
                InputLabelProps={{
                  style: { color: "black" },
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
                label="SENHA"
                InputLabelProps={{
                  style: { color: "black" },
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
                  style: { color: "black" },
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

              <Box
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  "@media (max-width:600px)": {
                    mt: 5,
                    mb: 3,
                    flexDirection: "column-reverse",
                  },
                }}
              >
                <ThemeProvider theme={theme}>
                  <Button
                    sx={{
                      fontSize: 20,
                      backgroundColor: "rgba(20, 3, 126, 0.8)",
                      "@media (max-width:600px)": {
                        mt: 2,
                      },
                    }}
                    variant="contained"
                    startIcon={<HowToReg />}
                  >
                    REGISTRAR
                  </Button>
                  <Button
                    sx={{
                      fontSize: 20,
                      backgroundColor: "rgba(20, 3, 126, 0.8)",
                    }}
                    variant="contained"
                    startIcon={<ArrowBack />}
                  >
                    VOLTAR
                  </Button>
                </ThemeProvider>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};
