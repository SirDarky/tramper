import LoadingComponent from '../../components/LoadingComponent';
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
  const [loading, setLoading] = useState(true)

  function request(){
    api.get('/user/vagas').then(res=>{
      setVagas(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    if(!authentication){
      navigate('/')
    }
    request()
    setLoading(false)
  }, [authentication])

  useEffect(() => {
    if (!localStorage.getItem("concordou")) {
      alert('Preservamos a imagem e nomes de canditados para que não haja distinção entre eles.')
      localStorage.setItem('concordou', "sim")
    }
  }, [loading])
  
  useEffect(() => {
    setLoading(true)
    if(vagaAtual===vagas.length){
      setVagaAtual(0)
    }
    setLoading(false)
  }, [vagaAtual])
  


  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"80vh"}}>
      {loading? <LoadingComponent/>:""}
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