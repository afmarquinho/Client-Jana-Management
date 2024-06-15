import { Outlet, useLocation } from "react-router-dom";

const LayoutReport = () => {
  const location = useLocation();
    const isDisabled = location.pathname === "/esta-ruta";
  return (
    <>
      <h1 className="text-gray-500 font-black uppercase text-sm sm:text-xl">
        Informe de <span className="text-customRed">Visita de Obra</span>
      </h1>
      <p className="text-xs sm:text-sm">
        Puedes{" "}
        <span className="font-semibold text-sm">
          crear, filtrar, buscar y revisar
        </span>{" "}
        todos tus reportes de visita de obra de manera fácil y rápida.
      </p>
      <Outlet/>
    </>
  );
};
export default LayoutReport;
