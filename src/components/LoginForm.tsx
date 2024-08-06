import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.authUser);

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!!user && user.role === "admin") {
      navigate("dashboard-user");
      return
    } else {
      if (!!user && user.role === "ingObra") {
        navigate("dashboard-report");
        return
      } else {
        if (
          !!user &&
          (user.role === "ingCotizacion" || user.role === "gerente")
        ) {
          navigate("dashboard-tender");
          return
        }
      }
    }
  };

  return (
    <form action="" className="w-full sm:w-1/2 p-8 bg-white space-y-8">
      <div className="space-y-6 sm:space-y-20">
        <h2 className="font-semibold text-left text-xs sm:text-sm">
          Área de Miembros
        </h2>
        <h2 className="font-black text-center text-xl sm:hidden text-green-600">
          Bienvenido
        </h2>
        <h2 className="text-center font-bold sm:font-bold sm:text-xl text-black sm:text-green-600 ">
          Iniciar Sesión
        </h2>
      </div>
      <input
        type="text"
        className="w-full border border-green-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="usuario"
      />
      <input
        type="password"
        className="w-full border border-green-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="contraseña"
      />
      <input
        type="submit"
        className="w-full p-2 bg-gradient-to-b from-green-400 to-green-600  hover:from-green-600 hover:to-green-700 
            rounded-md shadow-gray-400 shadow-md outline-none text-slate-100 hover:text-white font-bold cursor-pointer uppercase"
        value="Iniciar sesión"
        onClick={handleSubmit}
      />
      <button className="w-full text-right text-white">
        ¿Olvidaste la contraseña?
      </button>
    </form>
  );
};

export default LoginForm;
