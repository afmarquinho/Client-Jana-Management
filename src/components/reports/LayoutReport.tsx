import { Outlet } from "react-router-dom";

const LayoutReport = () => {

  
  return (
    <>
      <h1 className="text-gray-500 font-black uppercase text-sm sm:text-xl">
        Informe de <span className="text-customRed">Visita de Obra</span>
      </h1>
      <p className="text-xs sm:text-sm mb-5">
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
