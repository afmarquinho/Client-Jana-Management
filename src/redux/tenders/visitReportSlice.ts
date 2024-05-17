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
      console.log("Nuevo estado después de agregar:", state.data);
    },
    removeItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      state.data = state.data.filter((newItem) => {
        newItem.id !== item.id;
      });
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
      console.log(state.viewReport.isActive)
      console.log(state.viewReport.report)
    },
    deactiveViewReport: (state) => {
      state.viewReport.isActive = false;
      state.viewReport.report = null;
      console.log(state.viewReport.isActive)
      console.log(state.viewReport.report)
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
