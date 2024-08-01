import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getTendersService,
  updateTenderService,
} from "../../services/tenderServices";
import { isAxiosError } from "axios";
import { initValTender } from "../../helpers/initialValues";
import { Tender, VisitReportApi } from "../../types/types";
import { getReportByIdService } from "../../services/reportServices";

type TenderState = {
  tenders: Tender[];
  tender: Tender;
  viewReport: VisitReportApi | null;
  totalWf: number;
  totalMt: number;
  loading: boolean;
  error: string | null;
};

const initialState: TenderState = {
  tenders: [],
  tender: initValTender,
  viewReport: null,
  totalMt: 0,
  totalWf: 0,
  loading: false,
  error: null,
};

//* THUNKS
export const fetchTenders = createAsyncThunk("api/tenders/getAll", async () => {
  const tenders = await getTendersService();
  return tenders;
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

export const updateTender = createAsyncThunk(
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

//* SLICE SETUP
const tenderSlice = createSlice({
  name: "tender",
  initialState,
  reducers: {
    tenderToEdit: (state, action: PayloadAction<Tender>) => {
      state.tender = action.payload;
    },
    cleanError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenders.fulfilled, (state, action) => {
        state.loading = false;
        state.tenders = action.payload;
        state.totalMt = state.tender.materials.reduce((total, item) => {
          return total + item.profitAmount;
        }, 0);
        state.totalWf = state.tender.workforce.reduce((total, item) => {
          return total + item.profitAmount;
        }, 0);
      })
      .addCase(fetchTenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tenders";
      })
      .addCase(updateTender.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTender = action.payload?.data;
        if (updatedTender) {
          state.tender = updatedTender;
          state.tenders = state.tenders.map((tender) =>
            tender.id === updatedTender.id ? updatedTender : tender
          );
        }
      })
      .addCase(updateTender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Mensaje de error específico
      })
      .addCase(fetchGetReportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetReportById.fulfilled, (state, action) => {
        state.loading = false;
        state.viewReport = action.payload;
       
      })
      .addCase(fetchGetReportById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló la solicitud";
      });
  },
});
export const { tenderToEdit, cleanError } = tenderSlice.actions;

export default tenderSlice.reducer;
