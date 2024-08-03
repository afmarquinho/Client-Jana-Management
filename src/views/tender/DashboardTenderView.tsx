import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import AllTenders from "../../components/tender/AllTenders";
import HourglassSpinner from "../../components/HourglassSpinner";
import { useEffect, useState } from "react";
import { fetchTenders } from "../../redux/thunks/tenderThunks";

const DashboardTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();

  const tenders = useSelector((state: RootState) => state.tender.tenders);
  const loading = useSelector((state: RootState) => state.tender.loading);
  const error = useSelector((state: RootState) => state.tender.error);

  const [fetchExecuted, setFetchExecuted] = useState<boolean>(false)


  useEffect(() => {
    if (!fetchExecuted && tenders.length === 0) {
      dispatch(fetchTenders());
      setFetchExecuted(true)
    }
  
  }, [dispatch, tenders, fetchExecuted]);

  return (
    <>
      <h2 className="my-5 text-left text-xl uppercase font-black text-gray-500">
        Informe de Visita <span className="text-blue-800">pendientes</span> por
        Procesar
      </h2>
      {loading ? (
        <HourglassSpinner />
      ) : error? (
        <div> {error}</div>
      ) : tenders.length === 0 ? (
        <p className="font-semibold">
              No hay <span className="text-blue-500 font-bold">Cotizaciones</span> para mostrar. <br />{" "}
            </p>
      ) : (
        //<div>Hay Reportes</div>
        <AllTenders />
      )}
    </>
  );
};

export default DashboardTenderView;
