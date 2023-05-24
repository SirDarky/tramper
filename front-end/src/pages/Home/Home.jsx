import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Tela_Home } from './Tela_Home'
import { useAuthContext } from '../../context/authContext'
import TelaEmpresa from '../../components/perfilComponents/TelaEmpresa';
import api from '../../services/api';

const Home = () => {
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
            {tipoUser==='User'? <Tela_Home/> : tipoUser=== 'Empresa'? <TelaEmpresa/>: ""}
        </div>
    )
}

export default Home