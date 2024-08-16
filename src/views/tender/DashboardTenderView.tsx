import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import AllTenders from "../../components/tender/AllTenders";
import HourglassSpinner from "../../components/HourglassSpinner";
import { useEffect, useState } from "react";
import { fetchGetTenders } from "../../redux/thunks/tenderThunks";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/16/solid";
import { cleanError } from "../../redux/slices/tenderSlice";

const DashboardTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tenders = useSelector((state: RootState) => state.tender.tenders);
  const loading = useSelector((state: RootState) => state.tender.loading);
  const error = useSelector((state: RootState) => state.tender.error);

  const [fetchExecuted, setFetchExecuted] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<string>("");

  useEffect(() => {
    if (!fetchExecuted && tenders.length === 0) {
      dispatch(fetchGetTenders());
      setFetchExecuted(true);
    }
    dispatch(cleanError());
  }, [dispatch, tenders, fetchExecuted]);

  const filteredTenders = tenders.filter((tender) =>
    filterStatus ? tender.status === filterStatus : true
  );

  return (
    <>
      <h2 className="my-5 text-left text-xl uppercase font-black text-gray-500">
        Informe de Visita <span className="text-blue-800">pendientes</span> por
        Procesar
      </h2>
      {loading ? (
        <HourglassSpinner />
      ) : error ? (
        <div> {error}</div>
      ) : (
        //<div>Hay Reportes</div>
        <>
          <div className="flex items-center mb-5">
            <Link
              to="/report-form"
              className="bg-blue-900 text-white flex items-center px-2 py-1 rounded hover:bg-green-700"
            >
              <PlusIcon className="h-5" /> Crear Cotización
            </Link>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="ml-4 p-2 border border-gray-300 rounded"
            >
              <option value="">Todos</option>
              <option value="draft">En Edición</option>
              <option value="review">Revisión</option>
              <option value="approved">Aprobado</option>
              <option value="rejected">Rechazado</option>
              <option value="submitted">Enviado</option>
            </select>
          </div>

          {filteredTenders.length === 0 ? (
            <p className="font-semibold">
              No hay{" "}
              <span className="text-blue-500 font-bold">Cotizaciones</span> para
              mostrar. <br />{" "}
            </p>
          ) : (
            <AllTenders tenders={filteredTenders} />
          )}
        </>
      )}
    </>
  );
};

export default DashboardTenderView;
