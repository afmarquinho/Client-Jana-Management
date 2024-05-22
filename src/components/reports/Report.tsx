
import { useSelector } from "react-redux";
import { VisitReport } from "../../types/types";
import ReportButton from "./ReportButton";
import { RootState } from "../../redux/store";
// import { dataReport as data } from "../../db/db";

const Report = () => {
   const data = useSelector((state: RootState) => state.visitReport.data);
  // ! IMPORTANTE: QUITAR REDERIZACIÓN DE LA DATA, SE PUSO PARA CODIFICAR MÁS FÁCIL
  // const hightPriority = data.filter(
  const hightPriority = data.filter(
    (report: VisitReport) => report.priority === "high"
  );
  const middlePriority = data.filter(
    (report: VisitReport) => report.priority === "middle"
  );
  const lowPriority = data.filter(
    (report: VisitReport) => report.priority === "low"
  );
  // TODO: SEPARAR EL BOTON EN UN COMPONENTE
  return (
    <div className="w-full max-w-[55rem] mx-auto flex-grow flex flex-col md:flex-row justify-between items-start gap-5">
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-customRed bg-red-100 text-center text-customRed uppercase font-bold">
          Alta
        </h2>
        <div className="w-full flex flex-col gap-2">
          {hightPriority.map((item:VisitReport) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-yellow-500 bg-yellow-100 text-center text-yellow-600 uppercase font-bold">
          Media
        </h2>
        <div className="w-full flex flex-col gap-2">
          {middlePriority.map((item:VisitReport) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-blue-600 bg-blue-100 text-center text-blue-600 uppercase font-bold">
          Baja
        </h2>
        <div className="w-full flex flex-col gap-2">
          {lowPriority.map((item:VisitReport) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
