import axios from 'axios';

const axiosClient = axios.create({
    baseURL:"http://localhost:5000/"
})

// Configurer le token JWT pour les routes privées.
// axiosClient.interceptors.request.use((req) => {
//     if (localStorage.getItem("user")) {
//       req.headers.Authorization = `Bearer ${
//         JSON.parse(localStorage.getItem("user")).token
//       }`;
//     }
//     return req;
//   });



export default axiosClient;