import axios from 'axios';

const apiConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

// apiConfig.interceptors.request.use(
//   async (config) => {
//     const session = await sessionForServer();
//     const token = session?.user?.token;
//     config.headers.Authorization = `Bearer ${token || ''}`; // Add the Authorization field with the value 'bearer_token' to the configuration headers

//     return config;
//   },
//   (error) => {
//     console.log('Request Error:', error);
//     return Promise.reject(error);
//   }
// );

export { apiConfig };
