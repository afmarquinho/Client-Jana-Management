import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Tender } from "../../types/types";
import { Link } from "react-router-dom";
import { formatServerDate } from "../../helpers/helpers";
import { tenderToEdit } from "../../redux/slices/tenderSlice";

const AllTenders = () => {
  const dispatch = useDispatch();
  const tenders = useSelector((state: RootState) => state.tender.tenders);

  const handleViewReport = () => {
    console.log(tenders);
  };
  const handleEditTender = (tender: Tender) => {
    dispatch(tenderToEdit(tender));
  };

  return (
    <table className="w-full max-w-full mx-auto">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tenders.map((tender: Tender) => (
          <tr key={tender.id}>
            <td>
              <div className="bg-white p-4 mb-4 flex justify-between items-center">
                <div className="">
                  <h3 className="text:sm sm:text-2xl">{tender.name}</h3>
                  <p className="text-xs sm:text-sm text-red-400 font-semibold">
                    {tender.customerName}
                  </p>
                  <p className="text-xs sm:text-sm italic">
                    Fecha:{" "}
                    <span className="font-bold">
                      {tender.date && formatServerDate(tender.date)}
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm italic">
                    Estado:{" "}
                    <span
                      className={`font-bold ${
                        tender.status === "draft"
                          ? "text-orange-600"
                          : tender.status === "review"
                          ? "text-blue-700"
                          : tender.status === "approved"
                          ? "text-green-600"
                          : tender.status === "rejected"
                          ? "text-red-700"
                          : "text-teal-700"
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
                    to={`/tender-to-process/${tender.id}`}
                    className="bg-teal-500 py-1 px-4 text-white hover:bg-yellow-600 text-sm text-center border-4 border-teal-400"
                    onClick={() => handleViewReport()}
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
