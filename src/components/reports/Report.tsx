import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VisitReport } from "../../types/types";
import ReportButton from "./ReportButton";
import { dataReport as data} from "../../db/db";

const Report = () => {
  // const data = useSelector((state: RootState) => state.visitReport.data);
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
    <div className="w-full h-60 flex-grow flex flex-col md:flex-row justify-between items-start gap-5">
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-red-500">
          Alta
        </h2>
        <div className="w-full flex flex-col gap-2">
          {hightPriority.map((item) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-yellow-500">
          Media
        </h2>
        <div className="w-full flex flex-col gap-2">
          {middlePriority.map((item) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-blue-600">
          Baja
        </h2>
        <div className="w-full flex flex-col gap-2">
          {lowPriority.map((item) => (
            <ReportButton key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
