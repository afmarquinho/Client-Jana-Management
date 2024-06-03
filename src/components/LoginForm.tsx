import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    navigate("dashboard-report");
  };

  return (
    <form action="" className="w-full sm:w-1/2 p-8 bg-white space-y-8">
      <div className="space-y-6 sm:space-y-20">
        <h2 className="font-semibold text-left text-xs sm:text-sm">Área de Miembros</h2>
        <h2 className="font-bold text-center text-xl sm:hidden">Bienvenido</h2>
        <h2 className="text-center font-semibold sm:font-bold sm:text-xl">Iniciar Sesión</h2>
      </div>
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
        className="w-full p-2 bg-gradient-to-b from-red-600 to-red-700 hover:from-cyan-500 hover:to-cyan-600 
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
