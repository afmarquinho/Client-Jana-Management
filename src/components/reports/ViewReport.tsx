import { useDispatch, useSelector } from "react-redux";
import {
  activateNewReport,
  deactReport,
  removeItem,
  setReport,
} from "../../redux/tenders/visitReportSlice";
import { RootState } from "../../redux/store";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { VisitReportApi } from "../../types/types";

const ViewReport = () => {
  const dispatch = useDispatch();
  const reportObject = useSelector(
    (state: RootState) => state.visitReport.viewReport.reportObject
  );
  

  if (!reportObject) {
    return <div>No report available</div>;
  }

  let formattedVisitDate = 'Invalid Date';
  let formattedDueDate = 'Invalid Date';
  try {
    const visitDate = new Date(reportObject.visitDate);
    const dueDate = new Date(reportObject.dueDate);
    formattedVisitDate = visitDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
    formattedDueDate = dueDate.toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });
  } catch (error) {
    console.error("Error formatting date:", error);
  }


  // Assuming 'report' won't be null
  const validReport: VisitReportApi = reportObject as VisitReportApi;

  const onClose = () => {
    
    dispatch(deactReport());

  };
  const handleRemove = () => {
    dispatch(deactReport());
    dispatch(removeItem(validReport));
  };

  const act: boolean = true;
  const hanbdleEdit = () => {
    dispatch(setReport(validReport));
    dispatch(deactReport());
    dispatch(activateNewReport(act));
  };

  return (
    <div className="bg-white p-6 md:p-14 w-full max-w-[40rem] mx-auto text-sm md:text-base space-y-2">
      <div className="flex justify-between mb-2 sm:mb-6">
        <h2 className="text-black font-bold uppercase text-md sm:text-xl">
          Resúmen de <span className="text-customRed">Informe de Vista</span>
        </h2>
        <button
          className="bg-cyan-800 px-1 rounded text-white hover:bg-orange-800 sm:min-w-24 flex items-center justify-center font-normal text-xs sm:text-sm"
          onClick={onClose}
        >
          Cerrar
          <XMarkIcon className="h-5 ps-1" />
        </button>
      </div>
      <p className="font-bold text-customGray uppercase">
        Nombre del Proyecto:{" "}
        <span className=" text-blue-600 capitalize">{reportObject?.name}</span>
      </p>
      <p className="font-bold text-customGray uppercase">
        Fecha de entrega:{" "}
        <span className="font-semibold text-black normal-case">
          {formattedDueDate }
        </span>
      </p>
      <p className="font-bold text-customGray">
        Fecha de visita: <span className="font-normal text-black">{formattedVisitDate}</span>
      </p>

      <p className="font-bold text-customGray">
        Cliente:{" "}
        <span className="text-blue-600">{reportObject?.customerName}</span>
      </p>
      <p className="font-bold text-customGray">
        NIT: <span className="font-normal text-black">{reportObject?.nit}</span>
      </p>
      <p className="font-bold text-customGray">
        Ciudad:{" "}
        <span className="font-normal text-black">{reportObject?.city}</span>
      </p>
      <p className="font-bold text-customGray">
        Dirección:{" "}
        <span className="font-normal text-black">{reportObject?.address}</span>
      </p>

      <p className="font-bold text-customGray">
        Teléfono:{" "}
        <span className="font-normal text-black">
          {reportObject?.phoneNumber}
        </span>
      </p>
      <p className="font-bold text-customGray">
        Correo electrónico:{" "}
        <span className="font-normal text-black">{reportObject?.email}</span>
      </p>

      <p className="font-bold text-customGray">
        Prioridad{" "}
        <span className="font-normal text-black">
          {reportObject?.priority === "high"
            ? "Alta"
            : reportObject?.priority === "medium"
            ? "Media"
            : "Baja"}
        </span>
      </p>
      <p className="font-bold text-customGray">
        Descripción:{" "}
        <span className="font-normal text-black">
          {reportObject?.description}
        </span>
      </p>
      <div className="font-bold text-customGray">
        Mano de Obra:{" "}
        <span className="font-normal text-black">
          <ul>
            {reportObject?.workforce.map((item, index) => (
              <li key={index} className="ps-2 md:ps-7">
                {item.workforce} -- {item.workshift} Turnos
              </li>
            ))}
          </ul>
        </span>
      </div>
      <div className="font-bold text-customGray">
        Materiales:{" "}
        <span className="font-normal text-black">
          <ul>
            {reportObject?.material.map((item, index) => (
              <li key={index} className="ps-2 md:ps-7">
                {item.material} -- {item.amount} {item.unit}
              </li>
            ))}
          </ul>
        </span>
      </div>
     
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
  );
};
export default ViewReport;
