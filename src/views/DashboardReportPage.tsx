import { useState } from "react";
import Report from "../components/reports/Report";
import ReportForm from "../components/reports/ReportForm";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
import { dataReport as data} from "../db/db";

const DashboardReportPage = () => {
  const [actNewReport, setActNewReport] = useState<boolean>(false);
  // ! IMPORTANTE: QUITAR REDERIZACIÓN DE LA DATA, SE PUSO PARA CODIFICAR MÁS FÁCIL
  // const data = useSelector((state: RootState) => state.visitReport.data);

  return (
    <>
      <h1 className="text-customGray font-black uppercase text-sm sm:text-xl">
        Informe de <span className="text-customRed">Visita de Obra</span>
      </h1>
      <p className="text-xs sm:text-sm">
        <span className="font-semibold">Visualiza </span>tus informes aquí.
        <br />
        Puedes{" "}
        <span className="font-semibold text-sm">
          crear, filtrar, buscar y revisar
        </span>{" "}
        todos tus reportes de visita de obra de manera fácil y rápida.
      </p>
      <button
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded hover:bg-gradient-to-b
       hover:from-gray-500 hover:to-gray-700 my-4 text-xs sm:text-md shadow-gray-400 shadow-md"
        onClick={() => setActNewReport(!actNewReport)}
      >
        {actNewReport ? "Volver" : "Nuevo Informe"}
      </button>
      {actNewReport ? (
        <ReportForm />
      ) : data.length === 0 ? (
        <p className="font-semibold">
          No hay Informe para mostrar. <br /> <span className="text-blue-500 font-bold">Diligencia</span> el formulario y {" "}
          <span className="text-blue-500 font-bold">visualiza</span> tu informes <span className="font-bold">aquí.</span>
        </p>
      ) : (
        <Report />
      )}
    </>
  );
};

export default DashboardReportPage;
