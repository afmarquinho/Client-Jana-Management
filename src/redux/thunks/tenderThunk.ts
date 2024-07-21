import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTendersApi } from "../../services/tenderServices";



export const fetchTenders = createAsyncThunk("tenders/fetchTenders", async () => {
  const tenders= await getTendersApi();
  return tenders
})
