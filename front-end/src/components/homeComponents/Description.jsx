import React from 'react'
import fotoDescription from './fotoDescription.css'

const Description = ({nome, idade, bio, cidade}) => {

  const truncateDescription = (description, maxLength) => {
    const words = description.split(' ');
    if (words.length > maxLength) {
      const truncatedWords = words.slice(0, maxLength);
      return truncatedWords.join(' ') + '...';
    }
    return description;
  };

  const truncatedDescription = truncateDescription(bio, 20);
  return (
    <div className='description'>
      <div>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
          <div style={{display:'flex', flexDirection:"row", paddingTop:"20px", paddingLeft:"20px", alignContent:"center", paddingBottom:"5px" }}>
            <div className='font' style={{marginRight:"10px", fontSize:'24px', fontWeight:'600', color:"#FCFCFC"}}>{nome},</div>
            <div className='font' style={{color:'#FCFCFC'}}>{idade}</div>
          </div>
          <div className='font' style={{paddingRight:"20px", fontSize:"16px", color:"#F2DFDF", marginTop:"20px"}}>{cidade}</div>
        </div>
        <div className='fontdescription' style={{paddingLeft:"20px", fontSize:"24px", color:"#FCFCFC"}}>{bio}</div>
      </div>
    </div>
  )
}

export default Description