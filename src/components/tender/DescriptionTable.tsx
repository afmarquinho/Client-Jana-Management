import { useSelector } from "react-redux";
// import { Description, Tender } from "../../types/types";
import { RootState } from "../../redux/store";

// type ChildInputProps = {
//   tenderInputs: Tender;
//   setIndex: (index: number) => void;
//   setDescEdit: (descEdit: Description) => void;
// };


const DescriptionTable: React.FC<ChildInputProps> = ({
  setIndex,
  setDescEdit,
  handleDelete,

  const tender = useSelector((state: RootState) => state.tender.tender);

  const totalSum = tender.description?.reduce(
    (acc, desc) => acc + desc.totalValue,
    0
  );

  // const onEdit = (index: number, desc: Description) => {
  //   setIndex(index);
  //   setDescEdit(desc);
  // };

  return (
    <>
      <h2 className="italic font-bold mt-5">Resumen Descripciones</h2>
      <table className="min-w-full divide-y divide-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap w-1/3">
              Descripción
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Unidad
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Cantidad
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Vr Unitario
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Vr Total
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-400">
          {tender.description.map((desc, index) => (
            <tr key={index}>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                {desc.item}
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify w-1/3">
                {desc.description}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {desc.unit}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {desc.quantity}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {desc.unitValue}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                {desc.totalValue}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button
                  className="font-semibold"
                  // onClick={() => onEdit(index, desc)}
                >
                  Editar
                </button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">

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
      <div className="flex flex-col items-end w-full mt-5">
        <h3 className="text-xl font-bold">
          Total Cotización:{" "}
          {totalSum?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })} 
        </h3>
        <small className="italic">*Valor en cop</small>
      </div>
    </>
  );
};
export default DescriptionTable;
