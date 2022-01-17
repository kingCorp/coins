import { BASE_URL } from '../constants';
import axiosApiInstance from './axiosInstance';

export default {
  post: async (url: string, data: any) => {
    return axiosApiInstance.post(BASE_URL + url, data);
  },
  put: async (url: string, data: any) => axiosApiInstance.put(BASE_URL + url, data),
  delete: async (url: string) => {
    return axiosApiInstance.delete(BASE_URL + url);
  },
  get: async (url: string) => {
    return axiosApiInstance.get(BASE_URL + url);
  },
};
