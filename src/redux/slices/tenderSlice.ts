import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initValTender } from "../../helpers/initialValues";
import { Tender, VisitReportType } from "../../types/types";
import { fetchGetReportById, fetchTenders, fetchUpdateTender } from "../thunks/tenderThunks";

type TenderState = {
  tenders: Tender[];
  tender: Tender;
  viewReport: VisitReportType | null;
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
        state.error = null;
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
      .addCase(fetchUpdateTender.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const updatedTender = action.payload?.data;
        if (updatedTender) {
          state.tender = updatedTender;
          state.tenders = state.tenders.map((tender) =>
            tender.id === updatedTender.id ? updatedTender : tender
          );
        }
      })
      .addCase(fetchUpdateTender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Mensaje de error específico
      })
      .addCase(fetchGetReportById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetReportById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
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
