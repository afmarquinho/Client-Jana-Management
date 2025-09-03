import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  fetchAuthenticate,
  fetchRestoreSesion,
} from "../redux/thunks/userThunks";
import { redirectTo } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";

type AuthType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.user.authUser);
  const loading = useSelector((state: RootState) => state.user.loading);
  

  const { register, handleSubmit } = useForm<AuthType>({});

  const onSubmit: SubmitHandler<AuthType> = async (data) => {
   
    if (!data.email || !data.password) {
      return alert("Email y contraseña son requeridos");
    }

    const resultAction = await dispatch(fetchAuthenticate(data));

    if (fetchAuthenticate.fulfilled.match(resultAction)) {
      if (!user) {
        return;
      }
      redirectTo(user, navigate);
      return;
    } else if (fetchAuthenticate.rejected.match(resultAction)) {
      const errorMsg = resultAction.error.message || "Error desconocido al autenticar";
      alert(errorMsg); // Mostrar el error específico que viene del thunk
    }
  };
  useEffect(() => {
    if (localStorage.getItem("AUTH_TOKEN")) {
      dispatch(fetchRestoreSesion());
    }
  }, [dispatch]);

  // Handle redirection based on user data
  useEffect(() => {
    if (user) {
      redirectTo(user, navigate);
    }
  }, [user, navigate]);
  return (
    <>
      <form
        action=""
        className="w-full sm:w-1/2 p-8 bg-white space-y-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-6 sm:space-y-20">
          <h2 className="font-semibold text-left text-xs sm:text-sm">
            Área de Miembros
          </h2>
          <div className="relative">
            <h2 className="font-black text-center text-xl sm:hidden text-sky-700">
              Bienvenido
            </h2>
            <h2 className="text-center font-bold sm:font-bold sm:text-xl text-black sm:text-sky-700 ">
              Iniciar Sesión
            </h2>
          </div>
        </div>
        <input
          type="text"
          className="w-full border border-sky-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
          placeholder="email@email.com"
          {...register("email")}
        />
        <input
          type="password"
          className="w-full border border-sky-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
          placeholder="contraseña"
          {...register("password")}
        />
        <input
          type="submit"
          disabled={loading}
          className="w-full p-2 bg-sky-600  hover:bg-sky-700 duration-300 rounded-md shadow-gray-400 shadow-md outline-none text-slate-100 hover:text-white font-bold cursor-pointer uppercase"
          value="Iniciar sesión"
        />
        <p className="w-full text-right text-xs">
          ¿Olvidaste la contraseña? <br />
          Ponte en contacto con el administrador de la plataforma
        </p>
      </form>
    </>
  );
};

export default LoginForm;
