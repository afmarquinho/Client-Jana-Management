import { VisitReport, VisitReportApi } from "../../types/types";
import axios from "axios";
import { AppDispatch } from "../store";
import { addItem, getRports } from "../tenders/visitReportSlice";

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

export const updateReportApi = (id: number, report: VisitReportApi) => {
  return async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/report/${id}`;
      await axios.put(url, report);
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
    }
  };
};
