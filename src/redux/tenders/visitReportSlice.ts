import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReport } from "../../types/types";

type ReportState = {
  data: VisitReport[];
  viewReport: {
    isActive: boolean;
    report: VisitReport | null;
  };
};

const initialState: ReportState = {
  data: [],
  viewReport: {
    isActive: false,
    report: null,
  },
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
    activateViewReport: (state, action: PayloadAction<VisitReport>) => {
      state.viewReport.report = action.payload;
      state.viewReport.isActive = true;
    },
    deactiveViewReport: (state) => {
      state.viewReport.isActive = false;
      state.viewReport.report = null;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  activateViewReport,
  deactiveViewReport,
} = visitReportSlice.actions;
export default visitReportSlice.reducer;
