import { isAxiosError } from "axios";
import axiosClient from "../axiosClient";
import { assignTenderData } from "../helpers/helpers";
import { Tender } from "../types/types";

export const getTendersService = async () => {
  try {
    const response = await axiosClient.get("/tenders");
    return response.data.data;
  } catch (error) {
    //* ESTE CONDICIONAL EVITA EL ERROR EN EL TYPE DEL "ERROR"
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "No se pudo obtener las cotizaciones";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const createTenderService = async (reportId: number) => {
  try {
    const response = await axiosClient.post(`/tenders/${reportId}`);
    const resApi = response.data.data;
    assignTenderData(resApi);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || "No se pudo crear la cotización";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const updateTenderService = async (data: Tender) => {
  try {
    await axiosClient.put(`/tenders/${data.id}`, data);
  } catch (error) {
    if (isAxiosError(error)) {
      // Extrae el mensaje de error si está disponible
      const errorMsg =
        error.response?.data?.errors?.[0]?.msg || "Error al actualizar la cotización";
      throw new Error(errorMsg);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};
export const getTenderByIdService = async (id: number) => {
  try {
    const response = await axiosClient.get(`/tenders/${id}`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      // Extrae el mensaje de error si está disponible
      const errorMsg =
        error.response?.data?.errors?.[0]?.msg || "Error al obtener la cotización";
      throw new Error(errorMsg);
    } else {
      throw new Error("Error inesperado");
    }
  }
};
