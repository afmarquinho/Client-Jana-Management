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

  const onEdit = (index: number, note: string) => {
    setIndex(index);
    setNoteEdit(note);
  };

  return (
    <table className="w-full divide-y divide-gray-400">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
            Item
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
            Observación{" "}
          </th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-400">
        {tender.notes.map((note, index) => (
          <tr key={index}>
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
              {index + 1}
            </td>
            <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
              {note}
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              <button
                className="font-semibold"
                onClick={() => onEdit(index, note)}
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
  );
};
export default NotesTable;

// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   1
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   Todos los materiales y consumibles son por cuenta de Vmtermocalderas
//   S.A.S
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   2
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   Los escombros y materiales sobrantes los ubicara VMTERMOCALDERAS
//   S.A.S en un lugar definido por el cliente a una distancia no mayor a
//   50 mts del sitio de trabajo.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   3
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   Es por cuenta del contratante disponer de tomas de energía eléctrica
//   a 110 V, 220 V y 440 V, servicios sanitarios, aire comprimido mínimo
//   80 psig y agua en un radio de diez (10) metros del sitio de trabajo.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   4
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   El contratante debe proveer la información técnica necesaria para
//   ejecutar los trabajos: planos de fabricación, planos de montaje,
//   parámetros técnicos etc.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   5
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   Trabajos diferentes a los especificados serán considerados como
//   adicionales.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   6
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   VMTERMOCALDERAS S.A.S garantiza los trabajos realizados teniendo en
//   cuenta que el equipo haya sido trabajado en condiciones normales de
//   operación y los materiales suministrados por el contratante sean
//   certificados.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="text-red-500 font-semibold">Eliminar</button>
// </td>
// </tr>
// <tr>
// <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
//   7
// </td>
// <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
//   VMTERMOCALDERAS S.A.S no será responsable en retrasos resultantes de
//   causas de fuerza mayor o caso fortuito, entre otras, huelgas en su
//   planta, actos de cualquier autoridad gubernamental, incendios,
//   motín, asonada, inundaciones, rotura de maquinaria esencial,
//   accidentes, embargos, dificultad en el transporte o en la
//   consecución de materiales, en caso de presentarse cualquiera de
//   estas situaciones tendremos derecho a un tiempo el cual será
//   acordado con el contratante.
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button className="font-semibold">Editar</button>
// </td>
// <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
//   <button
//     className="text-red-500 font-semibold"
//     onClick={handleDelete(index)}
//   >
//     Eliminar
//   </button>
// </td>
// </tr>
