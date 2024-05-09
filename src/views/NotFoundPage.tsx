const NotFoundPage = () => {
  return (
    <div className="h-screen space-y-5 text-center flex flex-col justify-center align-middle">
      <p className="text-5xl md:text-7xl font-black text-customRed600">
        ¡Oops!
      </p>
      <p className="text-sm md:text-xl font-black">
        Error 404 - Página no encontrada
      </p>
      <p>La página que estas buscando no existe o ha sido removida.</p>
      <button
        className="w-40 p-2 text-white font-bold bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md self-center"
      >
        {" "}
        Ir al Home
      </button>
    </div>
  );
};

export default NotFoundPage;
