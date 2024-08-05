import { Outlet } from "react-router-dom";

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

      <Outlet />
    </>
  );
};
export default LayoutTender;
