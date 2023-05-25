import axios from "axios";
import { linkLocal } from "./constantes";

const api = axios.create({
    baseURL:linkLocal,
    headers: {
        'Content-Type': 'application/json'
      }
})

export default api