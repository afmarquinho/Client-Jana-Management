import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReport } from "../../types/types";

type ReportState = {
  data: VisitReport[];
  viewReport: {
    isActive: boolean;
    report: VisitReport | null;
  };
  updatedReport: VisitReport | null;
  actNewReport: boolean;
};

const initialState: ReportState = {
  data: [],
  viewReport: {
    isActive: false,
    report: null,
  },
  updatedReport: null,
  actNewReport: false,
};

const visitReportSlice = createSlice({
  name: "visitReport",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      state.data = [...state.data, item];
    },
    removeItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      state.data = state.data.filter((newItem) => newItem.id !== item.id);
    },
    updateItem: (state, action: PayloadAction<VisitReport>) => {
      const updatedItem = action.payload;
      state.data = state.data.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    },
    actReport: (state, action: PayloadAction<VisitReport>) => {
      state.viewReport.report = action.payload;
      state.viewReport.isActive = true;
    },
    deactReport: (state) => {
      state.viewReport.isActive = false;
      state.viewReport.report = null;
    },
    // ! importante: Estado para llenar el formulario cuando se activa el editar reporte
    setReport: (state, action: PayloadAction<VisitReport>) => {
      state.updatedReport = action.payload;
    },
    // !importante: Estado para vaciar el objeto una vez se cierra el formulario al terminar de editar
    clearReport: (state) => {
      state.updatedReport = null;
    },
    activateNewReport: (state, action:PayloadAction<boolean>) => {
      state.actNewReport = action.payload;
    },
  },
});

export const {
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
