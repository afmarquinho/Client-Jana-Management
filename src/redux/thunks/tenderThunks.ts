import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTendersService, updateTenderService } from "../../services/tenderServices";
import { getReportByIdService } from "../../services/reportServices";
import { isAxiosError } from "axios";
import { Tender } from "../../types/types";



export const fetchGetTenders = createAsyncThunk("api/tenders/getAll", async () => {
    try {
        const res = await getTendersService();
        return res
    } catch (error) {
        if(isAxiosError(error)){
            throw error
        } else{
            throw new Error("Error al obtener las cotizaciones");
            
        }
    }
    
  });
  
  export const fetchGetReportById = createAsyncThunk(
    "api/report/get-by-id/",
    async (reportId: number, { rejectWithValue }) => {
      try {
        const report = await getReportByIdService(reportId);
        return report;
      } catch (error) {
        if (isAxiosError(error)) {
          return rejectWithValue(error.message);
        } else {
          return rejectWithValue("Error desconocido");
        }
      }
    }
  );
  
  export const fetchUpdateTender = createAsyncThunk(
    "tenders/updateTender",
    async (data: Tender, { rejectWithValue }) => {
      try {
        await updateTenderService(data);
        return { data }; // Puedes devolver los datos actualizados si es necesario
      } catch (error) {
        if (isAxiosError(error)) {
          return rejectWithValue(error.message);
        } else {
          return rejectWithValue("Error desconocido");
        }
      }
    }
  );