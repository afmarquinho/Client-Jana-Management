import { Link, useNavigate } from "react-router-dom";
import ReportForm from "../../components/reports/ReportForm";
import { useDispatch } from "react-redux";
import { cleanReport, errorMessage } from "../../redux/slices/visitReportSlice";

const NewReportView = () => {


  const navigate = useNavigate()
  
  const dispatch = useDispatch();
  
  const onBack = () => {
    dispatch(cleanReport())
    dispatch(errorMessage(""))
    navigate(-1)
  
  };

  return (
    <>
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="#"
        onClick={onBack}
      >
        Volver
      </Link>
      <ReportForm />
    </>
  );
};
export default NewReportView;
