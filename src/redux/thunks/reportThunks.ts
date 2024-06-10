import { VisitReport, VisitReportApi } from "../../types/types";
import axios from "axios";
import { AppDispatch } from "../store";
import { addItem, getRports, removeItem, updateItem } from "../tenders/visitReportSlice";

export const sendReportToApi = (report: VisitReport) => {
  return async (dispatch: AppDispatch) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/report`;
      const response = await axios.post(url, report);
      dispatch(addItem(response.data.data));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};

export const getReportsApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/report/`;
      const { data } = await axios.get(url);
      dispatch(getRports(data.data));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};

export const updateReportApi = (report: VisitReportApi) => {
  return async (dispatch: AppDispatch) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/report/${report.id}`;
      await axios.put(url, report);
      dispatch(updateItem(report));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};
export const removeReportApi = (report: VisitReportApi) => {
  return async (dispatch: AppDispatch) => {
    alert("¿Estás seguro que deseas eliminar este reporte?");
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/report/${report.id}`;
      await axios.delete(url);
      dispatch(removeItem(report));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};
