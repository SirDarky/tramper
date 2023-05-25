import React from 'react'
import { linkPhoto } from '../../services/constantes'
import fotoDescription from './fotoDescription.css'

const Foto = ({img}) => {
  const imagem = linkPhoto+img
  return (
    <div className='fotos'>
      <img src={imagem} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius:"20px", borderTopRightRadius:"20px", maxWidth:"600px"}}/>
    </div>
  )
}

export default Foto