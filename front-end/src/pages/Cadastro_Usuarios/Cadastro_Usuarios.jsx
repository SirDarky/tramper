import React, { useEffect, useState } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useAuthContext } from "../../context/authContext";
import { Link, useNavigate  } from 'react-router-dom'
import api from "../../services/api";
import ErrorMensageComponent from "../../components/erros/ErrorMensageComponent";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

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

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(location, selectedLocations, theme) {
  return {
    fontWeight:
      selectedLocations.indexOf(location) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const theme = createTheme({});

export const Cadastro_Usuarios = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [idade, setIdade] = useState("")
  const [senha, setSenha] = useState("")
  const [bio, setBio] = useState("")
  const [nome, setNome] = useState("")
  const [repeatSenha, setRepeatSenha] = useState("")
  const [selectedLocations, setSelectedLocations] = React.useState([]);

  //erros
  const [error, setError] = useState("")
  const [userErro, setUserErro] = useState(false);

  const [loading, setLoading] = useState(false)

  const novoEmail = (event)=>{setEmail(event.target.value)}
  const novaSenha = (event)=>{setSenha(event.target.value)}
  const novaBio = (event)=>{setBio(event.target.value)}
  const novoNome = (event)=>{setNome(event.target.value)}
  const novoIdade = (event)=>{setIdade(event.target.value)}
  const novoRepeatSenha = (event)=>{setRepeatSenha(event.target.value)}

  const { RealizarNewLoginCliente, VerificarAntigoLogin, authentication } = useAuthContext()  

  const handleChange = (event) => {
    setSelectedLocations(event.target.value)
  };


  const registrarUsuario = ()=>{
    if(senha === repeatSenha){
      const newUser = {
        email: email, 
        senha: senha,
        nome: nome,
        resumo: bio,
        idade: idade,
        cidade: selectedLocations
      }
      api.post("/registrouser", newUser).then(res=>{
        console.log(2)
        RealizarNewLoginCliente(res.data)
        console.log("hello")
      }).catch(err=>{
        if(err.response.status ===400){
          setUserErro(true)
        }
      })
    } else {
      console.log('eita')
    }
  }

  useEffect(() => {
    VerificarAntigoLogin()
    if(authentication){
      navigate('/home')
    }
  }, [authentication])
  
  //value={email}
  //onChange={handleEmailChange}
  return (
    <div>
      {userErro? <ErrorMensageComponent errorMensage={"Email em uso"} setState={setUserErro}/> :""}
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
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold", color:"#FFF"}}>EMAIL</span>}
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
                label={<span style={{ fontWeight: "bold", color:"#FFF"}}>NOME</span>}
                value={nome}
                onChange={novoNome}
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
                sx={{ m: 2, width: "80%" }}
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold", color:"#FFF"}}>IDADE</span>}
                value={idade}
                onChange={novoIdade}
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
                sx={{ m: 1, width: "80%" }}
                style={{ backgroundColor: "#5F9EA0" }}
                label={<span style={{ fontWeight: "bold", color:"#FFF"}}>SENHA</span>}
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
                label={<span style={{ fontWeight: "bold", color:"#FFF"}}>REPITA A SENHA</span>}
                value={repeatSenha}
                onChange={novoRepeatSenha}
                InputLabelProps={{
                  style: { color: "#FFF" },
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
                label={<span style={{ fontWeight: "bold", color:"#000"}}>RESUMO SOBRE VOCÊ</span>}
                value={bio}
                onChange={novaBio}
                InputLabelProps={{
                  style: { color: "#000" },
                }}
                multiline
                variant="filled"
                rows={7}
                sx={{ mt: 3, ml: 1, mr: 1, width: "80%" }}
                style={{ backgroundColor: "#5F9EA0" }}
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
                  <Button sx={{}} variant="contained" onClick={registrarUsuario} startIcon={<HowToReg />}>
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
