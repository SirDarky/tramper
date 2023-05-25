import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Tela_Home } from './Tela_Home'
import { useAuthContext } from '../../context/authContext'
import TelaEmpresa from '../../components/perfilComponents/TelaEmpresa';
import api from '../../services/api';
import Tela_Home_Vagas from './Tela_Home_Vagas';
import ButtonMoviment from '../../components/homeComponents/ButtonMoviment';

const Home = () => {
    const { authentication, tipoUser, VerificarAntigoLogin } = useAuthContext()
    const [networkingVagas, setnetworkingVagas] = useState('Networking')
    const navigate = useNavigate()

    function trocar(){
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
            <div style={{display:"flex", flexDirection:"row", background:"rgba(0, 0, 0, 0.4)", width:"270px", marginLeft:"auto", marginRight:"auto", padding:"10px", marginTop:"20px", borderRadius:"15px"}}>
                <span style={{color: networkingVagas==="Networking"? '#fff': '#CCC', fontWeight: networkingVagas==='Networking'? "600": "400"}}>Networking</span>
                <ButtonMoviment click={trocar}/>
                <span style={{color: networkingVagas==="Vagas"? '#fff': '#CCC', fontWeight: networkingVagas==='Vagas'? "600": "400"}}>Vagas</span>
            </div>
            {networkingVagas==='Networking'? <Tela_Home/> : networkingVagas=== 'Vagas'? <Tela_Home_Vagas/>: ""}
        </div>
    )
}

export default Home