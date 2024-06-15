import { Link } from "react-router-dom";
import ReportForm from "../../components/reports/ReportForm";

const NewReportView = () => {
  return (
    <>
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="/dashboard-report"
      >
        Volver
      </Link>
      <ReportForm />
    </>
  );
};
export default NewReportView;
