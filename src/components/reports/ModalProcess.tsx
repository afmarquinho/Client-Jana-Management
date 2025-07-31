import { fetchProcessReport } from "../../redux/thunks/reportThunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { formatServerDate } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { fetchCreateTender } from "../../redux/thunks/tenderThunks";

type ChildInputProps = {
  setIsModalProcess: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalProcess: React.FC<ChildInputProps> = ({ setIsModalProcess }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const report = useSelector((state: RootState) => state.report.report);
  const user = useSelector((state: RootState) => state.user.authUser);

  const onProcess = async () => {
     if(!user) return

    setIsModalProcess(false);
    if (!report) {
      return;
    }
    if (!report.id) {
      return;
    }

    const resultAction = await dispatch(
      fetchProcessReport({
        reportId: report.id,
        userId: user?.id,
        dueDate: formatServerDate(report.dueDate),
      })
    );

    if (fetchProcessReport.fulfilled.match(resultAction)) {
      navigate("/dashboard-report");
      alert("Informe de Visita de Obra procesado exitosamente");

      await dispatch(fetchCreateTender(report.id));
    }
  };
  const onCancel = () => {
    setIsModalProcess(false);
  };

  return (
    <div className="fixed bg-black bg-opacity-50 flex justify-center items-center inset-0">
      <div className="w-96 bg-white text-black p-5 rounded-lg">
        <p className="text-center">
          Confirma que quieres procesar este Informe de Vista
        </p>
        <div className="w-full flex justify-around items-center mt-5">
          <button
            onClick={onProcess}
            className="text-white rounded bg-green-600 text-sm px-3 py-2 hover:bg-green-700"
          >
            Procesar
          </button>
          <button
            onClick={onCancel}
            className="text-white rounded bg-red-600 text-sm px-3 py-2 hover:bg-red-700"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalProcess;
