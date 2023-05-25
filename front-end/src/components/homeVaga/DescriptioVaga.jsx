import React from "react";

const DescriptionVaga = ({vaga, trocaVaga, prevVaga, })=>{
    return (
        <div style={{display:"flex", flexDirection:'column', height:'300px', width:'100%', background: 'linear-gradient(to top, #4588A5, #332264)', borderRadius:"20px" }}>
          <div style={{display:'flex', flexDirection:"row", paddingTop:"20px", paddingLeft:"20px" }}>
            <div style={{marginRight:"10px", fontSize:'24px', fontWeight:'600', color:"#FCFCFC"}}>{vaga.cargo},</div>
            <div style={{color:'#FCFCFC'}}>{vaga.salario}</div>
          </div>
          <div style={{paddingLeft:"20px", fontSize:"18px", color:"#F2DFDF"}}>{vaga.empresa.nome}</div>
          <div style={{paddingLeft:"20px", fontSize:"24px", color:"#FCFCFC"}}>{vaga.beneficios}</div>
          <div style={{paddingLeft:"20px", fontSize:"24px", color:"#FCFCFC"}}>{vaga.descricao}</div>
        </div>
      )
}

export default DescriptionVaga