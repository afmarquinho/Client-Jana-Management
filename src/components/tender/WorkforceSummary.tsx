import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const WorkforceSummary = () => {
    const tender = useSelector((state: RootState) => state.tender.tender);

    const totalSum = tender.workforce.reduce(
        (acc:number, desc) => acc + desc.totalValue,
        0
      );
    

    const totalCostWorkforce = tender.workforce.reduce((total, item) => {
        return total + item.workers * item.shiftCount * item.rate;
      }, 0);
      const totalMargin = tender.workforce.reduce((total, item) => {
        return (
          total + item.workers * item.shiftCount* item.rate * (item.profit / 100)
        );
      }, 0);

  return (
    <>
    <div className="w-full flex justify-end">
        <table className="mt-5 divide-y divide-gray-400">
          <tbody className="bg-white divide-y divide-gray-400">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Total
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {tender.workforce.length}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Personal
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {tender.workforce.reduce((acc, desc) => acc + desc.workers, 0)}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Costo de Mano de Obra Directa (CMD)
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {totalCostWorkforce.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Margen de Contribución(%)
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {((totalMargin / totalCostWorkforce) * 100).toFixed(2)} %
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-green-100 border-r border-r-gray-400">
                Margen de Contribución Total (MCT)
              </th>
              <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-green-100">
                {totalMargin.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-gray-200 border-r border-r-gray-400">
                Costo TotaL Mano de Obra = CMD + MCT
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-200">
                {(totalMargin + totalCostWorkforce).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col items-end w-full mt-5">
        <h3 className="text-xl font-bold">
          Total Mano de Obra:{" "}
          {totalSum.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
        <small className="italic">*Valores en COP</small>
      </div>
      </>
  )
}
export default WorkforceSummary