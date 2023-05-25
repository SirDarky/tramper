import axios from 'axios'; // Importe o axios corretamente
import { linkLocal } from './constantes';
const apiPhoto = axios.create({
    baseURL:linkLocal,
    headers: {
        'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart/form-data
      },
  })

  export default apiPhoto