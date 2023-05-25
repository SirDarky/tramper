import React, { useState } from "react";
import DetailsVaga from "./DetailsVaga";

const DescriptionVaga = ({vaga })=>{
  const [openDetails, setOpenDetails] = useState(false)
  const abrirDetalhes = ()=>{
    setOpenDetails(true)
  }
    return (
        
        <div style={{display:"flex", flexDirection:'column', height:'35vh', width:'100%', background: 'linear-gradient(to top, #4588A5, #332264)', borderRadius:"20px", justifyContent:"space-between" }}>
          <div>
            {openDetails===true? <DetailsVaga vaga={vaga} setState={setOpenDetails}/>: ""}
            <div style={{display:'flex', flexDirection:"row", padding:"20px", justifyContent:"space-between" }}>
              <div style={{marginRight:"10px", fontSize:'28px', fontWeight:'600', color:"#FCFCFC"}}>{vaga.cargo}</div>
              <div style={{color:'#FCFCFC', fontSize:"16px"}}>{vaga.empresa.nome}</div>
            </div>
            <div style={{paddingLeft:"20px", fontSize:"20px", color:"#FCFCFC"}}>Salário: R${vaga.salario},00</div>
            <div style={{paddingLeft:"20px", fontSize:"20px", color:"#FCFCFC"}}>Descrição: {vaga.descricao}</div>
          </div>
          <div style={{display:'flex', width:"100%", alignItems:"center", justifyContent:"center"}}>
            <button style={{width:"85px", background:"purple", color:"#fff", borderRadius:"20px", border:"0", marginBottom:"20px", cursor:"pointer"}} onClick={abrirDetalhes}>Ver mais</button>
          </div>
        </div>
      )
}

export default DescriptionVaga