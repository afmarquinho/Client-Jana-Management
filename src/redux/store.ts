import { combineReducers, configureStore } from "@reduxjs/toolkit";
import visitReportReducer from "./tenders/visitReportSlice";


const rootReducer = combineReducers({
  visitReport: visitReportReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;