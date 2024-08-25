import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const OtherExpSummary = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const totalprofit = !tender
    ? 0
    : tender.otherExpenses.reduce((total, item) => {
        return total + item.profitAmount;
      }, 0) /
      tender.otherExpenses.reduce(
        (total: number, item) => total + item.partialCost,
        0
      );

  return (
    <>
      <div className="w-full flex justify-end">
        <table className="mt-5 divide-y divide-gray-400">
          <tbody className="bg-white divide-y divide-gray-400">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Total Otros Gastos y Consumibles
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {!tender ? 0 : tender.otherExpenses.length}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Valor Parcial
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {!tender ? 0 :
                tender.otherExpenses
                  .reduce((total, item) => {
                    return total + item.partialCost;
                  }, 0)
                  .toLocaleString("en-US", {
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
                {(totalprofit * 100).toFixed(2)} %
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-green-100 border-r border-r-gray-400">
                Margen de Contribución Total (MCT)
              </th>
              <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-green-100">
                {!tender ? 0 :
                tender.otherExpenses
                  .reduce((total, item) => {
                    return total + item.profitAmount;
                  }, 0)
                  .toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap bg-gray-200 border-r border-r-gray-400">
                TotaL OTROS GASTOS Y CONSUMIBLES
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-200">
                {!tender ? 0 :
                tender.otherExpenses
                  .reduce((total: number, value) => total + value.totalValue, 0)
                  .toLocaleString("en-US", {
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
          Total Otros Gastos y Consumibles:{" "}
          {!tender ? 0 :
          tender.otherExpenses
            .reduce((total: number, value) => total + value.totalValue, 0)
            .toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
        </h3>
        <small className="italic">*Valores en COP</small>
      </div>
    </>
  );
};
export default OtherExpSummary;
