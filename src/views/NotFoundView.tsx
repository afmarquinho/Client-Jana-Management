import { useNavigate } from "react-router-dom";

const NotFoundView = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen space-y-5 text-center flex flex-col justify-center align-middle">
      <p className="text-5xl md:text-[200px] font-black text-green-600">
        ¡Oops!
      </p>
      <p className="text-sm md:text-xl font-black">
        Error 404 - Página no encontrada
      </p>
      <p>La página que estas buscando no existe o ha sido removida.</p>
      <button
        className="w-40 p-2 text-white font-bold bg-gradient-to-b from-red-500 to-red-600 hover:from-red-600 hover:to-red-700
            rounded-md shadow-gray-400 shadow-md self-center"
        onClick={onHome}
      >
        Ir al Home
      </button>
    </div>
  );
};

export default NotFoundView;
