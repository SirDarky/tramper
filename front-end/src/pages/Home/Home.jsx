import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Tela_Home } from './Tela_Home'
import { useAuthContext } from '../../context/authContext'
import TelaEmpresa from '../../components/perfilComponents/TelaEmpresa';
import api from '../../services/api';
import Tela_Home_Vagas from './Tela_Home_Vagas';

const Home = () => {
    const { authentication, tipoUser, VerificarAntigoLogin } = useAuthContext()
    const [networkingVagas, setnetworkingVagas] = useState('Networking')
    const navigate = useNavigate()

    const buttonTroca = ()=>{
        if(networkingVagas==='Networking'){
            setnetworkingVagas('Vagas')
        } else{
            setnetworkingVagas('Networking')
        }
    }
    useEffect(() => {
        VerificarAntigoLogin()
        if(!authentication){
            navigate('/')
        }
        if(tipoUser==='Empresa'){
            navigate('/homeEmpresa')
        }
    }, [authentication])
  

    return (
        <div>
            <button onClick={buttonTroca}>{networkingVagas==='Networking'? 'Vagas': 'Networking'}</button>
            {networkingVagas==='Networking'? <Tela_Home/> : networkingVagas=== 'Vagas'? <Tela_Home_Vagas/>: ""}
        </div>
    )
}

export default Home