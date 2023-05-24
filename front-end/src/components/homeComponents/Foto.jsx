import React from 'react'

const Foto = ({img}) => {
  const imagem = "http://localhost:3005/fotos/"+img
  return (
    <div style={{display:"flex", alignItems:"center", height:'400px', marginBottom:"-15px"}}>
      <img src={imagem} alt="" style={{width: '500px', height: '100%', objectFit: 'cover', borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}}/>
    </div>
  )
}

export default Foto