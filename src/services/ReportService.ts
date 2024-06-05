import axios from "axios";
import { VisitReport } from "../types/types";

export const sendReportToApi = async (report: VisitReport) => {
  //! IMPORTANT
  //* PUEDO COLOCAR LA VALIDACION AQUÍ
  // const url = `${import.meta.env.VITE_API_URL}/api/report`;
  const url = `${import.meta.env.VITE_API_URL}/api/report/`;

  try {
    await axios.post(url, report);
  } catch (error) {
    throw new Error("Error al enviar a la API");
  }
};
