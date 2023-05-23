import React from 'react'

const Description = ({nome, idade, bio, cidade}) => {
  return (
    <div style={{display:"flex", flexDirection:'column', height:'300px', width:'100%', background: 'linear-gradient(to top, #4588A5, #332264)', borderRadius:"20px" }}>
      <div style={{display:'flex', flexDirection:"row", paddingTop:"20px", paddingLeft:"20px" }}>
        <div style={{marginRight:"10px", fontSize:'24px', fontWeight:'600', color:"#FCFCFC"}}>{nome},</div>
        <div style={{color:'#FCFCFC'}}>{idade}</div>
      </div>
      <div style={{paddingLeft:"20px", fontSize:"18px", color:"#F2DFDF"}}>{cidade}</div>
      <div style={{paddingLeft:"20px", fontSize:"24px", color:"#FCFCFC"}}>{bio}</div>
    </div>
  )
}

export default Description