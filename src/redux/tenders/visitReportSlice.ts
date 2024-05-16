import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VisitReport } from "../../types/types";


type ReportState = {
  data: VisitReport[];
};

const initialState: ReportState = {
  data: [],
};

const visitReportSlice = createSlice({
  name: "visitReport",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<VisitReport>) => {
      const item = action.payload;
      state.data = [...state.data, item];
      console.log("Nuevo estado después de agregar:", state.data)
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
  },
});

export const { addItem, removeItem, updateItem } = visitReportSlice.actions;
export default visitReportSlice.reducer;
