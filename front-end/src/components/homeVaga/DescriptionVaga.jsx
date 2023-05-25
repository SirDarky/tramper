import React, { useState } from "react";
import DetailsVaga from "./DetailsVaga";
import fotoDescription from '../homeComponents/fotoDescription.css'

const DescriptionVaga = ({vaga })=>{
  const [openDetails, setOpenDetails] = useState(false)
  const abrirDetalhes = ()=>{
    setOpenDetails(true)
  }
  const truncateDescription = (description, maxLength) => {
    const words = description.split(' ');
    if (words.length > maxLength) {
      const truncatedWords = words.slice(0, maxLength);
      return truncatedWords.join(' ') + '...';
    }
    return description;
  };

  const truncatedDescription = truncateDescription(vaga.descricao, 8);
    return (
        
        <div className='description'>
          <div>
            {openDetails===true? <DetailsVaga vaga={vaga} setState={setOpenDetails}/>: ""}
            <div style={{display:'flex', flexDirection:"row", padding:"20px", justifyContent:"space-between" }}>
              <div className='font' style={{marginRight:"10px", fontSize:'28px', fontWeight:'600', color:"#FCFCFC"}}>{vaga.cargo}</div>
              <div  style={{color:'#FCFCFC', fontSize:"16px"}}>{vaga.empresa.nome}</div>
            </div>
            <div className='font' style={{paddingLeft:"20px", fontSize:"20px", color:"#FCFCFC"}}>Salário: R${vaga.salario},00</div>
            <div className='fontdescription' style={{paddingLeft:"20px", fontSize:"20px", color:"#FCFCFC"}}>Descrição: {truncatedDescription}</div>
          </div>
          <div style={{display:'flex', width:"100%", alignItems:"center", justifyContent:"center"}}>
            <button style={{width:"85px", background:"purple", color:"#fff", borderRadius:"20px", border:"0", marginBottom:"20px", cursor:"pointer"}} onClick={abrirDetalhes}>Ver mais</button>
          </div>
        </div>
      )
}

export default DescriptionVaga