import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { Tender } from "../../types/types";
import axiosClient from "../../axiosClient";

export const fetchGetTenders = createAsyncThunk(
  "api/tenders/getAll",
  async () => {
    try {
      const response = await axiosClient.get("/tenders");
      return response.data.data;
    } catch (error) {
      //* ESTE CONDICIONAL EVITA EL ERROR EN EL TYPE DEL "ERROR"
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          "No se pudo obtener las cotizaciones";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);

export const fetchCreateTender = createAsyncThunk(
  "tenders/createTender",
  async (reportId: number) => {
    try {
      const response = await axiosClient.post(`/tenders/${reportId}`);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "No se pudo crear la cotización";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);


export const fetchUpdateTender = createAsyncThunk(
  "tenders/updateTender",
  async (data: Tender) => {
    try {
      await axiosClient.put(`/tenders/${data.id}`, data);
      return { data }; // Puedes devolver los datos actualizados si es necesario
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
        error.response?.data?.errors?.[0]?.msg || "Error al actualizar la cotización";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);
