import axios from 'axios';


const URL = 'https://6684da2356e7503d1ae16107.mockapi.io/api/stockproducts';

export const axiosInstance = axios.create({
  baseURL: URL
});

export default axiosInstance;