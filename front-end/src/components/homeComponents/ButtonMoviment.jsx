import React, { useState } from 'react'
import movimentcss from './Moviment.css'

const ButtonMoviment = ({click}) => {
    const [moviment, setMoviment] = useState(true)
    const clicou = ()=>{
        setMoviment(!moviment)
        setTimeout(() => {
            click();
        }, 300);
    }
  return (
    <div style={{width:'73px', height:'30px', background:"#000", display:"flex", alignContent:"flex-end", flexDirection:"row", borderRadius:"10px", margin:"0 20px", cursor: 'pointer'}} onClick={clicou}>
        <button style={{ height: '30px', minWidth: '30px', borderRadius: '20px', background: '#fff', color: '#fff', marginLeft: moviment ? '3px' : '40px', animation: moviment ? 'move-left 0.3s ease-in' : 'move-right 0.3s ease-in' }} ></button>
    </div>
  )
}

export default ButtonMoviment