import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  // timeout: 10000, // Establece un tiempo de espera (opcional)
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;

//* CON EL INTERCEPTOR EVITO TENER QUE ESCRIBIR EL HEADER EN CADA SOLICITUD, PARA EL CASO DE LA AUTENTICAICON, COMO NO LO USA EN EL SERVIDOR, NO PARA NADA
