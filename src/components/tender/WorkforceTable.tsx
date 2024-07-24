import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { LaborType } from "../../types/types";

type ChildInputProps = {
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setWfEdit: React.Dispatch<React.SetStateAction<LaborType>>;
  handleDelete: (index: number) => void;
};

const WorkforceTable: React.FC<ChildInputProps> = ({
  setIndex,
  setWfEdit,
  handleDelete,
}) => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  //* MATH FUNCTIONS
  const totalSum = tender.workforce.reduce(
    (acc:number, desc) => acc + desc.profitAmount,
    0
  );
  const totalCostWorkforce = tender.workforce.reduce((total, item) => {
    return total + item.workers * item.workshift * item.rate;
  }, 0);
  const totalMargin = tender.workforce.reduce((total, item) => {
    return (
      total + item.workers * item.workshift * item.rate * (item.profit / 100)
    );
  }, 0);

  const onEdit = (index: number, item: LaborType) => {
    setIndex(index);
    setWfEdit(item);
  };

  return (
    <div>
      <h2 className="italic font-bold mt-5">Mano de Obra</h2>
      <table className="w-full divide-y divide-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="ps-1 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Mano de Obra
            </th>
            <th className=" px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Cantidad
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Turnos
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Tarifa
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              CMD
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Margen (%)
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              MC
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center"></th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-400">
          {tender.workforce.map((item: LaborType, index: number) => (
            <tr key={index} className="bg-white">
              <td className="ps-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                {index + 1}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.role}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.workers}
              </td>
              <td className="w-10 px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.workshift}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.rate.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 w-1/3 text-center">
                {(item.rate * item.workers * item.workshift).toLocaleString(
                  "en-US",
                  {
                    style: "currency",
                    currency: "USD",
                  }
                )}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.profit}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {item.profitAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button
                  className="font-semibold"
                  onClick={() => onEdit(index, item)}
                >
                  Editar
                </button>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => handleDelete(index)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-end">
        <table className="mt-5 divide-y divide-gray-400">
          <tbody className="bg-white divide-y divide-gray-400">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Total Mano de Obra
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
    </div>
  );
};
export default WorkforceTable;
