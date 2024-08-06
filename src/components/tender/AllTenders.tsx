import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Tender } from "../../types/types";
import { Link } from "react-router-dom";
import { formatServerDate } from "../../helpers/helpers";
import { tenderToEdit } from "../../redux/slices/tenderSlice";
import { fetchGetReportById } from "../../redux/thunks/tenderThunks";
fetchGetReportById

const AllTenders = ({ tenders }: { tenders: Tender[] }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleViewReport = async (reportId: number) => {
    dispatch(fetchGetReportById(reportId));
  };
  const handleEditTender = (tender: Tender) => {
    dispatch(tenderToEdit(tender));
  };

  return (
    <table className="w-full max-w-[60rem] mx-auto">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tenders.map((tender: Tender) => (
          <tr key={tender.id}>
            <td>
              <div className="bg-white p-4 mb-4 flex justify-between items-center hover:bg-gray-200">
                <div className="">
                  <h3 className="text:sm sm:text-2xl">{tender.name}</h3>
                  <p className="text-xs sm:text-base text-red-400 font-semibold">
                    {tender.customerName}
                  </p>
                  <p className="text-xs sm:text-base italic">
                    Fecha:{" "}
                    <span className="font-bold">
                      {tender.date && formatServerDate(tender.date)}
                    </span>
                  </p>
                  <p className="text-sm sm:text-base italic">
                    Estado:{" "}
                    <span
                      className={` ${
                        tender.status === "draft"
                          ? "text-orange-600 font-medium"
                          : tender.status === "review"
                          ? "text-blue-700 font-medium"
                          : tender.status === "approved"
                          ? "bg-green-600 text-white px-2 rounded-3xl"
                          : tender.status === "rejected"
                          ? "bg-red-500 text-white px-2 rounded-3xl"
                          : "bg-fuchsia-700 text-white px-2 rounded-3xl"
                      }`}
                    >
                      {tender.status === "draft"
                        ? "En Edición"
                        : tender.status === "review"
                        ? "Revisión"
                        : tender.status === "approved"
                        ? "Aprobado"
                        : tender.status === "rejected"
                        ? "Rechazado"
                        : tender.status === "submitted"
                        ? "Enviado"
                        : "Estado desconocido"}
                    </span>
                  </p>
                </div>
                <div className="flex gap-5">
                  <Link
                    to={`/tender-report-summary/${tender.ref}`}
                    className="bg-teal-500 py-1 px-4 text-white hover:bg-teal-700 hover:border-teal-700 text-sm text-center border-4 border-teal-500"
                    onClick={() => handleViewReport(tender.reportId)}
                  >
                    Ver Informe
                  </Link>
                  <Link
                    to="/tender-editing-heading"
                    className="text-sm bg-gradient-to-b from-orange-500 to-orange-600 shadow rounded px-6 py-1 text-white  hover:from-emerald-700 hover:to-emerald-800 flex justify-center items-center"
                    onClick={() => handleEditTender(tender)}
                  >
                    Cotización
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default AllTenders;
