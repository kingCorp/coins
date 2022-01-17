import axios, { AxiosRequestConfig } from 'axios';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config: AxiosRequestConfig<any>) => {
    config.headers = {
      Accept: 'application/json',
    };
    config.timeout = 120000;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  },
);

export default axiosApiInstance;
