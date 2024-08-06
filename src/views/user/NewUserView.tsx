import { useForm, SubmitHandler } from "react-hook-form";
import NewUserFiledsForm from "../../components/user/NewUserFieldsForm";
import { UserFormType, UserUpdatedType } from "../../types/types";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  cleanUserEdit,
  fecthUpdateProfile,
  fetchCreateUser,
} from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { formatServerDate } from "../../helpers/helpers";

const NewUserView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userEdit = useSelector((state: RootState) => state.user.userEdit);

  const { register, handleSubmit, reset, setValue } = useForm<UserFormType>({
    defaultValues: {
      name: "",
      lastName: "",
      idType: "",
      userId: 0,
      dateOfBirth: "",
      address: "",
      phoneNumber: "",
      email: "",
      role: "",
      jobTitle: "",
      user: "",
      password: "",
    },
  });
  useEffect(() => {
    if (userEdit) {
      setValue("name", userEdit.name);
      setValue("lastName", userEdit.lastName);
      setValue("idType", userEdit.idType);
      setValue("userId", userEdit.userId);
      setValue("dateOfBirth", formatServerDate(userEdit.dateOfBirth));
      setValue("address", userEdit.address);
      setValue("phoneNumber", userEdit.phoneNumber);
      setValue("email", userEdit.email);
      setValue("role", userEdit.role);
      setValue("jobTitle", userEdit.jobTitle);
      setValue("user", userEdit.user);
      setValue("password", userEdit.password);
    }
  }, [setValue, userEdit]);

  const onSubmit: SubmitHandler<UserFormType> = async (data) => {
    let upData: UserUpdatedType | null = null;



    if (userEdit) {
      upData = {} as UserUpdatedType;
      upData.address = data.address;
      upData.phoneNumber = data.phoneNumber;
      upData.email = data.email;
      upData.jobTitle = data.jobTitle;
      upData.role = data.role;
      upData.user = data.user;

      try {
        const resultAction = await dispatch(
          fecthUpdateProfile({ id: userEdit.id, user: upData })
        );
        if (fecthUpdateProfile.fulfilled.match(resultAction)) {
          alert("¡Usuario actualizado correctamente!");
          reset();
          cleanUserEdit();
        } else {
          console.error("Error del backend:", resultAction.error.message);
          alert(`Error: ${resultAction.error.message}`);
        }
      } catch (error) {
              console.error("Error al actualizar el usuario:", error);
        alert("Ocurrió un error inesperado al actualizar el usuario.");
      }
      
    } else {
  
      try {
        const resultAction = await dispatch(fetchCreateUser(data));
        if (fetchCreateUser.fulfilled.match(resultAction)) {
          alert("¡Usuario creado correctamente!");
          reset();
        } else {
          console.error("Error del backend:", resultAction.error.message);
          alert(`Error: ${resultAction.error.message}`);
        }
      } catch (error) {
        console.error("Error al crear usuario:", error);
        alert("Ocurrió un error inesperado al crear el usuario.");
      }
    }
  };

  const onBack = () => {
    navigate(-1);
    dispatch(cleanUserEdit());
  };

  return (
    <>
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="#"
        onClick={onBack}
      >
        Volver
      </Link>
      <form
        className="bg-white w-full sm:w-[600px] md:w-full max-w-4xl mx-auto mb-5 px-10 sm:px-20 md:px-14 py-12 space-y-5 flex flex-col items-center shadow-md rounded-lg overflow-hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center font-black text-gray-500 uppercase text-base md:text-xl mb-5">
          Crear <span className=" text-red-600">Nuevo Usuario</span>
        </h2>
        <NewUserFiledsForm register={register} />
        <input
          type="submit"
          value={userEdit !== null ? "Editar" : "Guardar"}
          className="my-5 px-14 py-2 bg-gradient-to-b from-yellow-400 to-yellow-500 hover:from-blue-900 hover:to-blue-950 text-black shadow shadow-gray-700 cursor-pointer rounded-sm text-sm font-medium hover:text-white uppercase"
        />
      </form>
    </>
  );
};
export default NewUserView;
