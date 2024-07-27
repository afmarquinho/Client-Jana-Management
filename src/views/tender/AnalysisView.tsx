import { useNavigate } from "react-router-dom";
import TotalSummary from "../../components/tender/TotalSummary";
import TenderSummary from "../../components/tender/TenderSummary";

const AnalysisView = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button
        onClick={onBack}
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
        hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
      >
        Volver
      </button>
      <div className="flex gap-10">
        <TotalSummary />
        <TenderSummary />
      </div>
    </>
  );
};
export default AnalysisView;
