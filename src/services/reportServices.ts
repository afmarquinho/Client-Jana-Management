import { isAxiosError } from "axios";
import axiosClient from "../axiosClient";

export const getReportByIdService = async (id: number) => {
  try {
    const response = await axiosClient.get(`/reports/${id}`);
    const res = response.data.data;
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0].msg || "Error fetching tenders"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};
