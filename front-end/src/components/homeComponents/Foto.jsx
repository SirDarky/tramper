import React from 'react'

const Foto = ({img}) => {
  const imagem = "http://localhost:3005/fotos/"+img
  return (
    <div style={{display:"flex", alignItems:"center", height:'30vh', marginBottom:"-15px"}}>
      <img src={imagem} alt="" style={{width: '70vw', height: '100%', objectFit: 'cover', borderTopLeftRadius:"20px", borderTopRightRadius:"20px", maxWidth:"600px"}}/>
    </div>
  )
}

export default Foto