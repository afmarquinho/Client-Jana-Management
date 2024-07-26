import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const WorkforceMaterialSummary = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const totalWf = tender.workforce.reduce((total, item) => {
    return total + item.profitAmount;
  }, 0);
 

  const totalMt = tender.materials.reduce((total, item) => {
    return total + item.profitAmount;
  }, 0);

 
  

  return (
    <table className="my-5 divide-y divide-gray-400">
      <tbody className="bg-white divide-y divide-gray-400">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-gray-200 border-r border-r-gray-400">
            Costo Total de Mano de Obra
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-200">
            {totalWf.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-gray-100 border-r border-r-gray-400">
            Costo TotaL Materiales
          </th>
          <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-100">
            {totalMt.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-gray-200 border-r border-r-gray-400">
            TOTAL MANO DE OBRA + MATERIALES
          </th>
          <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-200">
            {(totalMt + totalWf).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default WorkforceMaterialSummary;
