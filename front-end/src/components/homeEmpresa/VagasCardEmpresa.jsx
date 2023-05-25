import React, { useEffect } from 'react'
import PersonCard from './PersonCard'

const VagasCardEmpresa = ({vaga}) => {
    useEffect(() => {
      console.log(vaga)
    }, [])
    
  return (
    <div style={{background:"rgba(0, 0, 0, 0.4)", width:"70vw", margin:"30px 0", padding:"20px", color:"#FFF", borderRadius:"20px"}}>
        <div style={{display:'flex', flexDirection:"column"}}>
            <span>Protocolo: {vaga._id}</span>
            <span>Cargo: {vaga.cargo}</span>
        </div>
        { vaga.canditados && vaga.canditados.length>0? vaga.canditados.map((canditado,index)=>(
            <PersonCard key={index} canditado={canditado} />
        )) : ""}
    </div>
  )
}

export default VagasCardEmpresa