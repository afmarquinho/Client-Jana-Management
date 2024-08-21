import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import axiosClient from "../../axiosClient";
import { UserFormType, UserUpdatedType } from "../../types";

export const fetchRestoreSesion = createAsyncThunk(
  "api/user/restore-sesion",
  async () => {
    try {
      const {data} = await axiosClient.post(`/users/restore-session`, {});
      return data.data
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al recuperar la cuenta";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado al al recuperar la cuenta");
      }
    }
  }
);

export const fetchGetUsers = createAsyncThunk("api/user/getAll", async () => {
  try {
    const response = await axiosClient.get(`/users`);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage =
        error.response?.data.errors[0].msg || "Error al obtener los usuarios";
      console.error("Error del backend: ", errorMessage);
      throw new Error(errorMessage);
    } else {
      throw new Error("Ha ocurrido un error inesperado al obtener usuarios");
    }
  }
});

export const fetchCreateUser = createAsyncThunk(
  "api/user/create",
  async (user: UserFormType) => {
    try {
      const response = await axiosClient.post("/users", user);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error fetching users";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado al crear el usuario");
      }
    }
  }
);

export const fecthUpdateProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ id, user }: { id: number; user: UserUpdatedType }) => {
    try {
      const response = await axiosClient.patch(`users/update/${id}`, user);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error fetching users";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error(
          "Ha ocurrido un error inesperado al actualizar el usuario"
        );
      }
    }
  }
);

export const fetchUploadProfilePicture = createAsyncThunk(
  "user/uploadProfilePicture",
  async ({ id, file }: { id: number; file: File }) => {
    try {
      const formData = new FormData();
      formData.append("profilePicture", file);

      const response = await axiosClient.post(
        `/uploads/profile-picture/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data.filePath);
      return response.data.filePath; // Ruta del archivo en el servidor
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error al obtener los usuarios";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado al cargar la foto");
      }
    }
  }
);

export const fetchActiveDeactiveUser = createAsyncThunk(
  "api/user/update-status",
  async ({ id, status }: { id: number; status: boolean }) => {
    try {
      await axiosClient.patch(`/users/update-status/${id}`, { active: status });
      return status;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error fetching users";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado al crear el usuario");
      }
    }
  }
);

export const fetchGetUserById = createAsyncThunk(
  "api/user/getById",
  async (id: number) => {
    try {
      const response = await axiosClient.get(`/users/${id}`);
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error fetching users";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);

export const fetchUpdatePassword = createAsyncThunk(
  "user/update-password",
  async ({ id, password }: { id: number; password: string }) => {
    try {
      const response = await axiosClient.patch(`/users/${id}`, { password });
      return response.data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage =
          error.response?.data.errors[0].msg || "Error fetching users";
        console.error("Error del backend: ", errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error(
          "Ha ocurrido un error inesperado al actualizar la contraseña"
        );
      }
    }
  }
);

export const fetchAuthenticate = createAsyncThunk(
  "user/auth",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const { data } = await axiosClient.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("AUTH_TOKEN", data.token);
      return data.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const errorMessage = error.response?.data.error
          ? error.response?.data.error
          : error.response?.data.errors[0].msg
          ? error.response?.data.errors[0].msg
          : "Ha ocurrido un error inesperado";
        console.error(errorMessage);
        throw new Error(errorMessage);
      } else {
        throw new Error("Ha ocurrido un error inesperado");
      }
    }
  }
);
