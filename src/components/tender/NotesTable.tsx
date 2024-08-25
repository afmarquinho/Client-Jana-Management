import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ChildInputProps = {
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setNoteEdit: React.Dispatch<React.SetStateAction<string>>;
  handleDelete: (index: number) => void;
};

const NotesTable: React.FC<ChildInputProps> = ({
  setIndex,
  setNoteEdit,
  handleDelete,
}) => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const onEdit = (i:number, note:string) => {
    setIndex(i)
    setNoteEdit(note)
  };
  

  return (
    <>
      <h2 className="italic font-bold mt-5">Resumen Observaciones</h2>
      <table className="w-full divide-y divide-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap w-4/5">
              Nota
            </th>

            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-400">
        {!tender ? <tr>No hay notas para mostrar</tr> : 
        tender.notes.map(( note, i) => (
          <tr key={i}>
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-white text-center">
              {i + 1}
            </td>
            <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify w-4/5">
              {note}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm  text-gray-900 bg-white text-center">
            <button
                  className="font-semibold"
                  onClick={() => onEdit(i, note)}
                >
                  Editar
                </button>
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm  text-gray-900 bg-white text-center">
            <button
                  className="text-red-500 font-semibold"
                  onClick={() => handleDelete(i)}
                >
                  Eliminar
                </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};
export default NotesTable;
