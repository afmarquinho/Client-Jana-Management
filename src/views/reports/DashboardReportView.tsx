import AllReports from "../../components/reports/AllReports";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getReportsApi } from "../../redux/thunks/reportThunks";

import { Link } from "react-router-dom";

const DashboardReportView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const report = useSelector((state: RootState) => state.visitReport.report);

  // ! IMPORTANTE: ALLOW THE OPTION TO ATTACHED FILES AS PDF,.DOCX AND IMAGES

  useEffect(() => {
    dispatch(getReportsApi());
  }, []);

  return (
    <>
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="/new-report"
        
      >
        Nuevo Informe
      </Link>

      {report.length === 0 ? (
        <p className="font-semibold">
          No hay Informe para mostrar. <br />{" "}
          <span className="text-blue-500 font-bold">Diligencia</span> el
          formulario y{" "}
          <span className="text-blue-500 font-bold">visualiza</span> tu informes{" "}
          <span className="font-bold">aquí.</span>
        </p>
      ) : (
        <AllReports />
      )}
    </>
  );
};

export default DashboardReportView;
