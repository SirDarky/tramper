import React, { useState } from "react";
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
import Card from "../../components/homeComponents/Card";

// array de usuarios para fazer teste
const Login = [
  {
    id:100,
    status: "R", //"R" de RH
  }
]
 
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

// Mudar de cor dos ícones
const theme = createTheme({
  palette: {
    primary: {
      main: "#f00",
    },
  },
});
// ----------------------------------------------------------------

// BOTAO PARA VER O CURRICULO COMPLETO
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  transition: theme.transitions.create({
    duration: theme.transitions.duration.shortest,
  }),
}));
// ----------------------------------------------------------------

export const Tela_Home = () => {
  // BOTAO PARA VER O CURRICULO COMPLETO

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // ----------------------------------------------------------------

  const usuarios = Usuario_Usuario;
  const [usuarioAtual, setUsuarioAtual] = useState(0);

  const handleNextUser = () => {
    setUsuarioAtual((prevUsuario) =>
      prevUsuario === usuarios.length - 1 ? 0 : prevUsuario + 1
    );
  };

  const handlePreviousUser = () => {
    setUsuarioAtual((prevUsuario) =>
      prevUsuario === 0 ? usuarios.length - 1 : prevUsuario - 1
    );
  };

  const usuario = usuarios[usuarioAtual];

  return (
    <div key={usuario.id} style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
      <Card usuario={Usuario_Usuario[0]}/>
    </div>
  );
};
