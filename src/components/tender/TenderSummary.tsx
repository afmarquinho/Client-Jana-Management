import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TenderSummary = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const materialMargin = tender
    ? (tender.summary.materials / tender.summary.total) * 100
    : 0;
  const preparationMargin = tender
    ? (tender.summary.preparation / tender.summary.total) * 100
    : 0;
  const dayMargin = tender
    ? (tender.summary.day / tender.summary.total) * 100
    : 0;
  const nightMargin = tender
    ? (tender.summary.night / tender.summary.total) * 100
    : 0;

  return (
    <table className="my-5 divide-y divide-gray-400">
      <tbody className="bg-white divide-y divide-gray-400">
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400 min-w-60">
            Total Materiales
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {tender?.summary.materials.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}{" "}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {materialMargin ? materialMargin.toFixed(2) : 0}%
          </td>
        </tr>
        <tr className="bg-white">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Prealistamiento
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {tender?.summary.preparation.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {preparationMargin
              ? preparationMargin.toFixed(2)
              : 0}
            %
          </td>
        </tr>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Turno día
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {tender?.summary.day.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {dayMargin ? dayMargin.toFixed(2) : 0}%
          </td>
        </tr>
        <tr className="bg-white">
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Turno Noche
          </th>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {tender?.summary.night.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="px-2 whitespace-normal text-sm text-gray-900 text-right font-semibold border border-gray-400">
            {nightMargin? nightMargin.toFixed(2) : 0}%
          </td>
        </tr>
        <tr className="bg-orange-100">
          <th className="px-4 py-2 text-left text-xs font-bold text-gray-800 uppercase tracking-wider whitespace-nowrap border border-gray-400">
            Total Cotización
          </th>
          <td className="px-2 whitespace-normal text-sm font-bold text-gray-800 text-right border border-gray-400">
            {tender?.summary.total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default TenderSummary;
