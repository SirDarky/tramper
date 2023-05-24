import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const NavBar = () => {
  const { ChecarLogin, Deslogar, authentication } = useAuthContext()
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  const sim = ()=>{
    console.log(user)
  }

  useEffect(() => {
    setUser(ChecarLogin()) 
  }, [authentication])
  
  if (authentication) {
    return (
      <div>
        <div style={{width:"100%", backgroundColor:"#000", color:"#fff", display:"flex", height:"2vh", minHeight:"40px", alignItems:"center"}}>
          <div style={{marginLeft:"30px"}}><Link to={"/"} style={{display:"flex", width:"min-content", minWidth:"100px", color:"#FFF", textDecoration:"none", position:"right"}}>TRAMPER</Link></div>
          {user?.usuario && (
            <span style={{width:"min-content", marginLeft:"auto", marginRight:"20px"}}><Link to={"/perfilUsuario"} style={{display:"flex", width:"min-content", minWidth:"100px", color:"#FFF", textDecoration:"none", position:"right"}}>{user.usuario.split(' ').length === 1 ? user.usuario : user.usuario.split(' ')[0]}</Link></span>
          )}
          <span style={{width:"min-content", marginRight:"20px", cursor:"pointer"}} onClick={Deslogar}>Deslogar</span>
        </div>
      </div>
    )
  } else{
    return(
      <div>
        <div style={{width:"100%", backgroundColor:"#000", color:"#fff", display:"flex", height:"2vh", minHeight:"40px", alignItems:"center"}}>
          <div style={{marginLeft:"30px"}}>
            <Link to={"/"} style={{display:"flex", width:"min-content", minWidth:"100px", color:"#FFF", textDecoration:"none", position:"right"}}>TRAMPER</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar