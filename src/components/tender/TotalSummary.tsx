import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TotalSummary = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  if (!tender) {
    return;
  }
  const totalWf = tender.workforces.reduce((total, item) => {
    return total + item.totalValue;
  }, 0);

  const totalMt = tender.materials.reduce((total, item) => {
    return total + item.totalValue;
  }, 0);

  const totalOtherExp = tender.otherExpenses.reduce((total, item) => {
    return total + item.totalValue;
  }, 0);

  const totalTender = totalWf + totalMt + totalOtherExp;
  const wfPercent = totalWf && totalTender ? totalWf / totalTender : 0;
  const mtfPercent = totalMt && totalTender ? totalMt / totalTender : 0;
  const otherExpPercent = totalOtherExp && totalTender ? totalOtherExp / totalTender : 0;

  return (
    <table className="my-5 divide-y divide-gray-400">
      <tbody className="bg-white divide-y divide-gray-400">
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400 min-w-64">
            Costo Total de Mano de Obra
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {totalWf.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {(wfPercent * 100).toFixed(2)}%
          </td>
        </tr>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Costo Total Materiales
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {totalMt.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {(mtfPercent * 100).toFixed(2)}%
          </td>
        </tr>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Otros Gastos y Consumibles
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {totalOtherExp.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {(otherExpPercent * 100).toFixed(2)}%
          </td>
        </tr>
        <tr className="bg-orange-100">
          <th className="px-4 py-2 text-left text-xs font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Total Cotización
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-800 text-right font-bold border border-gray-400">
            {totalTender.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default TotalSummary;
