import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { OtherExpensesType } from "../../types/types";

type ChildInputProps = {
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setExpEdit: React.Dispatch<React.SetStateAction<OtherExpensesType>>;
  handleDelete: (index: number) => void;
  shiftType: string;
};

const OtherExpTable: React.FC<ChildInputProps> = ({
  setIndex,
  setExpEdit: setWfEdit,
  handleDelete,
  shiftType,
}) => {
  const tender = useSelector((state: RootState) => state.tender.tender);
  const filteredExpArray = !tender
    ? []
    : tender.otherExpenses.filter((item: OtherExpensesType) => {
        return item.shiftType === shiftType;
      });

  const onEdit = (selectedItem: OtherExpensesType) => {
    if (!tender) {
      return;
    }
    const originalIndex = tender.otherExpenses.findIndex(
      (item) => item === selectedItem
    );
    setIndex(originalIndex);
    setWfEdit(selectedItem);
  };

  const onDelete = (selectedItem: OtherExpensesType) => {
    if (!tender) {
      return;
    }
    const originalIndex = tender.otherExpenses.findIndex(
      (item) => item === selectedItem
    );
    handleDelete(originalIndex);
  };

  return (
    <div className="my-5">
      <table className="w-full divide-y divide-gray-400 table-auto">
        <caption className="caption-top font-semibold italic">
          {shiftType === "preparation"
            ? "Prealistamiento"
            : shiftType === "day"
            ? "Turno día"
            : "Turno Noche"}
        </caption>
        <thead
          className={`${
            shiftType === "preparation"
              ? "bg-yellow-100"
              : shiftType === "day"
              ? "bg-indigo-100"
              : "bg-red-100"
          }`}
        >
          <tr>
            <th className="ps-1 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Descripción
            </th>
            <th className=" px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Turno
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Unidad
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Cantidad
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Vr. Unitario
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Vr. Parcial
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Margen (%)
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              MCT
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Total MO
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center"></th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-400">
          {filteredExpArray.map((item: OtherExpensesType, index: number) => (
            <tr key={index} className="bg-white">
              <td className="ps-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                {index + 1}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center ">
                {item.description}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.shiftType === "day"
                  ? "Día"
                  : item.shiftType === "night"
                  ? "Noche"
                  : "Prealistamiento"}
              </td>
              <td className=" px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.unit}
              </td>
              <td className=" px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.amount}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center ">
                {item.unitCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900  text-center">
                {item.partialCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center ">
                {item.profit}%
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {item.profitAmount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {item.totalValue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold" onClick={() => onEdit(item)}>
                  Editar
                </button>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => onDelete(item)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-200">
            <td
              className="px-5 py-4 text-right whitespace-nowrap text-sm font-semibold text-gray-900"
              colSpan={9}
            >
              Total
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-semibold">
              {filteredExpArray
                .reduce((total, item) => total + item.totalValue, 0)
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center"></td>
            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default OtherExpTable;
