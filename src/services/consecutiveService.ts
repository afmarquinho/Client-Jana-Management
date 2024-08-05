
import { isAxiosError } from 'axios';
import axiosClient from '../axiosClient';


export const createConsecutiveService = async (tenderId: number) => {
  try {
    const response = await axiosClient.post(`/consecutives/create/${tenderId}`);
    const res = response.data.data;
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.error;
      throw new Error(errorMessage || 'Error al crear el consecutivo');
    } else {
      throw new Error('Ha ocurrido un error inesperado');
    }
  }
};
