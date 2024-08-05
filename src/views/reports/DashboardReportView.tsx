import AllReports from "../../components/reports/AllReports";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGetAllReports } from "../../redux/thunks/reportThunks";
import HourglassSpinner from "../../components/HourglassSpinner";
import { cleanError, cleanReport } from "../../redux/slices/reportSlice";

const DashboardReportView: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const unprocessedReports = useSelector(
    (state: RootState) => state.report.unprocessedReports
  );
  const loading = useSelector((state: RootState) => state.report.loading);
  const error = useSelector((state: RootState) => state.report.error);
  const [fetchExecuted, setFetchExecuted] = useState<boolean>(false);

  // TODO: ALLOW THE OPTION TO ATTACHED FILES AS PDF,.DOCX AND IMAGES

  useEffect(() => {
    if (!fetchExecuted && unprocessedReports.length === 0) {
      dispatch(fetchGetAllReports());
      setFetchExecuted(true);
    }
    dispatch(cleanError());
    dispatch(cleanReport());
  }, [dispatch, unprocessedReports, fetchExecuted]);

  return (
    <div>
      {loading ? (
        <HourglassSpinner />
      ) : error ? (
        <p>error</p>
      ) : (
        <>
          <Link
            className="w-36 mb-5 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
            hover:from-cyan-700 hover:to-cyan-800 text-xs shadow-gray-400 shadow-md text-center flex justify-center items-center"
            to="/report-form"
          >
            Nuevo Informe
          </Link>
      
          {unprocessedReports.length === 0 ? (
            <p className="font-semibold">
              No hay Informe para mostrar. <br />{" "}
              <span className="text-blue-500 font-bold">Diligencia</span> el
              formulario y{" "}
              <span className="text-blue-500 font-bold">visualiza</span> tu
              informes <span className="font-bold">aquí.</span>
            </p>
          ) : (
            <AllReports />
          )}
        </>
      )}
    </div>
  );
};

export default DashboardReportView;
