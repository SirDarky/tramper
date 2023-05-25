import React, { useEffect } from 'react'
import IconeNeutro from '../../icons/iconeNeutro.svg'

const PersonCard = ({canditado}) => {
    const ultimaExp = canditado.experiencias.find(exp => exp.datatermino === 'Presente');
    
  return (
    <div style={{background:"rgba(0, 0, 0, 0.7)", padding:"20px", borderRadius:"20px", display:"flex", flexDirection:"row", marginTop:"20px"}}>
        <div>
            <img src={IconeNeutro} alt="" style={{width:"100px"}} />
        </div>
        <div style={{marginLeft:"20px", display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
            <div style={{width:"50%"}}>
                <div>{canditado.resumo}</div>
                <div>Email para contato: {canditado.email}</div>
            </div>
            <div style={{display:"flex", flexDirection:"column", width:"50%"}}>
                <span>Atual cargo: {ultimaExp.cargo}</span>
                <span>Empresa: {ultimaExp.empresa}</span>
            </div>
        </div>
    </div>
  )
}

export default PersonCard