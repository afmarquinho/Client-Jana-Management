import { isAxiosError } from "axios";
import axiosClient from "../axiosClient";
import { VisitReportType } from "../types/types";


export const getAllReportsService = async () => {
  try {
    const response = await axiosClient.get("/reports");
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al obtener los informes";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error indesperado");
    }
  }
};

export const createReportService = async (report: VisitReportType) => {
  try {
    const response = await axiosClient.post("/reports", report);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al crear el nuevo informe";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const editReportService = async (id: number, data: VisitReportType) => {
  try {
    const response = await axiosClient.put(`/reports/${id}`, data);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error editar el informe";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const getReportByIdService = async (id: number) => {
  try {
    const response = await axiosClient.get(`/reports/${id}`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al obtener el informe";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const deleteReportService = async (id: number) => {
  try {
    await axiosClient.delete(`/reports/${id}`);
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al eliminar el informe";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error indesperado");
    }
  }
};

export const processReportService = async (id: number, dueDate: string) => {
  try {
    await axiosClient.patch(`/reports/${id}`, { dueDate });
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al procesar el informe!";
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

