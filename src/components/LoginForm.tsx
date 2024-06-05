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
        <h2 className="font-black text-center text-xl sm:hidden text-cyan-700">Bienvenido</h2>
        <h2 className="text-center font-bold sm:font-bold sm:text-xl text-red-600 sm:text-cyan-700 ">Iniciar Sesión</h2>
      </div>
      <input
        type="text"
        className="w-full border border-cyan-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="usuario"
      />
      <input
        type="password"
        className="w-full border border-cyan-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
        placeholder="contraseña"
      />
      <input
        type="submit"
        className="w-full p-2 bg-gradient-to-b from-cyan-500 to-cyan-600  hover:from-red-600 hover:to-red-700 
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
