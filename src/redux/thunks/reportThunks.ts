import { VisitReport, VisitReportApi } from "../../types/types";
import { AppDispatch } from "../store";
import {
  addItem,
  cleanViewSummaryReport,
  errorMessage,
  getRports,
  removeItem,
  updateItem,
  viewSummaryReport,
} from "../slices/visitReportSlice";
import axiosClient from "../../axiosClient";

export const sendReportToApi = (report: VisitReport) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await axiosClient.post("/reports", report);
      dispatch(addItem(response.data.data));
      dispatch(cleanViewSummaryReport());
      dispatch(errorMessage(""));
    } catch (error: any) {
      dispatch(errorMessage(error.response.data.errors[0].msg));
    }
  };
};

export const getReportsApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await axiosClient.get("/reports");
      dispatch(getRports(data.data));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};

export const updateReportApi = (report: VisitReportApi) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axiosClient.put(`/reports/${report.id}`, report);
      dispatch(updateItem(report));
      dispatch(viewSummaryReport(report));
      dispatch(errorMessage(""));
    } catch (error: any) {
      dispatch(errorMessage(error.response.data.errors[0].msg));
    }
  };
};
export const removeReportApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axiosClient.delete(`/reports/${id}`);
      dispatch(removeItem(id));
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};

export const processReport = (id: number, dueDate: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axiosClient.patch(`/reports/${id}`, { dueDate });
      dispatch(removeItem(id));
      dispatch(errorMessage(""));
    } catch (error: any) {
      dispatch(errorMessage(error.response.data.errors[0].msg));
    }
  };
};

export const closeReport = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      await axiosClient.patch(`/reports/close/${id}`);
    } catch (error: any) {
      dispatch(errorMessage(error.response.data.errors[0].msg));
    }
  };
};
