// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api', // Backend server URL
// });

// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = token;
//   }
//   return req;
// });

// export default API;

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://suggestify-backend-n61e.onrender.com/api', // Live backend server URL
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    // req.headers.Authorization = token;
    req.headers.Authorization = `Bearer ${token}`;

  }
  return req;
});

export default API;
