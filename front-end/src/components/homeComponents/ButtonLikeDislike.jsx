import React, {useState} from 'react'
import IconeLike from '../../icons/icone-like.svg';
import IconeDislike from '../../icons/icone-dislike.svg';

const ButtonLikeDislike = ({tipo}) => {
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
  if(tipo=="like"){
    return (
        <button><img onMouseEnter={handleHover} onMouseLeave={handleHoverOut} src={IconeLike} style={{height: isHovered ? "130px": "110px", width:isHovered ? "130px": "110px", position:"absolute", margin:"-67px 0 0 -90px", cursor:"pointer", transition:"all 0.3s ease"}}/></button>
      )
  }
  if(tipo=="dislike"){
    return (
        <div><img onMouseEnter={handleHoverDislike} onMouseLeave={handleHoverOutDislike} src={IconeDislike} style={{ height: isHoveredDislike ? "115px": "100px", width:isHoveredDislike ? "115px": "100px", position:"absolute", margin:"-60px 0 0 -5px",cursor:"pointer", transition:"all 0.3s ease"}}/></div>
      )
  }
}

export default ButtonLikeDislike