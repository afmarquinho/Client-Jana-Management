import { useDispatch, useSelector } from "react-redux";
import {
  activateNewReport,
  deactReport,
  openCloseModal,
  setReport,
} from "../../redux/tenders/visitReportSlice";
import { AppDispatch, RootState } from "../../redux/store";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router-dom";
import ModalDeleteReport from "../../components/reports/ModalDeleteReport";
import { useEffect } from "react";
import { processReport } from "../../redux/thunks/reportThunks";

const ReportSummaryView = () => {
  const isModalOpen = useSelector(
    (state: RootState) => state.visitReport.isOpenDelteModal
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const reportObject = useSelector(
    (state: RootState) => state.visitReport.viewReport.reportObject
  );
  let formattedVisitDate = "Invalid Date";
  let formattedDueDate = "Invalid Date";

  if (!reportObject) {
    return <div>No report available</div>;
  }

  try {
    const visitDate = new Date(reportObject.visitDate);
    const dueDate = new Date(reportObject.dueDate);
    formattedVisitDate = visitDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    formattedDueDate = dueDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
  }

  const act: boolean = true;
  const handleEdit = () => {
    dispatch(setReport(reportObject));
    dispatch(deactReport());
    dispatch(activateNewReport(act));
    navigate("/edit-report");
  };

  const handleProcess = (id: number) => {
    dispatch(processReport(id));
    navigate("/dashboard-report");
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && <ModalDeleteReport id={reportObject.id} />}
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="/dashboard-report"
      >
        Volver
      </Link>
      <div className="bg-white p-5 md:p-16 w-full max-w-[40rem] mx-auto text-sm md:text-base space-y-2">
        <h2 className="text-gray-500 font-black uppercase text-md sm:text-xl text-center mb-5">
          Resúmen de <span className="text-customRed">Informe de Vista</span>
        </h2>

        <p className="font-bold text-customGray uppercase">
          Nombre del Proyecto:{" "}
          <span className=" text-blue-600 capitalize">
            {reportObject?.name}
          </span>
        </p>
        <p className="font-bold text-customGray uppercase">
          Fecha de entrega:{" "}
          <span className="font-semibold text-black normal-case">
            {formattedDueDate}
          </span>
        </p>
        <p className="font-bold text-customGray">
          Fecha de visita:{" "}
          <span className="font-normal text-black">{formattedVisitDate}</span>
        </p>

        <p className="font-bold text-customGray">
          Cliente:{" "}
          <span className="text-blue-600">{reportObject?.customerName}</span>
        </p>

        <p className="font-bold text-customGray">
          Ciudad:{" "}
          <span className="font-normal text-black">{reportObject?.city}</span>
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
          Procesado{" "}
          <span className="font-normal text-black">
            {reportObject?.processed === false ? "No" : "Sí"}
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
            className="bg-blue-500 px-2 md:px-4 py-1  rounded text-white hover:bg-blue-800 sm:min-w-24 flex 
          items-center justify-center font-semibold"
            onClick={handleEdit}
          >
            Editar
            <PencilIcon className="h-4 ps-2" />
          </button>
          <button
            className={`px-2 md:px-4 py-1 rounded text-white sm:min-w-24 flex items-center justify-center font-semibold ${
              reportObject.processed
                ? "bg-gray-700 opacity-65 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-800"
            }`}
            onClick={() => handleProcess(reportObject.id)}
            disabled={reportObject.processed}
          >
            Procesar
            <CheckBadgeIcon className="h-4 ps-2" />
          </button>
          <button
            className="bg-customRed px-2 md:px-4 py-1 rounded text-white hover:bg-red-800 sm:min-w-24 flex items-center justify-center 
          font-semibold"
            onClick={() => dispatch(openCloseModal())}
          >
            Eliminar
            <TrashIcon className="h-4 ps-2" />
          </button>
        </div>
      </div>
    </>
  );
};
export default ReportSummaryView;
