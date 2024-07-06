const TenderFiledForm = () => {
  return (
    <div className="w-full space-y-2">
      {/* <div className="flex flex-col">
        <label htmlFor="" className="text-end uppercase text-red-600 font-black"># Cotizazión</label>
        <p className="text-end font-bold italic">TCCT-001-24</p>
      </div> */}
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Ingeniero
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <h2 className="font-semibold w-2/12">Encabezado</h2>
        <p>
          En atención a su amable solicitud nos permitimos enviar la cotización
          correspondiente:
        </p>
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-bold uppercase text-sm italic">
          Proyecto
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Cliente
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>

      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Realizó
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Revisó
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Fecha
        </label>
        <input type="date" className="bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Tiempo de entrega
        </label>
        <input type="text" className="bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Forma de pago
        </label>
        <input type="text" className="bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Validez de la oferta
        </label>
        <input type="text" className="bg-gray-200 outline-none px-2" />
      </div>

      {/* //? ---------------------------------------------------------- */}
      {/* //? DESCRIPCION */}
      {/* //? ---------------------------------------------------------- */}
      <br />
      <hr className=" border-gray-400" />
      <small className="italic font-black">Descripción</small>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          ítem
        </label>
        <input type="text" className="w-9/12 bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Descripción
        </label>
        <textarea
          name=""
          id=""
          className="w-9/12 bg-gray-200 outline-none px-2 resize-none"
        ></textarea>
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Unidad
        </label>
        <input type="text" className="bg-gray-200 outline-none px-2" />

        <label htmlFor="" className="w-2/12 font-semibold text-end">
          Cantidad
        </label>
        <input type="number" className="bg-gray-200 outline-none px-2" />
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Vr Unitario
        </label>
        <input type="number" className="bg-gray-200 outline-none px-2" />

        <p className="w-2/12 font-semibold text-end">Vr Total</p>
        <p className="font-bold">$ 000.000,00</p>
      </div>

      <button className="bg-gradient-to-b from-violet-700 to-violet-900 hover:from-indigo-800 hover:to-indigo-950 rounded-sm font-semibold text-white px-5 py-1 text-sm">
        Agregar
      </button>

      <br />
      <br />
      <small className="italic font-black">Resumen Descripciones</small>
      <table className="min-w-full divide-y divide-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
              Item
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
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
          <tr>
            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center">
              1
            </td>
            <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi
              illo natus, voluptates incidunt eos?
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              Global
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              1
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi
              illo natus, voluptates incidunt eos?
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              Global
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              1
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
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
              2.1
            </td>
            <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut modi
              illo natus, voluptates incidunt eos?
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              Global
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              1
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
            </td>
            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
              85.500.500
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
      {/* //? --------------------------------------------- */}
      {/* //? OBSERVACIONES*/}
      {/* //? --------------------------------------------- */}
      <br />
      <hr className=" border-gray-400" />
      <small className="italic font-black">Observaciones</small>
      <div className="flex gap-5">
        <label htmlFor=""></label>
        <select name="" id="" className="outline-none">
          <option value="">--Selecccione--</option>
        </select>
      </div>
      <div className="flex gap-5">
        <label htmlFor="" className="w-2/12 font-semibold">
          Observación
        </label>
        <textarea className="w-9/12 h-32 bg-gray-200 outline-none px-2 resize-none" />
      </div>
      <button className="bg-gradient-to-b from-violet-700 to-violet-900 hover:from-indigo-800 hover:to-indigo-950 rounded-sm font-semibold text-white px-5 py-1 text-sm">
        Agregar
      </button>
      <br />
      <br />
      <small className="italic font-black">Resumen Observaciones</small>
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
              S.A.S en un lugar definido por el cliente a una distancia no mayor
              a 50 mts del sitio de trabajo.
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
              El contratante debe proveer la información técnica necesaria para
              ejecutar los trabajos: planos de fabricación, planos de montaje,
              parámetros técnicos etc.
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
              VMTERMOCALDERAS S.A.S no será responsable en retrasos resultantes
              de causas de fuerza mayor o caso fortuito, entre otras, huelgas en
              su planta, actos de cualquier autoridad gubernamental, incendios,
              motín, asonada, inundaciones, rotura de maquinaria esencial,
              accidentes, embargos, dificultad en el transporte o en la
              consecución de materiales, en caso de presentarse cualquiera de
              estas situaciones tendremos derecho a un tiempo el cual será
              acordado con el contratante.
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
  );
};
export default TenderFiledForm;
