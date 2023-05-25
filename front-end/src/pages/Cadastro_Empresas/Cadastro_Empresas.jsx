import React, {useState, useEffect} from "react";
import { Link, useNavigate  } from 'react-router-dom'
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
import { useAuthContext } from "../../context/authContext";
import api from "../../services/api";
import ErrorMensageComponent from "../../components/erros/ErrorMensageComponent";

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
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [atuacao, setAtuacao] = useState("")
  const [nome, setNome] = useState("")
  const [repeatSenha, setRepeatSenha] = useState("")
  const [selectedLocations, setSelectedLocations] = React.useState([]);

  //erros
  const [error, setError] = useState("")
  const [userErro, setUserErro] = useState(false);

  const novoEmail = (event)=>{setEmail(event.target.value)}
  const novaSenha = (event)=>{setSenha(event.target.value)}
  const novaAtuacao = (event)=>{setAtuacao(event.target.value)}
  const novoNome = (event)=>{setNome(event.target.value)}
  const novoRepeatSenha = (event)=>{setRepeatSenha(event.target.value)}

  const { RealizarNewLoginCliente, VerificarAntigoLogin, authentication } = useAuthContext()

  useEffect(() => {
    VerificarAntigoLogin()
    if(authentication){
      navigate('/homeEmpresa')
    }
  }, [authentication])

  const handleChange = (event) => {
    setSelectedLocations(event.target.value)
  };

  const registrarEmpresa = ()=>{
    if(senha === repeatSenha){
      const newUser = {
        email: email, 
        senha: senha,
        nome: nome,
        areaAtuacao: atuacao,
        local: selectedLocations
      }
      api.post("/registroempresa", newUser).then(res=>{
        RealizarNewLoginCliente(res.data)
      }).catch(err=>{
        if(err.response.status ===400){
          setUserErro(true)
        }
        if(err.response.status ===500){
          setError(500)
        }
      })
    } else {
      console.log('eita')
    }
  }

  return (
    <div className="funto_cadastro_usuarios">
      {userErro? <ErrorMensageComponent errorMensage={"E-mail em uso"} setState={setUserErro}tipoErro={userErro}/> :""}
      {error===500? <ErrorMensageComponent errorMensage={"Erro do servidor"} setState={setError} tipoErro={error}/> :""}
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
            "@media (max-width:600px)": { mt: 5, mb: 3 },
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
                style={{ backgroundColor: "#5F9EA0", padding: "" }}
                label={<span style={{ fontWeight: "bold" }}>NOME DA EMPRESA</span>}
                value={nome}
                onChange={novoNome}
                InputLabelProps={{
                  style: { color: "#fff" },
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
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold" }}>ÁREA DE ATUAÇÃO</span>}
                value={atuacao}
                onChange={novaAtuacao}
                InputLabelProps={{
                  style: { color: "#fff" },
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
                style={{ backgroundColor: "#5F9EA0", color:"#000" }}
                InputLabelProps={{
                  style: { color: "#fff" },
                }}
              >
                <InputLabel id="demo-multiple-location-label">
                  <LocationOnIcon /> <span style={{ fontWeight: "bold", color:"#FFF" }}>LOCAL</span>
                </InputLabel>
                <Select
                  labelId="demo-multiple-location-label"
                  id="demo-multiple-location"
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
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold" }}>EMAIL</span>}
                value={email}
                onChange={novoEmail}
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
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold" }}>SENHA</span>}
                value={senha}
                onChange={novaSenha}
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
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold" }}>REPITA A SENHA</span>}
                value={repeatSenha}
                onChange={novoRepeatSenha}
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
                    style={{ fontSize: 20, backgroundColor: "rgba(20, 3, 126, 0.8)" }}
                    variant="contained"
                    startIcon={<HowToReg />}
                    onClick={registrarEmpresa}
                  >
                    REGISTRAR
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
