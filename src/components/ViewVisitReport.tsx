const ViewVisitReport = () => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto p-8">
      <h2 className="text-xl font-black mb-2">
        Resúmen del Informe de Vista de Obra
      </h2>

      <h3>
        <span className="font-bold">Nombre del proyecto: </span>Nombre del
        proyecto
      </h3>
      <h4>
        <span className="font-bold">Cliente: </span> Nombre del Cliente{" "}
      </h4>
      <p>
        <span className="font-bold"> NIT: </span>1245712578-2
      </p>
      <p>
        {" "}
        <span className="font-bold">Ciudad: </span> Cuidad{" "}
      </p>
      <p>
        <span className="font-bold">Dirección: </span>
        dirección
      </p>
      <p>
        <span className="font-bold">Fecha de entrega: </span>
        02/02/2024
      </p>
      <p>
        {" "}
        <span className="font-bold">Prioridad: </span>
        Alta
      </p>
      <p>
        <span className="font-bold">Descripción: </span>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore possimus
        ad, architecto natus nam explicabo nesciunt doloribus deserunt illum
        accusamus.
      </p>
      <p>
        <span className="font-bold">Mano de Obra</span>
      </p>
      <ul className="list-disc">
        <li>Mano de Obra 1 --- 1 turno</li>
        <li>Mano de Obra 1 --- 1 turno</li>
        <li>Mano de Obra 1 --- 1 turno</li>
        <li>Mano de Obra 1 --- 1 turno</li>
        <li>Mano de Obra 1 --- 1 turno</li>
      </ul>
      <p>
        <span className="font-bold">Materiales</span>
      </p>
      <ul className="list-disc">
        <li>Material 1--- 10 Kg</li>
        <li>Material 2--- 1 L</li>
        <li>Material 3--- 1 Unid</li>
      </ul>

      <div className="flex justify-between py-2">
        <button className="font-bold">Editar</button>
        <button
          className="p-2 bg-gradient-to-b from-green-500 to-green-600
            rounded-md shadow-gray-400 shadow-md text-xs text-white"
        >
          Procesar
        </button>
        <button
          className="p-2 bg-gradient-to-b from-red-600 to-red-700
            rounded-md shadow-gray-400 shadow-md text-xs text-white"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ViewVisitReport;
