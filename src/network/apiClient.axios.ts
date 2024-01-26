import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Create Axios instance with base configuration
const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://ecommerce-backend-topaz-tau.vercel.app/api/v1/products',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

// Add response interceptor to handle common logic
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const res = error.response;
    console.error(`Looks like there was a problem. Status Code: ${res?.status}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
