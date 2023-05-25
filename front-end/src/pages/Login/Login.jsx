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
import React, {useState, useEffect} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import styled from "styled-components";
import api from "../../services/api";
import { useAuthContext } from "../../context/authContext";
import ErrorMensageComponent from "../../components/erros/ErrorMensageComponent";
import LoadingComponent from "../../components/LoadingComponent";


const WhiteIcon = styled(({ ...other }) => <span {...other} />)(
  ({ theme }) => ({
    color: "#000",
  })
);

export const Login = () => {
  const { RealizarNewLoginCliente, VerificarAntigoLogin, authentication, tipoUser } = useAuthContext()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState("")
  const [selectedOption, setSelectedOption] = useState('usuario');

  const [loading, setLoading] = useState(false)
  
  const [erromsg, setErromsg] = useState()

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Atualiza o estado do email com o valor inserido no campo de entrada
  };
  const handleSenhaChange = (event) => {
    setSenha(event.target.value); // Atualiza o estado do email com o valor inserido no campo de entrada
  };
  const fazerLogin = (event) => {
    setLoading(true)
    const data = {
      email: email,
      senha: senha
    }
    if(selectedOption === 'usuario'){
      api.post('/loginuser', data).then(res =>{
        setLoading(false)
        RealizarNewLoginCliente(res.data)
      }).catch(err=>{
        if(err.response.status===401){
          setLoading(false)
          setErromsg(401)
        }
        setLoading(false)
      })
    } else if(selectedOption === 'empresa'){
      api.post('/loginempresa', data).then(res =>{
        setLoading(false)
        RealizarNewLoginCliente(res.data)
      }).catch(err=>{
        if(err.response.status===401){
          setLoading(false)
          setErromsg(401)
        }
        setLoading(false)
      })
    }
  };
  useEffect(() => {
    VerificarAntigoLogin()
    if(authentication){
      if(tipoUser === "Empresa"){
        navigate('/homeEmpresa')
      } else {
        navigate("/home")
      }
    }
  }, [authentication])
  
  
  return (
    <div className="funto_login">
      {erromsg? <ErrorMensageComponent errorMensage={"Email ou Senha invalida"} setState={setErromsg} tipoErro={erromsg} />:""}
      {loading? <LoadingComponent /> : ""}
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
            <span>Selecione o Tipo de Login</span>
            <select id="loginType" value={selectedOption} onChange={handleSelectChange} style={{borderRadius:"10px", padding:"2px 10px"}}>
                <option value="usuario">Usuário</option>
                <option value="empresa">Empresa</option>
              </select>
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
                  value={email}
                  onChange={handleEmailChange}
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
                  value={senha}
                  onChange={handleSenhaChange}
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>

            <Link to={"/cadastroUsuarios"} style={{ color: "black", textDecoration: 'none', fontSize: 20 }}>Cadastro de Usuario</Link>
            <Link to={"/cadastroEmpresas"} style={{ color: "black", textDecoration: 'none', fontSize: 20 }}>Cadastro de Empresa</Link>

            <Button
              sx={{ mt: 4 }}
              fullWidth
              variant="contained"
              endIcon={<BookmarkAddIcon />}
              style={{ color: "white", backgroundColor: "#14037e" }}
              onClick={fazerLogin}
            >
              LOGIN
            </Button>

          </Card>
        </Container>
      </Box>
    </div>
  );
};
