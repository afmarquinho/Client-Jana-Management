import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { fetchTenders } from "../../redux/slices/tenderSlice";
import AllTenders from "../../components/tender/AllTenders";
import HourglassSpinner from "../../components/HourglassSpinner";
import { useEffect } from "react";

const DashboardTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tenders = useSelector((state: RootState) => state.tender.tenders);
  const loading = useSelector((state: RootState) => state.tender.loading);
  const error = useSelector((state: RootState) => state.tender.error);

  useEffect(() => {
    if (tenders.length <= 0) {
      dispatch(fetchTenders());
    }
  
  }, []);

  return (
    <>
      <h2 className="my-5 text-left text-xl uppercase font-black text-gray-500">
        Informe de Visita <span className="text-blue-800">pendientes</span> por
        Procesar
      </h2>
      {loading ? (
        <HourglassSpinner />
      ) : error ? (
        <div>Error: {error}</div>
      ) : tenders.length === 0 ? (
        <div>No Hay Reporte para Mostrar</div>
      ) : (
        //<div>Hay Reportes</div>
        <AllTenders />
      )}
    </>
  );
};

export default DashboardTenderView;
