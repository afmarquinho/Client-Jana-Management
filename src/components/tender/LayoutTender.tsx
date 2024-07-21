import { PlusIcon } from "@heroicons/react/16/solid";
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
      <nav
        className="w-full flex space-x-3 justify-between mt-2
      "
      >
        <Link
          to="/report-form"
          className="bg-blue-900 text-white flex items-center px-2 py-1 rounded hover:bg-green-700"
        >
          <PlusIcon className="h-5" /> Crear Cotización
        </Link>

        <div className="flex gap-3">
          <Link
            to="/tender-draft"
            className="bg-gradient-to-b from-orange-400 to-orange-600 rounded-md text-white px-2 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            En edición
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-b from-violet-700 to-violet-800 rounded-md text-white px-2 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            Pendientes
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-b from-green-400 to-green-600 rounded-md text-white px-2 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            Aprobadas
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-b from-green-400 to-green-600 rounded-md text-white px-2 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            Rechazadas
          </Link>

          <Link
            to="#"
            className="bg-gradient-to-b from-green-400 to-green-600 rounded-md text-white px-2 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            Enviadas
          </Link>
          <Link
            to="/dashboard-tender"
            className="bg-gradient-to-b from-red-500 to-red-800 rounded-md text-white px-5 py-1 sm:px-4 sm:py-1 shadow-lg text-xs sm:text-base"
          >
            Atrás
          </Link>
        </div>
      </nav>

      <Outlet />
    </>
  );
};
export default LayoutTender;
