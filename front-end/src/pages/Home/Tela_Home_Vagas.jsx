import ButtonMoviment from '../../components/homeComponents/ButtonMoviment';
import CardVagas from '../../components/homeVaga/CardVagas';
import { useAuthContext } from "../../context/authContext";
import api from "../../services/api";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Tela_Home_Vagas = () => {
  const [vagas, setVagas] = useState([])
  const navigate = useNavigate()
  const { authentication } = useAuthContext()
  const [vagaAtual, setVagaAtual] = useState(0)

  const ola = ()=>{
    console.log(vagaAtual)
  }

  useEffect(() => {
    if(!authentication){
      navigate('/')
    }
    api.get('/user/vagas').then(res=>{
        setVagas(res.data)
        console.log(res.data)
    })
  }, [authentication])

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
      {
        vagas && vagas.length>0? 
          <CardVagas vaga={vagas[vagaAtual]} trocaVaga={setVagaAtual} prevVaga={vagaAtual} key={vagaAtual}/>: <div>
          Você atingiu seu limite hoje, espere um pouco mais!
        </div>
      }
    </div>
  );
}

export default Tela_Home_Vagas