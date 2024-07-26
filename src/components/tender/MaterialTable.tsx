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
              Valor Comercial (CM)
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Valor Parcial
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              Margen (%)
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              MCT
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center">
              TOTAL MAT.
            </th>
            <th className="px-2 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap text-center"></th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-400">
          {tender.materials.map((item: SupplyType, index: number) => (
            <tr key={index} className="bg-white">
              <td className="ps-1 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                {index + 1}
              </td>
              <td className="px-2 py-4 whitespace-normal text-sm text-gray-900 text-center w-1/3">
                {item.description}
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
                {(item.partialCost).toLocaleString("en-US", {
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
                {item.totalValue.toLocaleString("en-US", {
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
           <tr className="bg-gray-200">
            <td
              className="px-5 py-4 text-right whitespace-nowrap text-sm font-semibold text-gray-900"
              colSpan={8}
            >
              Total
            </td>
            <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-900 text-center font-semibold">
              {tender.materials
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
    </>
  );
};
export default MaterialTable;
