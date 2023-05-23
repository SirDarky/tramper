import React from 'react'
import Foto from './Foto'
import ButtonLikeDislike from './ButtonLikeDislike'
import Description from './Description'

const Card = ({ usuario }) => {
  //fotopath, nome, idade, bio, cidade, usuarioId
  return (
    <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", borderRadius: "10px", boxShadow: "10px 4px 7px rgba(0, 0, 0, 0.4)", width:"500px", height:'670px', margin: "0 auto"}}>
      <Foto img={usuario.img} />
      <Description nome={usuario.name} idade={usuario.age} bio={usuario.bio} cidade={usuario.cidade}  />
      <div style={{ display: "flex", justifyContent: "space-between", width:"100%", marginTop: "auto" }}>
        <ButtonLikeDislike tipo={"dislike"} />
        <ButtonLikeDislike tipo={"like"} />
      </div>
    </div>

    
  )
}

export default Card