import React from 'react'
import { linkPhoto } from '../../services/constantes'

const Foto = ({img}) => {
  const imagem = linkPhoto+img
  return (
    <div style={{display:"flex", alignItems:"center", height:'400px', marginBottom:"-15px"}}>
      <img src={imagem} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius:"20px", borderTopRightRadius:"20px", maxWidth:"600px"}}/>
    </div>
  )
}

export default Foto