import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { fetchDeleteReport } from "../../redux/thunks/reportThunks";

//TODO: animate the modal entrance with framer motion
//TODO: add a toastify

type ChildInputProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ModalDeleteReport: React.FC<ChildInputProps> = ({ setIsModalOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const report = useSelector((state: RootState) => state.report.report);

  const handleDelete = async () => {
    setIsModalOpen(false);
    try {
      if (report !== null && report.id !== undefined) {
        const resultAction = await dispatch(
          fetchDeleteReport({ id: report.id })
        );
        if (fetchDeleteReport.fulfilled.match(resultAction)) {
          alert("Informe de Visita de Obra eliminado exitosamente");
          navigate("/dashboard-report");
        } else {
          console.error("Error del backend:", resultAction.error.message);
          alert(`Error: ${resultAction.error.message}`);
        }
      }
    } catch (error) {
      console.error("Error eliminar el informe", error);
      alert("No se puedo procesar el informe");
    }
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
              onClick={() => setIsModalOpen(false)}
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
