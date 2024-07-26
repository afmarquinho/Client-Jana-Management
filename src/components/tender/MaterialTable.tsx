import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SupplyType } from "../../types/types";

//TODO: AGREGAR UN BOTON PARA LIMPIAR EL FORMULARIO SI TE ARREPIENTES DE EDITAR
//TODO: AGREGAR BOTON Y RUTA PARA GASTOS LOGISTICOS Y OTRO GASTOS
//TODO:RESUMEN EL VISTA DEL DESCRIPCIONES PARA QUE EL USURIO PUEDE HACER LA DESCRIPCION MAS FACIL

type ChildInputProps = {
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setMtEdit: React.Dispatch<React.SetStateAction<SupplyType>>;
  handleDelete: (index: number) => void;
};

const MaterialTable: React.FC<ChildInputProps> = ({
  setIndex,
  setMtEdit,
  handleDelete,
}) => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const onEdit = (index: number, mt: SupplyType) => {
    setIndex(index);
    setMtEdit(mt);
  };

  const totalSum = tender.material.reduce(
    (acc: number, desc) => acc + desc.profitAmount,
    0
  );
  const totalCostMaterial = tender.material.reduce((total, item) => {
    return total + item.totalCost;
  }, 0);

  const totalMargin = tender.material.reduce((total, item) => {
    return total + (item.totalCost* (item.profit / 100));
  }, 0);

  return (
    <>
       <h2 className="italic font-bold mt-5">Resumen Materiales</h2>
      <table className="w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="ps-1 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Material
            </th>
            <th className=" px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Unidad
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Cantidad
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Costo Unitario
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Costo Total
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
          {tender.material.map((item: SupplyType, index: number) => (
            <tr key={index} className="bg-white">
              <td className="ps-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                {index + 1}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.material}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.unit}
              </td>
              <td className="w-10 px-2 py-4 whitespace-normal text-sm text-gray-900 text-center">
                {item.quantity}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.unitCost}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.totalCost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
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
                Total Materiales
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {tender.material.length}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border-r border-r-gray-400">
                Costo de Materiales (CM)
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold">
                {totalCostMaterial.toLocaleString("en-US", {
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
                {((totalMargin /totalCostMaterial) * 100).toFixed(2)} % 
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
                Costo TotaL Materiales = CM + MCT
              </th>
              <td className="px-4 whitespace-normal text-sm text-gray-900 text-right font-semibold bg-gray-200">
                 {(totalMargin + totalCostMaterial).toLocaleString("en-US", {
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
          Total Materiales:{" "}
          {totalSum.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h3>
        <small className="italic">*Valores en COP</small>
      </div>
    </>
  );
};
export default MaterialTable;
