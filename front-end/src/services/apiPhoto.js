import axios from 'axios'; // Importe o axios corretamente
const apiPhoto = axios.create({
    baseURL:'http://localhost:3005',
    headers: {
        'Content-Type': 'multipart/form-data', // Define o tipo de conteúdo como multipart/form-data
      },
  })

  export default apiPhoto