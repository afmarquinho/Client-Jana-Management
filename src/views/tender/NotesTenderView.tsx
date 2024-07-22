import TenderNav from "../../components/tender/TenderNav";

const NotesTenderView = () => {
  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div>
        <form action="">
          <h2 className="text-center font-black text-gray-500 uppercase text-base md:text-xl">
            Notas <span className="text-red-500">Adicionales</span>
          </h2>
          <div className="flex gap-5">
            <label htmlFor="" className="font-semibold">
              Observación
            </label>
            <textarea className="w-full h-32 bg-gray-200 outline-none px-2 resize-none" />
          </div>
          <div className="w-full flex justify-center my-5">
            <button className="bg-gradient-to-b from-violet-700 to-violet-900 hover:from-indigo-800 hover:to-indigo-950 rounded-sm font-semibold text-white px-5 py-1 text-sm">
              Agregar
            </button>
          </div>
        </form>

        <table className="min-w-full divide-y divide-gray-400">
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
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                1
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                Todos los materiales y consumibles son por cuenta de
                Vmtermocalderas S.A.S
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                2
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                Los escombros y materiales sobrantes los ubicara VMTERMOCALDERAS
                S.A.S en un lugar definido por el cliente a una distancia no
                mayor a 50 mts del sitio de trabajo.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                3
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                Es por cuenta del contratante disponer de tomas de energía
                eléctrica a 110 V, 220 V y 440 V, servicios sanitarios, aire
                comprimido mínimo 80 psig y agua en un radio de diez (10) metros
                del sitio de trabajo.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                4
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                El contratante debe proveer la información técnica necesaria
                para ejecutar los trabajos: planos de fabricación, planos de
                montaje, parámetros técnicos etc.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                5
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                Trabajos diferentes a los especificados serán considerados como
                adicionales.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                6
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                VMTERMOCALDERAS S.A.S garantiza los trabajos realizados teniendo
                en cuenta que el equipo haya sido trabajado en condiciones
                normales de operación y los materiales suministrados por el
                contratante sean certificados.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
                7
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                VMTERMOCALDERAS S.A.S no será responsable en retrasos
                resultantes de causas de fuerza mayor o caso fortuito, entre
                otras, huelgas en su planta, actos de cualquier autoridad
                gubernamental, incendios, motín, asonada, inundaciones, rotura
                de maquinaria esencial, accidentes, embargos, dificultad en el
                transporte o en la consecución de materiales, en caso de
                presentarse cualquiera de estas situaciones tendremos derecho a
                un tiempo el cual será acordado con el contratante.
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="font-semibold">Editar</button>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                <button className="text-red-500 font-semibold">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NotesTenderView;
