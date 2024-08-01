import { combineReducers, configureStore } from "@reduxjs/toolkit";
import visitReportReducer from "./slices/visitReportSlice";
import tenderReducer from "./slices/tenderSlice";
import  userReducer  from "./slices/userSlice";

import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  visitReport: visitReportReducer,
  tender: tenderReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
