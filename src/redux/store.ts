import { combineReducers, configureStore } from "@reduxjs/toolkit";
import visitReportReducer from "./tenders/visitReportSlice";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  visitReport: visitReportReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
