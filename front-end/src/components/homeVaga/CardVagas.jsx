import React, { useState, useEffect } from 'react';
import Foto from '../homeComponents/Foto';
import ButtonLikeDislike from '../homeComponents/ButtonLikeDislike';
import Description from '../homeComponents/Description';
import api from '../../services/api';
import IconeLike from '../../icons/icone-like.svg'
import IconeDislike from '../../icons/icone-dislike.svg'
import DescriptionVaga from './DescriptionVaga';
import CardCSS from '../homeComponents/Card.css'
import ButtonCss from './Button.css'

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
      <div className='card'>
        <Foto img={vaga.empresa.photopaths} />
        <DescriptionVaga vaga={vaga} />
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "auto" }}>
          <button className='botao' onClick={handleDislike}><img onMouseEnter={handleHoverDislike} onMouseLeave={handleHoverOutDislike} src={IconeDislike} style={{ height: isHoveredDislike ? "115px": "100px", width:isHoveredDislike ? "115px": "100px", position:"absolute", margin:"-60px 0 0 -5px",cursor:"pointer", transition:"all 0.3s ease"}}/></button>
          <button className='botao' onClick={handleLike}><img onMouseEnter={handleHover} onMouseLeave={handleHoverOut} src={IconeLike} style={{height: isHovered ? "130px": "110px", width:isHovered ? "130px": "110px", position:"absolute", margin:"-67px 0 0 -90px", cursor:"pointer", transition:"all 0.3s ease"}}/></button>
        </div>
      </div>
    );
  }
};

export default CardVagas;