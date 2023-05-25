import React, { useState, useEffect } from 'react';
import Foto from '../homeComponents/Foto';
import ButtonLikeDislike from '../homeComponents/ButtonLikeDislike';
import Description from '../homeComponents/Description';
import api from '../../services/api';
import IconeLike from '../../icons/icone-like.svg'
import IconeDislike from '../../icons/icone-dislike.svg'
import DescriptionVaga from './DescriptionVaga';

const CardVagas = ({ vaga, trocaVaga, prevVaga }) => {
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
    const vagaId = {vagaId:vaga._id};
    api.put('/user/vagas', vagaId).then((res)=>{
      console.log('Funcionando inscrição')
    }).catch((error) => {
      console.error('Erro ao enviar dislike:', error);
    });
    trocaVaga(prevVaga+1)
  };

  const handleDislike = () => {
    const userid = {vagaId:vaga._id};
    api.put('/user/vagas/dislike', userid).then((res)=>{
      
    }).catch((error) => {
      // Trate o erro, se necessário
      console.error('Erro ao enviar dislike:', error);
    });
    trocaVaga(prevVaga+1)
    console.log('Enviando dislike para o usuário:', vaga._id);
  };

  if(!vaga){
    return(
      <div>
        Você atingiu seu limite hoje, espere um pouco mais!
      </div>
    )
  } else {
    return (
      <div style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", borderRadius: "10px", boxShadow: "10px 4px 7px rgba(0, 0, 0, 0.4)", width: "70vw", height: '60vh', margin: "0 auto",  maxWidth:"600px" }}>
        <Foto img={vaga.empresa.photopaths} />
        <DescriptionVaga vaga={vaga} />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "auto" }}>
          <button onClick={handleDislike}><img onMouseEnter={handleHoverDislike} onMouseLeave={handleHoverOutDislike} src={IconeDislike} style={{ height: isHoveredDislike ? "115px": "100px", width:isHoveredDislike ? "115px": "100px", position:"absolute", margin:"-60px 0 0 -5px",cursor:"pointer", transition:"all 0.3s ease"}}/></button>
          <button onClick={handleLike}><img onMouseEnter={handleHover} onMouseLeave={handleHoverOut} src={IconeLike} style={{height: isHovered ? "130px": "110px", width:isHovered ? "130px": "110px", position:"absolute", margin:"-67px 0 0 -90px", cursor:"pointer", transition:"all 0.3s ease"}}/></button>
        </div>
      </div>
    );
  }
};

export default CardVagas;