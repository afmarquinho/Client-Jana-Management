
import axios from 'axios';

 const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api', 
 // timeout: 10000, // Establece un tiempo de espera (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});


export default axiosClient