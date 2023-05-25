import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Card from '../../components/homeComponents/Card'
import { useAuthContext } from "../../context/authContext";
import api from "../../services/api";
import Match from "../../components/homeComponents/Match";
 
const Usuario_Usuario = [
  {
    id: 1,
    name: "João",
    age: 25,
    bio: "Lorem ipsum dolor sit amet.",
    cidade: "São Paulo",
    nomeFaculdade: "Universidade ABC",
    curso: "Engenharia Civil",
    dataInicio: "01/01/2018",
    dataConclusao: "31/12/2022",
    img: "https://i.pinimg.com/564x/da/1d/6c/da1d6cacfb6ee816e4037a7cf055619f.jpg",
    email: "joao@example.com",
    status: "c", //"c" DE cliente
  },
  {
    id: 2,
    name: "Yobm",
    age: null,
    bio: "Consectetur adipiscing elit.",
    cidade: "Rio de Janeiro",
    nomeFaculdade: "Universidade XYZ",
    curso: "Administração",
    dataInicio: "01/02/2017",
    dataConclusao: "30/11/2021",
    img: "https://scontent.fpll8-1.fna.fbcdn.net/v/t39.30808-6/260648361_3134682613469704_5117394513498136938_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3yZkqO_sEtkAX_4QEnl&_nc_ht=scontent.fpll8-1.fna&oh=00_AfDCeHTwKYD7p-bfHQfOy6mDy3Zwd2_kFc5fvUl3ty-9Yg&oe=646F364B",
    email: "maria@example.com",
    status: "E", //"E" DE EMPRESA
    
  },
  {
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
    status: "c", //"c" DE cliente
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
    status: "c", //"c" DE cliente
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
    status: "c", //"c" DE cliente
  },
];
// ----------------------------------------------------------------

export const Tela_Home = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()
  const { authentication } = useAuthContext()
  const [match, setMatch] = useState(0)
  const [usuarioAtual, setUsuarioAtual] = useState(0)

  const ola = ()=>{
    console.log(usuarioAtual)
  }

  useEffect(() => {
    if(!authentication){
      navigate('/')
    }
    api.get('/user/users').then(res=>{
        setUsers(res.data.users)
        console.log(res.data.users)
    })
  }, [authentication])

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
      { match!=0?<Match setState={setMatch}/>:""}
      {
        users && users.length>0? 
          <Card usuario={users[usuarioAtual]} match={setMatch} trocaUsuario={setUsuarioAtual} prevUsuario={usuarioAtual} key={usuarioAtual}/>: <div>
          Você atingiu seu limite hoje, espere um pouco mais!
        </div>
      }
    </div>
  );
};
