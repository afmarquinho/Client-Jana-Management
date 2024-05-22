import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate("dashboard-report");
  };

  return (
    <form action="" className="w-full sm:w-1/2 p-8 bg-gray-500 space-y-8">
      <Logo />
      <input
        type="text"
        className="w-full border border-red-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="usuario"
      />
      <input
        type="password"
        className="w-full border border-red-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="contraseña"
      />
      <input
        type="submit"
        className="w-full p-2 bg-gradient-to-b from-cyan-600 to-cyan-700 hover:from-red-500 hover:to-red-600 
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer uppercase"
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
