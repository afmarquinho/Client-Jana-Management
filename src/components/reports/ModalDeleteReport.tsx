import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { useDispatch } from "react-redux";
import { openCloseModal } from "../../redux/tenders/visitReportSlice";
import { AppDispatch } from "../../redux/store";
import { removeReportApi } from "../../redux/thunks/reportThunks";
import { useNavigate } from "react-router-dom";


//TODO: animate the modal entrance with framer motion
//TODO: add a toastify

interface componetProps {
  id: number
}
const ModalDeleteReport: React.FC<componetProps> = ({ id }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  
  const handleDelete = () => {
    dispatch(removeReportApi(id))
    dispatch(openCloseModal())
    navigate(-1)
    
  };
  


  return (
    <div className="fixed bg-black bg-opacity-50 flex justify-center items-center inset-0">
      <div className="w-9/12 max-w-96 mx-auto bg-white rounded-md overflow-hidden">
        <h4 className="bg-red-700 p-3 text-sm md:text-lg text-white font-bold text-center flex items-center justify-center gap-3 relative">
          <ExclamationTriangleIcon className="h-5 md:h-6 text-yellow-400 absolute left-4" />
          Alerta
        </h4>
        <div className="p-4 space-y-3">
          <p className="text-sm text-center text-red-700 font-bold">
            ¿Desea eliminar el reporte?
          </p>
          <p className="text-sm text-center">
            Si eliminas, se borrará por completo y luego no podrás acceder a él.
          </p>
          <div className="w-full flex justify-evenly text-sm text-white">
            <button
              className="bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-700 hover:to-emerald-800 py-1 px-3 rounded hover:text-white"
              onClick={() => dispatch(openCloseModal())}
            >
              Cancelar
            </button>
            <button
              className="bg-gradient-to-b from-red-500 to-red-600 hover:from-red-700 hover:to-red-800 py-1 px-3 rounded"
              onClick={handleDelete}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalDeleteReport;
