import { useState } from "react";
import Report from "../components/reports/Report";
import ReportForm from "../components/reports/ReportForm";

const DashboardReportPage = () => {
  const [actNewReport, setActNewReport] = useState<boolean>(false);

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
        className="bg-gradient-to-b from-red-500 to-red-600 uppercase py-2 px-5 text-white font-bold rounded hover:bg-gradient-to-b
       hover:from-gray-500 hover:to-gray-700 my-4 text-xs sm:text-base w-60 shadow-gray-400 shadow-md"
        onClick={() => setActNewReport(!actNewReport)}
      >
        {actNewReport ? "Volver": "Nuevo Informe"}
      </button>
      {actNewReport ? <ReportForm /> : <Report />}
    </>
  );
};

export default DashboardReportPage;
