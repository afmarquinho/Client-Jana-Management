import { useDispatch, useSelector } from "react-redux";
import { activateNewReport, deactReport, removeItem, setReport } from "../../redux/tenders/visitReportSlice";
import { RootState } from "../../redux/store";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { VisitReport } from "../../types/types";


const ViewReport = () => {
  
  
  const dispatch = useDispatch();
  const report = useSelector(
    (state: RootState) => state.visitReport.viewReport.report
  );
  // Assuming 'report' won't be null
  const validReport: VisitReport = report as VisitReport;

  const onClose = () => {
    dispatch(deactReport());
  };
  const handleRemove = () => {
    dispatch(deactReport());
    dispatch(removeItem(validReport));
  };

  const act: boolean= true
  const hanbdleEdit = () => {
    dispatch(setReport(validReport));
    dispatch(deactReport());
    dispatch(activateNewReport(act))
  };

  return (
    <div className="bg-white p-4 md:p-10 w-full max-w-[40rem] mx-auto">
      <div className="text-sm md:text-base space-y-1">
        <div className="flex justify-between">
          <h2 className="text-customGray font-black uppercase">
            Resúmen de <span className="text-customRed">Informe de Vista</span>
          </h2>
          <button
            className="bg-orange-500 px-2 rounded text-white hover:bg-orange-800 sm:min-w-24 flex items-center justify-center font-semibold"
            onClick={onClose}
          >
            Cerrar
            <XMarkIcon className="h-5 ps-2" />
          </button>
        </div>
        <p className="font-bold text-customGray">
          Nombre del Proyecto:{" "}
          <span className=" text-blue-600 uppercase">{report?.name}</span>
        </p>
        <p className="font-bold text-customGray">
          Fecha de entrega:{" "}
          <span className="font-normal text-black">{report?.dueDate}</span>
        </p>
        <p className="font-bold text-customGray">
          Fecha de visita:{" "}
          <span className="font-normal text-black">{report?.visitDate}</span>
        </p>

        <p className="font-bold text-customGray">
          Cliente: <span className="text-blue-600">{report?.customerName}</span>
        </p>
        <p className="font-bold text-customGray">
          NIT: <span className="font-normal text-black">{report?.nit}</span>
        </p>
        <p className="font-bold text-customGray">
          Ciudad: <span className="font-normal text-black">{report?.city}</span>
        </p>
        <p className="font-bold text-customGray">
          Dirección:{" "}
          <span className="font-normal text-black">{report?.address}</span>
        </p>

        <p className="font-bold text-customGray">
          Teléfono:{" "}
          <span className="font-normal text-black">{report?.phoneNumber}</span>
        </p>
        <p className="font-bold text-customGray">
          Correo electrónico:{" "}
          <span className="font-normal text-black">{report?.email}</span>
        </p>

        <p className="font-bold text-customGray">
          Prioridad{" "}
          <span className="font-normal text-black">
            {report?.priority === "high"
              ? "Alta"
              : report?.priority === "middle"
              ? "Media"
              : "Baja"}
          </span>
        </p>
        <p className="font-bold text-customGray">
          Mano de Obra:{" "}
          <span className="font-normal text-black">
            <ul>
              {report?.workforce.map((item, index) => (
                <li key={index} className="ps-2 md:ps-7">
                  {item.workForce} -- {item.workShift} Turnos
                </li>
              ))}
            </ul>
          </span>
        </p>
        <p className="font-bold text-customGray">
          Materiales:{" "}
          <span className="font-normal text-black">
            <ul>
              {report?.materials.map((item, index) => (
                <li key={index} className="ps-2 md:ps-7">
                  {item.material} -- {item.amount} {item.unit}
                </li>
              ))}
            </ul>
          </span>
        </p>
        <p className="font-bold text-customGray">
          Descripción:{" "}
          <span className="font-normal text-black">{report?.description}</span>
        </p>
        <div className="flex w-full justify-between sm:justify-evenly pt-10">
          <button
            className="bg-blue-500 px-2 rounded text-white hover:bg-blue-800 sm:min-w-24 flex 
          items-center justify-center font-semibold"
            onClick={hanbdleEdit}
          >
            Editar
            <PencilIcon className="h-4 ps-2" />
          </button>
          <button className="bg-green-500 px-2 rounded text-white hover:bg-green-800 sm:min-w-24 flex items-center justify-center font-semibold">
            Procesar
            <CheckBadgeIcon className="h-4 ps-2" />
          </button>
          <button
            className="bg-customRed px-2 rounded text-white hover:bg-red-800 sm:min-w-24 flex items-center justify-center 
          font-semibold"
            onClick={handleRemove}
          >
            Eliminar
            <TrashIcon className="h-4 ps-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ViewReport;
