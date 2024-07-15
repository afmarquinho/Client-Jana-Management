import { useSelector } from "react-redux";
import { VisitReportApi } from "../../types/types";
import ReportButton from "./ReportButton";
import { RootState } from "../../redux/store";

const AllReports = () => {
  const reportArray = useSelector((state: RootState) => state.visitReport.report);

  

  //? ARRAY WITH NOT OVERDUED REPORTS TO RENDER
  const notOverDueArray = reportArray.filter((report: VisitReportApi) => {
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
  const overDueArray = reportArray.filter((report: VisitReportApi) => {
    return new Date(report.dueDate) < new Date();
  });
  // TODO: SEPARAR EL BOTON EN UN COMPONENTE

  return (
   
     <div className="w-full mx-auto flex flex-grow flex-col sm:flex-row justify-between items-start flex-wrap md:flex-nowrap sm:gap-3 md:gap-5">
       <div className="mb-4 w-full sm:w-[17rem] md:w-full h-full space-y-2">
         <h2 className="text-sm py-1 px-2 border-b-8 border-b-red-400 bg-gradient-to-b from-red-400 to-red-700 text-center text-white uppercase font-bold">
           Alta
         </h2>
         <div className="w-full flex flex-col gap-2">
           {hightPriorityArray.map((item: VisitReportApi) => (
             <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
           ))}
         </div>
       </div>
       <div className="mb-4 w-full sm:w-[17rem] md:w-full h-full space-y-2">
         <h2 className="text-sm py-1 px-2 border-b-8 border-b-violet-400 bg-gradient-to-b from-violet-600 to-violet-800 text-center text-white uppercase font-bold">
           Media
         </h2>
         <div className="w-full flex flex-col gap-2">
           {mediumPriorityArray.map((item: VisitReportApi) => (
             <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
           ))}
         </div>
       </div>
       <div className="mb-4 w-full sm:w-[17rem] md:w-full h-full space-y-2">
         <h2 className="text-sm py-1 px-2 border-b-8 bg-gradient-to-b from-blue-400 to-blue-600 border-b-blue-400 text-center text-white uppercase font-bold">
           Baja
         </h2>
         <div className="w-full flex flex-col gap-2">
           {lowPriorityArray.map((item: VisitReportApi) => (
             <ReportButton key={item.ref} item={item} dias={"Días Restantes"} />
           ))}
         </div>
       </div>
       <div className="mb-4 w-full sm:w-[17rem] md:w-full h-full space-y-2">
         <h2 className="text-sm py-1 px-2 border-b-8 border-gray-500 text-center text-gray-200 uppercase font-bold bg-gradient-to-b from-gray-700 to-black">
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

export default AllReports;
