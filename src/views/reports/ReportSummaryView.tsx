import { useDispatch, useSelector } from "react-redux";
import {
  cleanViewSummaryReport,
  errorMessage,
  openCloseModal,
  setReport,
} from "../../redux/slices/visitReportSlice";
import { AppDispatch, RootState } from "../../redux/store";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router-dom";
import ModalDeleteReport from "../../components/reports/ModalDeleteReport";
import { useEffect} from "react";
import { processReport } from "../../redux/thunks/reportThunks";
import { formatServerDate, isDateValid } from "../../helpers/helpers";
import { VisitReportApi } from "../../types/types";
import { createTenderService } from "../../services/tenderServices";

//TODO: quitar la columnda de cerrado, ya no es necesario

const ReportSummaryView = () => {
  const isModalOpen = useSelector(
    (state: RootState) => state.visitReport.isOpenDelteModal
  );
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const viewReport = useSelector(
    (state: RootState) => state.visitReport.viewReport
  );
  

  if (!viewReport) {
    return <div>No report available</div>;
  }

  const handleEdit = () => {
    dispatch(setReport(viewReport));
    dispatch(cleanViewSummaryReport());
    navigate("/report-form");
  };

  const handleProcess = async (report: VisitReportApi) => {
    if (!isDateValid(formatServerDate(report.dueDate))) {
      alert(
        "No puedes procesar un Informe de Visita de Obra si este tiene fecha de entrega vencida"
      );
      return;
    } else {
      await dispatch(
        processReport(report.id, formatServerDate(report.dueDate))
      );
      navigate(-1);
    
      await createTenderService({
        reportId: report.id,
        createdBy: "John Doe",
      });
      return;
    }

  };

  const onBack = () => {
    dispatch(errorMessage(""));
    dispatch(cleanViewSummaryReport());
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
      {isModalOpen && <ModalDeleteReport id={viewReport.id} />}
      <Link
        className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
       hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
        to="/dashboard-report"
        onClick={onBack}
      >
        Volver
      </Link>

      <h2 className="text-gray-500 font-black uppercase text-md sm:text-xl text-center mb-5">
        Resúmen de <span className="text-customRed">Informe de Vista</span>
      </h2>

      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
        <tbody className="italic">
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Nombre del Proyecto
            </th>
            <td className="text-left p-4 w-/3 not-italic font-semibold">
              {viewReport.name}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Fecha de Visita
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {formatServerDate(viewReport.visitDate)}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Fecha de Entrega
            </th>
            <td className="text-left p-4 w-/3 not-italic font-semibold">
              {formatServerDate(viewReport.dueDate)}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Cliente
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.customerName}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Ciudad
            </th>
            <td className="text-left p-4 w-/3 not-italic">{viewReport.customerCity}</td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Nombre de Contacto
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.contactName}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Teléfono
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.phoneNumber}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Correo Eléctronico
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.email}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Prioridad
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.priority === "high"
                ? "Alta"
                : viewReport.priority === "medium"
                ? "Media"
                : "Baja"}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Descripción
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.description}
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Mano de Obra
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              <ol className="list-decimal ps-4">
                {viewReport?.workforce.map((item, index) => (
                  <li key={index} className="">
                    {item.workforce} -- {item.workshift} Turnos
                  </li>
                ))}
              </ol>
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Materiales
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              <ol className="list-decimal ps-4">
                {viewReport?.material.map((item, index) => (
                  <li key={index} className="">
                    {item.material} -- {item.quantity} {item.unit}
                  </li>
                ))}
              </ol>
            </td>
          </tr>
          <tr className="border-b last:border-b-0">
            <th className="text-left p-4 text-gray-600 w-1/3 border-e">
              Reporte Procesado
            </th>
            <td className="text-left p-4 w-/3 not-italic">
              {viewReport.processed ? "Sí" : "No"}
            </td>
          </tr>
        </tbody>
      </table>

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
            viewReport.processed
              ? "bg-gray-700 opacity-65 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-800"
          }`}
          onClick={() => handleProcess(viewReport)}
          disabled={viewReport.processed}
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
    </>
  );
};
export default ReportSummaryView;
