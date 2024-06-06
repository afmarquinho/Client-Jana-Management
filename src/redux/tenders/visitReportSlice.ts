import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReportApi } from "../../types/types";

type ReportState = {
  report: VisitReportApi[];
  viewReport: {
    isActive: boolean;
    reportObject: VisitReportApi | null;
  };
  updatedReport: VisitReportApi | null;
  actNewReport: boolean;
};

const initialState: ReportState = {
  report: [],
  viewReport: {
    isActive: false,
    reportObject: null,
  },
  updatedReport: null,
  actNewReport: false,
};

const visitReportSlice = createSlice({
  name: "visitReport",
  initialState,
  reducers: {
    getRports: (state, action: PayloadAction<VisitReportApi[]>) => {
      const item = action.payload;
      state.report = item;
    },
    addItem: (state, action: PayloadAction<VisitReportApi>) => {
      state.report = [...state.report, action.payload];
    },
    removeItem: (state, action: PayloadAction<VisitReportApi>) => {
      const item = action.payload;
      state.report = state.report.filter((newItem) => newItem.ref !== item.ref);
    },
    updateItem: (state, action: PayloadAction<VisitReportApi>) => {
      const updatedItem = action.payload;
      state.report = state.report.map((item) =>
        item.ref === updatedItem.ref ? updatedItem : item
      );
    },
    actReport: (state, action: PayloadAction<VisitReportApi>) => {
      state.viewReport.reportObject = action.payload;
      state.viewReport.isActive = true;
    },
    deactReport: (state) => {
      state.viewReport.isActive = false;
      state.viewReport.reportObject = null;
    },
    // ! importante: Estado para llenar el formulario cuando se activa el editar reporte
    setReport: (state, action: PayloadAction<VisitReportApi>) => {
      state.updatedReport = action.payload;
    },
    // !importante: Estado para vaciar el objeto una vez se cierra el formulario al terminar de editar
    clearReport: (state) => {
      state.updatedReport = null;
    },
    activateNewReport: (state, action: PayloadAction<boolean>) => {
      state.actNewReport = action.payload;
    },
  },
});

export const {
  getRports,
  addItem,
  removeItem,
  updateItem,
  actReport,
  deactReport,
  setReport,
  clearReport,
  activateNewReport,
} = visitReportSlice.actions;
export default visitReportSlice.reducer;
