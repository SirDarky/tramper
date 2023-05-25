import React, { useState, useEffect } from 'react';
import Foto from './Foto';
import ButtonLikeDislike from './ButtonLikeDislike';
import Description from './Description';
import api from '../../services/api';
import IconeLike from '../../icons/icone-like.svg'
import IconeDislike from '../../icons/icone-dislike.svg'
import CardCss from './Card.css'

const Card = ({ usuario, match, trocaUsuario, prevUsuario }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [vazio, setVazio] = useState(false)

  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredDislike, setIsHoveredDislike] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };
  const handleHoverOut = () => {
    setIsHovered(false);
  };
  const handleHoverDislike = () => {
    setIsHoveredDislike(true);
  };
  const handleHoverOutDislike = () => {
    setIsHoveredDislike(false);
  };

  const handleLike = () => {
    const userid = {userIdCurtido:usuario._id};
    api.put('/user/curtidas', userid).then((res)=>{
      if(res.data.codigo===1000){
        match(usuario._id)
      }
    }).catch((error) => {
      // Trate o erro, se necessário
      console.error('Erro ao enviar dislike:', error);
    });
    trocaUsuario(prevUsuario+1)
  };

  const handleDislike = () => {
    const userid = {userIdRejeitado:usuario._id};
    api.put('/user/rejeicoes', userid).then((res)=>{
      setLiked(true);
    }).catch((error) => {
      // Trate o erro, se necessário
      console.error('Erro ao enviar dislike:', error);
    });
    trocaUsuario(prevUsuario+1)
    console.log('Enviando dislike para o usuário:', usuario._id);
  };

  if(!usuario){
    return(
      <div>
        Você atingiu seu limite hoje, espere um pouco mais!
      </div>
    )
  } else {
    return (
      <div className='card'>
        <Foto img={usuario.photopaths} />
        <Description nome={usuario.nome} idade={usuario.idade} bio={usuario.resumo} cidade={usuario.cidade} />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "auto" }}>
          <button onClick={handleDislike} style={{background:"rgba(0, 0, 0, 0)", border:"0"}}><img onMouseEnter={handleHoverDislike} onMouseLeave={handleHoverOutDislike} src={IconeDislike} style={{ height: isHoveredDislike ? "115px": "100px", width:isHoveredDislike ? "115px": "100px", position:"absolute", margin:"-60px 0 0 -5px",cursor:"pointer", transition:"all 0.3s ease"}}/></button>
          <button onClick={handleLike} style={{background:"rgba(0, 0, 0, 0)", border:"0"}}><img onMouseEnter={handleHover} onMouseLeave={handleHoverOut} src={IconeLike} style={{height: isHovered ? "130px": "110px", width:isHovered ? "130px": "110px", position:"absolute", margin:"-67px 0 0 -90px", cursor:"pointer", transition:"all 0.3s ease" }}/></button>
        </div>
      </div>
    );
  }
};

export default Card;