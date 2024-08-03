import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createReportService,
  deleteReportService,
  editReportService,
  getAllReportsService,
  processReportService,
} from "../../services/reportServices";
import { isAxiosError } from "axios";
import { VisitReportType } from "../../types/types";

export const fetchGetAllReports = createAsyncThunk(
  "reports/getAll",
  async () => {
    try {
      return getAllReportsService();
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Error al obtener los informes");
      }
    }
  }
);

export const fetchCreateReport = createAsyncThunk(
  "report/create",
  async (report: VisitReportType) => {
    try {
      return await createReportService(report);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Error al crear el usuario");
      }
    }
  }
);

export const fetchEditReport = createAsyncThunk(
  "process/edit-report",
  async ({ id, data }: { id: number; data: VisitReportType }) => {
    try {
      
      return await editReportService(id, data);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Error al editar el informe");
      }
    }
  }
);

export const fetchDeleteReport = createAsyncThunk(
  "report/delete-by-id",
  async ({ id }: { id: number }) => {
    try {
      await deleteReportService(id);
      return id;
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Error al eliminar el usuario, error en el backend");
      }
    }
  }
);

export const fetchProcessReport = createAsyncThunk(
  "process/report",
  async ({ id, dueDate }: { id: number; dueDate: string }) => {
    try {
      await processReportService(id, dueDate);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Error al procesar el informe");
      }
    }
  }
);
