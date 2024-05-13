import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReport } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

type ReportState = {
  visitReports: VisitReport[];
};

const initialState: ReportState = {
  visitReports: [],
};

const visitReportSlice = createSlice({
  name: "visitReport",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      item.id = uuidv4();
      state.visitReports = [...state.visitReports, item];
    },
    removeItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      state.visitReports = state.visitReports.filter((newItem) => {
        newItem.id !== item.id;
      });
    },
    updateItem: (state, action: PayloadAction<VisitReport>) => {
      const updatedItem = action.payload;
      state.visitReports = state.visitReports.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
    },
  },
});

export const { addItem, removeItem, updateItem } = visitReportSlice.actions;
export default visitReportSlice.reducer;
