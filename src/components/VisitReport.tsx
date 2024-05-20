import { useDispatch, useSelector } from "react-redux";
import VisitReportForm from "./VisitReportForm";
import { RootState } from "../redux/store";
import { VisitReport as visitReportTypes } from "../types/types";
import ReportButton from "./ReportButton";
import ViewVisitReport from "./ViewVisitReport";
import { activateViewReport } from "../redux/tenders/visitReportSlice";


const VisitReport: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.visitReport.data);

  const viewReport = useSelector(
    (state: RootState) => state.visitReport.viewReport
  );

  const hightPriority = data.filter(
    (report: visitReportTypes) => report.priority === "hight"
  );
  const middlePriority = data.filter(
    (report: visitReportTypes) => report.priority === "middle"
  );
  const lowPriority = data.filter(
    (report: visitReportTypes) => report.priority === "low"
  );

  const handleReportClick = (itemReport: visitReportTypes) => {
    console.log(itemReport);
    dispatch(activateViewReport(itemReport));
  };

  // TODO: VALIDAR EL FORMULARIO DE INGRESO DE REPORTES CON YUP
  // TODO: RESETEAR EL FORMULARIO
  // TODO: AGREGAR EL LOCALHOST

  return (
    <>
      <h1 className="font-bold text-center text-xl">
        Informe de Visita a Obra
      </h1>
      {viewReport.isActive && viewReport.report ? (
        <ViewVisitReport report={viewReport.report} />
      ) : (
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 my-5">
          <VisitReportForm />

          <div className="w-full md:w-1/2 lg:w-2/3">
            <h2 className="">Visualiza tus informes aquí</h2>

            {/* Box to render the buttons of the reports according to their priority. */}
            {data.length === 0 ? (
              <p className="italic my-5 font-bold">No hay informes agregados</p>
            ) : (
              <div className=" w-full flex flex-col lg:flex-row justify-around align-top gap-5">
                <div className="w-full lg:w-1/3">
                  <h4 className="text-red-500 font-bold">Alta</h4>
                  <ReportButton
                    reportArray={hightPriority}
                    onReportClick={handleReportClick}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <h4 className="text-yellow-400 font-bold">Media</h4>
                  <ReportButton
                    reportArray={middlePriority}
                    onReportClick={handleReportClick}
                  />
                </div>
                <div className="w-full lg:w-1/3">
                  <h4 className="text-blue-600 font-bold">Baja</h4>
                  <ReportButton
                    reportArray={lowPriority}
                    onReportClick={handleReportClick}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VisitReport;
