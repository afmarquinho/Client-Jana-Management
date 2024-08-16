import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReportType } from "../../types/types";

import {
  fetchCreateReport,
  fetchDeleteReport,
  fetchEditReport,
  fetchGetAllReports,
  fetchProcessReport,
} from "../thunks/reportThunks";

//*THUNKS

type ReportState = {
  unprocessedReports: VisitReportType[]; //* ARRAY TO STORAGE ALL REPORTS NOT PROCESSED (PROCESSED REPORTS ARE NOT EDITABLE)
  processedReports: VisitReportType[]; //* ARRAY TO STORAGE ALL PROCESSED REPORTS
  report: VisitReportType | null; //* REPORT TO SEE IT ON "/REPORT-SUMMARY" PAGE
  updatedReport: VisitReportType | null; //* OBJECT TO STORAGE TEMPORALY RE REPORT TO EDIT ON FORM
  error: string | null; //* ERROR MESSAGE THAT COME FROM BACKEND
  loading: boolean;
};

const initialState: ReportState = {
  unprocessedReports: [],
  processedReports: [],
  report: null,
  updatedReport: null,
  error: null,
  loading: false,
};

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    //* ADD ITEMS TO STATUS TO RENDER
    addReport: (state, action: PayloadAction<VisitReportType>) => {
      state.report = action.payload;
    },
    cleanReport: (state) => {
      state.report = null;
    },
    cleanError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //* GETS REPORTS FROM API
      .addCase(fetchGetAllReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetAllReports.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.unprocessedReports = action.payload.filter(
          (item: VisitReportType) => item.processed === false
        );
        state.processedReports = action.payload.filter(
          (item: VisitReportType) => item.processed === true
        );
      })
      .addCase(fetchGetAllReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló la obtención del informe";
      })
      //* CREATE A NEW REPORT
      .addCase(fetchCreateReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCreateReport.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if(action.payload.processed === false)
        state.unprocessedReports = [
          ...state.unprocessedReports,
          action.payload,
        ];
      })
      .addCase(fetchCreateReport.rejected, (status, action) => {
        status.loading = false;
        status.error = action.error.message || "Falló la creación del informe";
      })
      .addCase(fetchDeleteReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeleteReport.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.unprocessedReports = state.unprocessedReports.filter(
          (report) => report.id !== action.payload
        );
        state.report = null;
      })

      .addCase(fetchDeleteReport.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló la eliminación del informe";
      })
      .addCase(fetchProcessReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProcessReport.fulfilled, (state) => {
        state.loading = false;
        state.error = null;

        if (state.report !== null && state.report.processed !== undefined) {
          state.report.processed = true;

          // Ensure state.report is not null before updating unprocessedReports
          state.unprocessedReports = state.unprocessedReports.filter((report) => {
            if (state.report && report.id === state.report.id) {
              return report.id !== state.report.id
            }
          });
          
        }
      })
      .addCase(fetchProcessReport.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló el procesamiento del informe";
      })
      .addCase(fetchEditReport.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEditReport.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.report = action.payload;
        state.unprocessedReports = state.unprocessedReports.map((report) => {
          if (state.unprocessedReports && report.id === action.payload.id) {
            return action.payload;
          }
          return report;
        });
      })
      .addCase(fetchEditReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló la edición del informe";
      });
  },
});

export const { addReport, cleanReport, cleanError } = reportSlice.actions;
export default reportSlice.reducer;
