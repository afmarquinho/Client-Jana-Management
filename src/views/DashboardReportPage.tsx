import Report from "../components/reports/Report";
import ReportForm from "../components/reports/ReportForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import ViewReport from "../components/reports/ViewReport";
import { useEffect } from "react";
import {
  activateNewReport,
  clearReport
} from "../redux/tenders/visitReportSlice";
import { getReportsApi } from "../redux/thunks/reportThunks";

const DashboardReportPage = () => {
  // !IMPORTANTE: VARIABLE QUE VOY A PASAR COMO PARAMETRO PARA ACTIAR Y DESACTIVAR EL FORMULARIO
  const act: boolean = false;
  const dispatch = useDispatch<AppDispatch>();
  const actNewReport = useSelector(
    (state: RootState) => state.visitReport.actNewReport
  );
  const report = useSelector((state: RootState) => state.visitReport.report);

  const isActiveReport = useSelector(
    (state: RootState) => state.visitReport.viewReport.isActive
  );
  const isActive = () => {
    if (actNewReport) {
      dispatch(activateNewReport(act));
    } else {
      dispatch(activateNewReport(!act));
    }
    dispatch(clearReport());
  };

  // ! IMPORTANTE: ALLOW THE OPTION TO ATTACHED FILES AS PDF,.DOCX AND IMAGES

  useEffect(() => {
    dispatch(getReportsApi());
  }, []);

  /**  useEffect(() => {
    dispatch(getReportsApi);
  }, [report]); **/

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
      <button
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md"
        onClick={isActive}
      >
        {actNewReport ? "Volver" : "Nuevo Informe"}
      </button>
      {actNewReport ? (
        <ReportForm />
      ) : isActiveReport ? (
        <ViewReport />
      ) : report.length === 0 ? (
        <p className="font-semibold">
          No hay Informe para mostrar. <br />{" "}
          <span className="text-blue-500 font-bold">Diligencia</span> el
          formulario y{" "}
          <span className="text-blue-500 font-bold">visualiza</span> tu informes{" "}
          <span className="font-bold">aquí.</span>
        </p>
      ) : (
        <Report />
      )}
    </>
  );
};

export default DashboardReportPage;
