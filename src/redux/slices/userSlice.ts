import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  activeDeactiveUserService,
  createUserService,
  getUsersService,
  updatePasswordService,
  updateUserService,
  uploadProfilePictureService,
} from "../../services/userServices";
import { isAxiosError } from "axios";
import { UserFormType, UserType, UserUpdatedType } from "../../types/types";

//*THUNKS
export const fetchGetUsers = createAsyncThunk("api/user/getAll", async () => {
  try {
    const users = await getUsersService();
    return users;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0]?.msg || "Error al obtener usuarios"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado al obtener usuarios");
    }
  }
});

export const fetchCreateUser = createAsyncThunk(
  "api/user/create",
  async (user: UserFormType) => {
    try {
      const data = await createUserService(user);
      return data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Ha ocurrido un error inesperado al crear el usuario");
      }
    }
  }
);

export const fetchUploadProfilePicture = createAsyncThunk(
  "user/uploadProfilePicture",
  async ({ id, file }: { id: number; file: File }) => {
    try {
      const filePath = await uploadProfilePictureService(id, file);
      return filePath;
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Ha ocurrido un error inesperado al cargar la foto");
      }
    }
  }
);

export const fecthUpdateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ id, user }: { id: number; user: UserUpdatedType }) => {
    try {
      return await updateUserService(id, user);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error(
          "Ha ocurrido un error inesperado al actualizar el usuario"
        );
      }
    }
  }
);

export const fetchActiveDeactiveUser = createAsyncThunk(
  "api/user/update-status",
  async ({ id, status }: { id: number; status: boolean }) => {
    try {
      await activeDeactiveUserService(id, status);
      return status;
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error("Ha ocurrido un error inesperado al crear el usuario");
      }
    }
  }
);

export const fetchUpdatePassword = createAsyncThunk(
  "user/update-password",
  async ({ id, password }: { id: number; password: string }) => {
    try {
      return await updatePasswordService(id, password);
    } catch (error) {
      if (isAxiosError(error)) {
        throw error;
      } else {
        throw new Error(
          "Ha ocurrido un error inesperado al actualizar la contraseña"
        );
      }
    }
  }
);

type InitialStateType = {
  users: UserType[];
  userProfile: UserType | null;
  error: string | null;
  loading: boolean;
  userEdit: UserType | null;
};

//TODO: NO PONER ANY
const initialState: InitialStateType = {
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
