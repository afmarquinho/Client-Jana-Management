import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReportApi } from "../../types/types";

type ReportState = {
  fullReports: VisitReportApi[]; //* ARRAY BTO STORAGE ALL REPORTS THAT COMES FROM BACKEND.
  report: VisitReportApi[]; //* ARRAY TO STORAGE ALL REPORTS NOT PROCESSED (PROCESSED REPORTS ARE NOT EDITABLE)
  viewReport: VisitReportApi | null; //* REPORT TO SEE IT ON "/REPORT-SUMMARY" PAGE
  updatedReport: VisitReportApi | null; //* OBJECT TO STORAGE TEMPORALY RE REPORT TO EDIT ON FORM
  isOpenDelteModal: boolean; //* MODAL TO DELETE REPORT
  errorMsg: string; //* ERROR MESSAGE THAT COME FROM BACKEND
};

const initialState: ReportState = {
  fullReports:[],
  report: [],
  viewReport: null,
  updatedReport: null,
  isOpenDelteModal: false,
  errorMsg: "",
};

const visitReportSlice = createSlice({
  name: "visitReport",
  initialState,
  reducers: {
    //* GETS REPORTS FROM API
    getRports: (state, action: PayloadAction<VisitReportApi[]>) => {
      state.fullReports = action.payload;
      state.report = state.fullReports.filter((item) => item.processed === false)
    },

    //* ADD ITEMS TO STATUS TO RENDER
    addItem: (state, action: PayloadAction<VisitReportApi>) => {
      state.report = [...state.report, action.payload];
    },

    //* DELETE REPORT FROM
    removeItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.report = state.report.filter((newItem) => newItem.id !== id);
    },

    //* UPDATE ARRAY REPORTS WITH EDITDED REPORT
    updateItem: (state, action: PayloadAction<VisitReportApi>) => {
      const updatedItem = action.payload;
      state.report = state.report.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    },

    //* STORAGE REPORT TO SEE IT ON "/REPORT-SUMMARY" PAGE
    viewSummaryReport: (state, action: PayloadAction<VisitReportApi>) => {
      state.viewReport = action.payload;
    },

    //* CLEAN THE VIEWREPORT VARIABLE
    cleanViewSummaryReport: (state) => {
      state.viewReport = null;
    },

    //* SET THE STATE TO FILL THE FORM TO UPDATE
    setReport: (state, action: PayloadAction<VisitReportApi>) => {
      state.updatedReport = action.payload;
    },

    //* CLEAN THE STATE ONCE THE REPORT WAS EDIT ON FORM
    cleanReport: (state) => {
      state.updatedReport = null;
    },

    //* OPEN AND CLOSE DELETE MODAL
    openCloseModal: (state) => {
      state.isOpenDelteModal = !state.isOpenDelteModal;
    },

    errorMessage: (state, action: PayloadAction<string>) => {
      state.errorMsg = action.payload;
    },

   
  },
});

export const {
  getRports,
  addItem,
  removeItem,
  updateItem,
  viewSummaryReport,
  cleanViewSummaryReport,
  setReport,
  cleanReport,
  openCloseModal,
  errorMessage,
} = visitReportSlice.actions;
export default visitReportSlice.reducer;
