import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  CheckBadgeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { Link, useNavigate } from "react-router-dom";
import ModalDeleteReport from "../../components/reports/ModalDeleteReport";
import { useState } from "react";
import { formatServerDate } from "../../helpers/helpers";
import HourglassSpinner from "../../components/HourglassSpinner";
import { cleanError, cleanReport } from "../../redux/slices/reportSlice";
import { VisitReportType } from "../../types/types";
import { fetchProcessReport } from "../../redux/thunks/reportThunks";
import { createTenderService } from "../../services/tenderServices";

const ReportSummaryView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const report = useSelector((state: RootState) => state.report.report);
  const loading = useSelector((state: RootState) => state.report.loading);
  const error = useSelector((state: RootState) => state.report.error);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!report) {
    return <div>No report available</div>;
  }

  const handleEdit = () => {
    navigate(`/report-form/${report.ref}`);
  };

  const onBack = () => {
    dispatch(cleanReport());
    dispatch(cleanError());
  }

  const handleProcess = async (report: VisitReportType) => {
    try {
      if (!report.id) {
        return;
      }
      
      const resultAction = await dispatch(
        fetchProcessReport({
          id: report.id,
          dueDate: formatServerDate(report.dueDate),
        })
      );
      if (fetchProcessReport.fulfilled.match(resultAction)) {
        navigate("/dashboard-report");
        alert("Informe de Visita de Obra procesado exitosamente");

        await createTenderService(report.id)
      } else {
        console.error("Error de Backend: ", resultAction.error.message);
        alert(`${resultAction.error.message}`);
      }
    } catch (error) {
      3;
      console.error("Error al procesar el informe: ", error);
      alert("No se puedo procesar el informe");
    }
  };

  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isModalOpen]);

  return (
    <div>
      {loading ? (
        <HourglassSpinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {isModalOpen && <ModalDeleteReport setIsModalOpen={setIsModalOpen} />}
          <Link
            className="w-36 mb-5 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
          hover:from-cyan-700 hover:to-cyan-800 text-xs shadow-gray-400 shadow-md text-center flex justify-center items-center"
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
                  {report.name}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Fecha de Visita
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {formatServerDate(report.visitDate)}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Fecha de Entrega
                </th>
                <td className="text-left p-4 w-/3 not-italic font-semibold">
                  {formatServerDate(report.dueDate)}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Cliente
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.customerName}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Ciudad
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.customerCity}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Nombre de Contacto
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.contactName}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Teléfono
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.phoneNumber}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Correo Eléctronico
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.email}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Prioridad
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.priority === "high"
                    ? "Alta"
                    : report.priority === "medium"
                    ? "Media"
                    : "Baja"}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Descripción
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  {report.description}
                </td>
              </tr>
              <tr className="border-b last:border-b-0">
                <th className="text-left p-4 text-gray-600 w-1/3 border-e">
                  Mano de Obra
                </th>
                <td className="text-left p-4 w-/3 not-italic">
                  <ol className="list-decimal ps-4">
                    {report?.workforces.map((item, index) => (
                      <li key={index} className="">
                        {item.role} -- {item.workshift} Turnos
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
                    {report?.materials.map((item, index) => (
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
                  {report.processed ? "Sí" : "No"}
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
                report.processed
                  ? "bg-gray-700 opacity-65 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-800"
              }`}
              onClick={() => handleProcess(report)}
              disabled={report.processed}
            >
              Procesar
              <CheckBadgeIcon className="h-4 ps-2" />
            </button>
            <button
              className="bg-customRed px-2 md:px-4 py-1 rounded text-white hover:bg-red-800 sm:min-w-24 flex items-center justify-center 
          font-semibold"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Eliminar
              <TrashIcon className="h-4 ps-2" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default ReportSummaryView;
