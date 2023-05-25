import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import TelaPerfil from "../../components/perfilComponents/TelaPerfil";
import { useAuthContext } from "../../context/authContext";
import Home from "../Home/Home";
import HomeEmpresa from "../Home/HomeEmpresa";
import TelaEmpresa from "../../components/perfilComponents/TelaEmpresa";


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

export const Perfil_Usuario = () => {
  const { authentication, tipoUser, VerificarAntigoLogin } = useAuthContext()
  const navigate = useNavigate()
  useEffect(() => {
    VerificarAntigoLogin()
    if(!authentication){
      navigate('/')
    }
  }, [authentication])
  

  return (
    
    <div>
      {
        tipoUser==="User"? <TelaPerfil/> : tipoUser==='Empresa'? <TelaEmpresa/> : ""
      }
    </div>
  );
};
