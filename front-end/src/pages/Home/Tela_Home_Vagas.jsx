import React, { useState } from 'react'
import CardVagas from '../../components/homeComponents/CardVagas'

const Tela_Home_Vagas = () => {
  const [vagas, setVagas] = useState([])
  const navigate = useNavigate()
  const { authentication } = useAuthContext()
  const [vagaAtual, setVagaAtual] = useState(0)

  const ola = ()=>{
    console.log(usuarioAtual)
  }

  useEffect(() => {
    if(!authentication){
      navigate('/')
    }
    api.get('/user/vagas').then(res=>{
        setVagas(res.data.users)
        console.log(res.data.users)
    })
  }, [authentication])

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
      {
        users && users.length>0? 
          <CardVagas vaga={vagas[vagaAtual]} trocaVaga={setVagaAtual} prevVaga={vagaAtual} key={vagaAtual}/>: <div>
          Você atingiu seu limite hoje, espere um pouco mais!
        </div>
      }
    </div>
  );
}

export default Tela_Home_Vagas