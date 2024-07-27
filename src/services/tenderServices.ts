import { isAxiosError } from "axios";
import axiosClient from "../axiosClient";
import { assignTenderData } from "../helpers/helpers";
import { Tender } from "../types/types";
type DataCreateType = {
  reportId: number;
  createdBy: string;
};

export const getTendersService = async () => {
  try {
    const response = await axiosClient("/tenders");
    return response.data.data;
  } catch (error) {
    //* ESTE CONDICIONAL EVITA EL ERROR EN EL TYPE DEL "ERROR"
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Error fetching tenders"
      );
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const createTenderService = async (data: DataCreateType) => {
  try {
    const response = await axiosClient.post("/tenders", data);
    const resApi = response.data.data;
    assignTenderData(resApi);
    return
  } catch (error) {
    console.log(error);
  }
};


export const updateTenderService = async (data: Tender) => {
  try {
    await axiosClient.put(`/tenders/${data.id}`, data);
  } catch (error) {
    if (isAxiosError(error)) {
      // Extrae el mensaje de error si está disponible
      const errorMsg =
        error.response?.data?.errors?.[0]?.msg || "Error updating tender";
      throw new Error(errorMsg);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};