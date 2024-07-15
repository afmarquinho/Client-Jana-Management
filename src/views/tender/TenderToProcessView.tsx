import { useEffect } from "react";
import { getReportsApi } from "../../redux/thunks/reportThunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { VisitReportApi } from "../../types/types";
//TODO: SOLUCIONAR LA FECHA

const TenderToProcessView = () => {
  const dispatch: AppDispatch = useDispatch();
  const report = useSelector((state: RootState) => state.visitReport.report);

  useEffect(() => {
    dispatch(getReportsApi());
  }, []);

  const toProcessArray = report.filter((report: VisitReportApi) => {
    return report.processed === true;
  });

  return (
    <>
      <h2 className="my-5 text-left text-xl uppercase font-black text-gray-500">
        Informe de Visita <span className="text-blue-800">pendientes</span> por Procesar{" "}
      </h2>
      <table className="w-11/12 max-w-[700px]">
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {toProcessArray.map((report: VisitReportApi) => (
            <tr key={report.id}>
              <td>
                <div className="bg-white p-4 mb-4 flex justify-between items-center">
                  <div className="">
                    <h3 className="text-lg font-bold">{report.name}</h3>
                    <p className="text-sm text-red-500 font-semibold">
                      {report.customerName}
                    </p>
                    <p className="text-sm italic">
                      Fecha de Entrega: {report.dueDate}
                    </p>
                  </div>
                  <button className="text-sm bg-gradient-to-b from-blue-800 to-blue-950 shadow rounded px-2 py-1 text-white  hover:from-emerald-700 hover:to-emerald-800">
                    Generar Cotización
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TenderToProcessView;
