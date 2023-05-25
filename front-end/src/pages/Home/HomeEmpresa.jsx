import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Tela_Home } from './Tela_Home'
import { useAuthContext } from '../../context/authContext'
import TelaEmpresa from '../../components/perfilComponents/TelaEmpresa';
import api from '../../services/api';
import Tela_Home_Vagas from './Tela_Home_Vagas';
import ButtonMoviment from '../../components/homeComponents/ButtonMoviment';
import VagasCardEmpresa from '../../components/homeEmpresa/VagasCardEmpresa';

const HomeEmpresa = () => {
  const { authentication, tipoUser, VerificarAntigoLogin } = useAuthContext()
  const [novoCanditado, setNovoCanditado] = useState(false)
  const [vagas, setVagas] = useState([])
  const navigate = useNavigate()

  function ola() {
    console.log(vagas)
  }

  useEffect(() => {
      VerificarAntigoLogin()
      if(!authentication){
          navigate('/')
      }
      if(tipoUser==='User'){
          navigate('/home')
      }
      alert('Preservamos a imagem e nomes de canditados para que não haja distinção entre eles.')
  }, [authentication])

  useEffect(() => {
    api.get('/empresa/vagas').then(res=>{
      setVagas(res.data.vagas)
    }).catch(err=>{
      console.log(err)
    })
  }, [novoCanditado])
  
  return (
    <div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        {vagas && vagas.length>0? vagas.map((vaga, index)=>(<VagasCardEmpresa key={index} vaga={vaga} />)):<span>Você não tem vagas</span>}
      </div>
    </div>
  )
}

export default HomeEmpresa