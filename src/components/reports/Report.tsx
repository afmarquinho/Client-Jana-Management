import { useSelector } from "react-redux";
import { VisitReportApi } from "../../types/types";
import ReportButton from "./ReportButton";
import { RootState } from "../../redux/store";

const Report = () => {
  const report = useSelector((state: RootState) => state.visitReport.report);
  
  //? ARRAY WITH NOT OVERDUED REPORTS TO RENDER
  const notOverDueArray =  report.filter((report: VisitReportApi) => {
    return new Date(report.dueDate) > new Date();
  });
  
  
  const hightPriorityArray = notOverDueArray.filter(
    (report: VisitReportApi) => report.priority === "high"
  );
  const mediumPriorityArray = notOverDueArray.filter(
    (report: VisitReportApi) => report.priority === "medium"
  );
  const lowPriorityArray = notOverDueArray.filter(
    (report: VisitReportApi) => report.priority === "low"
  );

  //? ARRAY WITH OVERDUED REPORTS TO RENDER
  const overDueArray = report.filter((report: VisitReportApi) => {
    return new Date(report.dueDate) < new Date();
  });
  // TODO: SEPARAR EL BOTON EN UN COMPONENTE

  return (
    <div className="w-full max-w-[55rem] mx-auto flex-grow flex flex-col md:flex-row justify-between items-start gap-5">
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-customRed bg-red-200 text-center text-customRed uppercase font-bold">
          Alta
        </h2>
        <div className="w-full flex flex-col gap-2">
          {hightPriorityArray.map((item: VisitReportApi) => (
            <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-yellow-500 bg-yellow-200 text-center text-yellow-600 uppercase font-bold">
          Media
        </h2>
        <div className="w-full flex flex-col gap-2">
          {mediumPriorityArray.map((item: VisitReportApi) => (
            <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-blue-600 bg-blue-200 text-center text-blue-600 uppercase font-bold">
          Baja
        </h2>
        <div className="w-full flex flex-col gap-2">
          {lowPriorityArray.map((item: VisitReportApi) => (
            <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
          ))}
        </div>
      </div>
      <div className="w-full h-full space-y-2">
        <h2 className="text-sm py-1 px-2 border-b-8 border-gray-500 bg-black text-center text-gray-200 uppercase font-bold">
          Vencidas
        </h2>
        <div className="w-full flex flex-col gap-2">
          {overDueArray.map((item: VisitReportApi) => (
            <ReportButton key={item.ref} item={item} dias={"Días vencidos"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
