import React from 'react'
import fotoDescription from './fotoDescription.css'

const Description = ({nome, idade, bio, cidade}) => {
  return (
    <div className='description'>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
        <div style={{display:'flex', flexDirection:"row", paddingTop:"20px", paddingLeft:"20px", alignContent:"center", paddingBottom:"5px" }}>
          <div className='font' style={{marginRight:"10px", fontSize:'24px', fontWeight:'600', color:"#FCFCFC"}}>{nome},</div>
          <div className='font' style={{color:'#FCFCFC'}}>{idade}</div>
        </div>
        <div className='font' style={{paddingRight:"20px", fontSize:"16px", color:"#F2DFDF", marginTop:"20px"}}>{cidade}</div>
      </div>
      <div className='font' style={{paddingLeft:"20px", fontSize:"24px", color:"#FCFCFC"}}>{bio}</div>
    </div>
  )
}

export default Description