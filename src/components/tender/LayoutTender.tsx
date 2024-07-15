import { Link, Outlet } from "react-router-dom";

const LayoutTender = () => {
  return (
    <>
      <h1 className="text-gray-500 font-black uppercase text-sm sm:text-xl">
        Módulo de <span className="text-customRed">Cotizaciones</span>
      </h1>
      <p className="text-xs sm:text-sm">
        Puedes{" "}
        <span className="font-semibold text-sm">
          crear, filtrar, buscar y revisar
        </span>{" "}
        todas las cotizaciones pendientes y en proceso.
      </p>
      <nav className="w-full flex space-x-3 justify-end
      ">
        <Link
          to="#"
          className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-md text-white px-4 py-1 shadow-lg text-xs sm:text-base"
        >
          Por procesar
        </Link>
        <Link
          to="#"
          className="bg-gradient-to-b from-orange-400 to-orange-600 rounded-md text-white px-4 py-1 shadow-lg"
        >
          En edición
        </Link>
        <Link
          to="#"
          className="bg-gradient-to-b from-violet-700 to-violet-800 rounded-md text-white px-4 py-1 shadow-lg"
        >
          Pendientes
        </Link>
        <Link
          to="#"
          className="bg-gradient-to-b from-green-400 to-green-600 rounded-md text-white px-4 py-1 shadow-lg"
        >
          Aprobadas
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
export default LayoutTender;
