import { isAxiosError } from "axios";
import axiosClient from "../axiosClient";
import { UserUpdatedType, UserFormType } from "../types/types";

export const getUsersService = async () => {
  try {
    const response = await axiosClient.get(`/users`);
    const res = response.data.data;
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0].msg || "Error fetching users"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const getUserByIdService = async (id: number) => {
  try {
    const response = await axiosClient.get(`/users/${id}`);
    const res = response.data.data;
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(
        "Error del backend:",
        error.response?.data.errors[0].msg || error.message
      );
      throw new Error(
        error.response?.data.error || "Error al crear el usuario"
      );
    } else {
      console.error("Error inesperado:", error);
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const createUserService = async (user: UserFormType) => {
  try {
    const response = await axiosClient.post("/users", user);
    const res = response.data.data;
    return res;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.errors?.[0]?.msg;
      throw new Error(errorMessage || "Error al crear el usuario");
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const updateUserService = async (id: number, user: UserUpdatedType) => {
  try {
    const response = await axiosClient.patch(`users/update/${id}`, user);
    return response.data.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorMessage = error.response?.data?.errors?.[0]?.msg;
      throw new Error(
        errorMessage || "Error al actualizar el perfil del usuario"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const uploadProfilePictureService = async (id: number, file: File) => {
  const formData = new FormData();
  formData.append("profilePicture", file);
  try {
    const response = await axiosClient.post(
      `/uploads/profile-picture/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.filePath; // Ruta del archivo en el servidor
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0].msg ||
          "Error al actualizar la foto de perfil"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const activeDeactiveUserService = async (id: number, status: boolean) => {
  try {
    await axiosClient.patch(`/users/update-status/${id}`, {active: status });
    return status
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0].msg ||
          "Error al actualizar el estado del usuario"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};

export const updatePasswordService = async (id: number, password: string) => {
  try {
    const response = await axiosClient.patch(`/users/${id}`, {password});

    return response.data.data
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data.errors[0].msg ||
          "Error al actualizar la contraseña del usuario"
      );
    } else {
      throw new Error("Ha ocurrido un error inesperado");
    }
  }
};
