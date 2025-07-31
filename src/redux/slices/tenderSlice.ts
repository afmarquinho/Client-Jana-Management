import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tender, VisitReportType } from "../../types/types";
import {
  // fetchCreateTender,
  fetchGetTenders,
  fetchUpdateTender,
  fetchPrintTender,
} from "../thunks/tenderThunks";
import { fetchGetReportById } from "../thunks/reportThunks";

type TenderState = {
  tenders: Tender[];
  tender: Tender | null;
  viewReport: VisitReportType | null;
  totalWf: number;
  totalMt: number;
  loading: boolean;
  error: string | null;
};

const initialState: TenderState = {
  tenders: [],
  tender: null,
  viewReport: null,
  totalMt: 0,
  totalWf: 0,
  loading: false,
  error: null,
};

//* SLICE SETUP
const tenderSlice = createSlice({
  name: "tender",
  initialState,
  reducers: {
    tenderToEdit: (state, action: PayloadAction<Tender>) => {
      state.tender = action.payload;
    },
    cleanTender: (state) => {
      state.tender = null;
    },
    cleanError: (state) => {
      state.error = null;
    },
    cleanViewReport: (state) => {
      state.viewReport = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetTenders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetTenders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tenders = action.payload;
        if (state.tender) {
          state.totalMt = state.tender.materials.reduce((total, item) => {
            return total + item.profitAmount;
          }, 0);
          state.totalWf = state.tender.workforces.reduce((total, item) => {
            return total + item.profitAmount;
          }, 0);
        }
      })
      .addCase(fetchGetTenders.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "No se pudo cargar las cotizaciones";
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
      })
      // .addCase(fetchCreateTender.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(fetchCreateTender.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.error = null;
      //   state.tenders = [...state.tenders, action.payload];
      // })
      // .addCase(fetchCreateTender.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error =
      //     action.error.message || "Falló la creación de la cotización";
      // })
      .addCase(fetchPrintTender.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrintTender.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.tender) {
          state.tender = { ...state.tender, code: action.payload };
        }
        sessionStorage.setItem("TENDER", JSON.stringify(state.tender));
        state.tenders = state.tenders.map((tender) =>
          tender.id === state.tender?.id ? state.tender : tender
        );
      })
      .addCase(fetchPrintTender.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló la creación de la cotización";
      });
  },
});
export const { tenderToEdit, cleanError, cleanViewReport, cleanTender } =
  tenderSlice.actions;

export default tenderSlice.reducer;
