import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";
import {
  fecthUpdateProfile,
  fetchActiveDeactiveUser,
  fetchCreateUser,
  fetchGetUsers,
  fetchUpdatePassword,
  fetchUploadProfilePicture,
} from "../thunks/userThunks";

//*THUNKS

const initialFakeValues: UserType = {
  id: 0,
  profilePicture: null,
  active: true,
  name: "Luís",
  lastName: "Gómez",
  idType: "cc",
  userId: 12457887,
  dateOfBirth: "1990-04-25",
  address: "Kra 25# 89-100",
  phoneNumber: "124 2541247",
  email: "correo@correo.com",
  role: "gerente",
  jobTitle: "Inspector de Calidad",
  user: "Doe.John.25",
  password: "hdhdfgh321",
};

type InitialStateType = {
  authUser: UserType | null;
  users: UserType[];
  userProfile: UserType | null;
  error: string | null;
  loading: boolean;
  userEdit: UserType | null;
};

//TODO: NO PONER ANY
const initialState: InitialStateType = {
  authUser: initialFakeValues,
  users: [],
  userProfile: null,
  error: null,
  loading: false,
  userEdit: null,
};

//* SLICE SETUP
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    cleanError: (state) => {
      state.error = null;
    },
    cleanUserProfile: (state) => {
      state.userProfile = null;
    },
    setUserProfile: (state, action: PayloadAction<UserType>) => {
      state.userProfile = action.payload;
    },
    setUserEdit: (state, action: PayloadAction<UserType>) => {
      state.userEdit = action.payload;
    },
    cleanUserEdit: (state) => {
      state.userEdit = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchGetUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló la obtención del usuarios";
      })
      .addCase(fetchCreateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCreateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = [...state.users, action.payload];
      })
      .addCase(fetchCreateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló la creación del usuario";
      })
      .addCase(fetchUploadProfilePicture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUploadProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.userProfile) {
          state.userProfile.profilePicture = `http://localhost:4000/api/${action.payload}`;
        }
      })
      .addCase(fetchUploadProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Falló el cargue de la foto";
      })

      .addCase(fecthUpdateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fecthUpdateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userProfile as UserType;
        state.userProfile = action.payload;
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(fecthUpdateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló la actualización del usuario";
      })
      .addCase(fetchActiveDeactiveUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveDeactiveUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        if (state.userProfile?.id === action.meta.arg.id) {
          state.userProfile.active = action.payload;
        }
        // Actualiza el estado del usuario en la lista de users
        state.users = state.users.map((item) =>
          item.id === action.meta.arg.id
            ? { ...item, active: action.payload }
            : item
        );
      })
      .addCase(fetchActiveDeactiveUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló la actualización del usuario";
      })
      .addCase(fetchUpdatePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUpdatePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.userProfile as UserType;
        state.userProfile = action.payload;
        state.users = state.users.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(fetchUpdatePassword.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Falló la actualización de la contraserña";
      });
  },
});

export const {
  cleanError,
  cleanUserProfile,
  setUserProfile,
  setUserEdit,
  cleanUserEdit,
} = userSlice.actions;

export default userSlice.reducer;
