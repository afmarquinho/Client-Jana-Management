import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getTendersService,
  updateTenderService,
} from "../../services/tenderServices";
import { isAxiosError } from "axios";
import { initValTender } from "../../helpers/initialValues";
import { Tender } from "../../types/types";

type TenderState = {
  tenders: Tender[];
  tender: Tender;
  loading: boolean;
  error: string | null;
};

const initialState: TenderState = {
  tenders: [],
  tender: initValTender,
  loading: false,
  error: null,
};

//* THUNKS TO INTERACT TO API
export const fetchTenders = createAsyncThunk("api/tenders/getAll", async () => {
  const tenders = await getTendersService();
  return tenders;
});

export const updateTender = createAsyncThunk(
  "tenders/updateTender",
  async ({ data }: { id: number; data: Tender }, { rejectWithValue }) => {
    try {
      await updateTenderService(data);
      return { data }; // Puedes devolver los datos actualizados si es necesario
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

// Creación del slice
const tenderSlice = createSlice({
  name: "tender",
  initialState,
  reducers: {
    tenderToEdit: (state, action: PayloadAction<Tender>) => {
      state.tender = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTenders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTenders.fulfilled, (state, action) => {
        state.loading = false;
        state.tenders = action.payload;
      })
      .addCase(fetchTenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tenders";
      })
      .addCase(updateTender.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTender.fulfilled, (state, action) => {
        state.loading = false;
        state.tender = action.payload.data;
        state.tenders = state.tenders.map((tender: Tender) =>
          tender.id === action.payload.data.id ? state.tender : tender
        );
      })
      .addCase(updateTender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Mensaje de error específico
      });
  },
});
export const { tenderToEdit } = tenderSlice.actions;

export default tenderSlice.reducer;
