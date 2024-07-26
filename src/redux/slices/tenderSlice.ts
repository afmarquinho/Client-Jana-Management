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
  totalWf:number
  totalMt:number
  loading: boolean;
  error: string | null;
};

const initialState: TenderState = {
  tenders: [],
  tender: initValTender,
  totalMt:0,
  totalWf:0,
  loading: false,
  error: null,
};

//* THUNKS
export const fetchTenders = createAsyncThunk("api/tenders/getAll", async () => {
  const tenders = await getTendersService();
  return tenders;
});

export const updateTender = createAsyncThunk(
  "tenders/updateTender",
  async (data: Tender, { rejectWithValue }) => {
    try {
      await updateTenderService(data);
      return { data }; // Puedes devolver los datos actualizados si es necesario
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Error desconocido");
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
        state.totalMt = state.tender.materials.reduce((total, item) => {
          return total + item.profitAmount;
        }, 0);
        state.totalWf = state.tender.workforce.reduce((total, item) => {
          return total + item.profitAmount;
        }, 0);
      })
      .addCase(fetchTenders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch tenders";
      })
      .addCase(updateTender.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTender = action.payload?.data;
        if (updatedTender) {
          state.tender = updatedTender;
          state.tenders = state.tenders.map((tender) =>
            tender.id === updatedTender.id ? updatedTender : tender
          );
        }
      })
      .addCase(updateTender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Mensaje de error específico
      });
  },
});
export const { tenderToEdit } = tenderSlice.actions;

export default tenderSlice.reducer;
