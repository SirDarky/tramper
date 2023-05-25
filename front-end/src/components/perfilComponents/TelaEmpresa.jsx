import React, { useState, useEffect } from 'react'
import { linkPhoto } from '../../services/constantes'
import api from '../../services/api'
import LoadingComponent from '../LoadingComponent'
import PhotoComponent from './PhotoComponent'
import TelaPerfilCss from './TelaPerfil.css'
import InfoVagas from './InfoVagas'
import CardVagas from '../homeVaga/CardVagas'
import { AdicionarVaga } from './Adicionar'

const TelaEmpresa = () => {
  const [adicionarVaga, setAdicionarVaga] = useState(false)
  const [loading, setLoading] = useState(false)
  const [vagas, setVagas] = useState({})
  const [info, setInfo] = useState({})
  const [atualizado, setAtualizado] = useState(false)
  const [upFoto, setUpFoto] = useState(false)

  function UpFoto() {
    setUpFoto(!upFoto)
  }
  
  function adicionarNovaVaga() {
    setAdicionarVaga(!adicionarVaga)
  }

  useEffect(() => {
    setLoading(true)
    api.get('/empresa/myuser').then(res=>{
        setInfo(res.data.empresa)
        console.log(res.data.empresa)
    })
    api.get('/empresa/vagas').then(res=>{
      setVagas(res.data.vagas)
    })  
    setTimeout(() => {
        setLoading(false)
    }, 1000);
  }, [atualizado])

  return (
    <div>
      { loading? <LoadingComponent/>: ""}
      <div className='telaPerfil'>
        <div>
          <div className='foto'>
            {info.photopaths!=null? <img src={linkPhoto+info.photopaths} alt="" style={{width: '200px', height:"200px", objectFit: 'cover', borderRadius:"90px", marginTop:"50px"}}/>: <div style={{width:"200px", display:"flex", alignItems:"center", justifyContent:"center", marginTop:"100px"}}><span style={{widht:"200px"}}>Você não possui foto de perfil. Sua Vagas não serão apresentadas aos usuarios.</span></div>}
            {upFoto? <PhotoComponent setState={setAtualizado} state={atualizado} tipoUpload={"Empresa"}/> : ""}
            <div style={{marginTop:"30px", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <button onClick={UpFoto}><span style={{color:"#000", }}>Trocar foto</span></button>
                <span style={{color:"#fff", fontSize:"20px"}}>{info.nome}</span>
                <span style={{color:"#fff", fontSize:"16px"}}>{info.local}</span>
            </div>
          </div>
          <div className='perfil'>
            <div>Vagas disponiveis</div>
            <div>
              {vagas && vagas.length>0? vagas.map((vaga, index)=>(
                <InfoVagas vaga={vaga} key={index} setState={setAtualizado} state={atualizado} setLoading={setLoading} stateLoading={loading} />
              )): <span>Não há vagas disponiveis</span>}
            </div>
            {adicionarVaga? <AdicionarVaga setAdicionar={setAdicionarVaga} setLoading={setLoading} state={loading} setAtualizar={setAtualizado} atualizar={atualizado} />:""}
            <button onClick={adicionarNovaVaga}>{adicionarVaga? "Voltar":"Criar nova Vaga"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TelaEmpresa