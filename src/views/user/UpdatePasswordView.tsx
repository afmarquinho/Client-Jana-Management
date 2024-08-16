import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchUpdatePassword } from "../../redux/thunks/userThunks";

type PasswordType = {
  password: string;
  confirmPassword: string;
};

const UpdatePasswordView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const [checkPassword, setCheckPassword] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<PasswordType>();

  const onCheck = () => {
    setCheckPassword(!checkPassword);
  };

  const onBack = () => {
    navigate(-1);
  };

  const onSubmit: SubmitHandler<PasswordType> = async (data) => {
    const password = data.password;
    if (!id) {
      return;
    }
    const id_ = parseInt(id);
    const resultAction = await dispatch(
      fetchUpdatePassword({ id: id_, password })
    );
    if (fetchUpdatePassword.fulfilled.match(resultAction)) {
      alert("Contraseña actualizada satisfactoriamente");
      reset();
      navigate(-1);
    } else {
      alert(`Error: ${resultAction.error.message}`);
    }
  };

  return (
    <div className="w-full h-full">
      <button
        onClick={onBack}
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
      >
        Cancelar
      </button>
      <h2 className="text-center uppercase text-gray-500 font-black text-2xl mb-5">
        Actualizar <span className="text-red-500">Contraseña</span>
      </h2>
      <form
        className="bg-white w-full max-w-96 p-5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col justify-center mb-5">
          <label className="text-center">Nueva Contraseña</label>
          <div className="w-full max-w-64 px-2 py-1 bg-gray-300 mx-auto flex justify-between items-center">
            <input
              type={`${checkPassword ? "text" : "password"}`}
              className="bg-transparent outline-none w-full"
              {...register("password")}
            />
            <button type="button" onClick={onCheck}>
              {checkPassword ? (
                <EyeSlashIcon className="h-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center">
          <label className="text-center">Confirma Contraseña</label>
          <div className="w-full max-w-64 px-2 py-1 bg-gray-300 mx-auto flex justify-between items-center">
            <input
              type={`${checkPassword ? "text" : "password"}`}
              className="bg-transparent outline-none w-full"
              {...register("confirmPassword")}
            />
            <button type="button" onClick={onCheck}>
              {checkPassword ? (
                <EyeSlashIcon className="h-5 text-gray-500" />
              ) : (
                <EyeIcon className="h-5 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="w-full max-w-64 flex justify-center mx-auto mt-10">
          <input
            type="submit"
            value="Actualizar"
            className="w-full bg-gray-300 text-blue-800 py-2 hover:bg-slate-500 hover:text-white cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
export default UpdatePasswordView;
