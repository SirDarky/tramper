import React, { useState } from 'react'
import apiPhoto from '../../services/apiPhoto';

const PhotoComponent = ({setState, state, tipoUpload}) => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (event) => {
      const selectedPhoto = event.target.files[0];
      setPhoto(selectedPhoto);
    };
  
    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const formData = new FormData();
        formData.append('photo', photo); // Anexa o arquivo selecionado ao objeto FormData
        
        if(tipoUpload==='User'){
          apiPhoto.post('/user/upload', formData).then(res => {
            console.log(res.data);
            setState(!state)
          }).catch(err => {
            console.error(err);
          });
        } else{
          apiPhoto.post('/empresa/upload', formData).then(res => {
            console.log(res.data);
            setState(!state)
          }).catch(err => {
            console.error(err);
          });
        }
        
        console.log('Enviando foto:', photo);
      };
  
    return (
      <form onSubmit={handleFormSubmit} style={{width:"200px", margin:"30px 0 0 0"}} >
        <label htmlFor="photo">Foto de Perfil</label>
        <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} style={{width:"200px"}}/>
        <button type="submit">Enviar</button>
      </form>
    );
}

export default PhotoComponent