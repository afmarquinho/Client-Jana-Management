import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { VisitReportType } from "../../types/types";
import axiosClient from "../../axiosClient";

export const fetchGetAllReports = createAsyncThunk(
  "reports/getAll",
  async () => {
    try {
      const response = await axiosClient.get("/reports");
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al obtener los informes";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error indesperado");
      }
    }
  }
);

export const fetchGetReportById = createAsyncThunk(
  "api/report/get-by-id/",
  async (reportId: number) => {
    try {
      const response = await axiosClient.get(`/reports/${reportId}`);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al obtener el informe";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);

export const fetchCreateReport = createAsyncThunk(
  "report/create",
  async (report: VisitReportType) => {
    try {
      const response = await axiosClient.post("/reports", report);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg ||
          "Error al crear el nuevo informe";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);

export const fetchEditReport = createAsyncThunk(
  "process/edit-report",
  async ({ id, data }: { id: number; data: VisitReportType }) => {
    try {
      const response = await axiosClient.put(`/reports/${id}`, data);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error editar el informe";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);

export const fetchDeleteReport = createAsyncThunk(
  "report/delete-by-id",
  async ({ id }: { id: number }) => {
    try {
      await axiosClient.delete(`/reports/${id}`);
      return id;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al eliminar el informe";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error indesperado");
      }
    }
  }
);

export const fetchProcessReport = createAsyncThunk(
  "process/report",
  async ({
    reportId,
    userId,
    dueDate,
  }: {
    reportId: number;
    userId: number;
    dueDate: string;
  }) => {
    try {
      await axiosClient.post(`/tenders/${reportId}`, {
        userId,
        dueDate,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al procesar el informe!";
        console.error("Error del backend: ", errorMessage);
        alert(errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);
