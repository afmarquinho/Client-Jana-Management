const VisitReportForm = () => {
  return (
    <form
      action="
        "
      className="w-full md:w-1/2 lg:w-1/3 space-y-4"
    >
      <h2 className="text-center font-bold">
        Ingresa los datos del informe de visita a obra
      </h2>
      <input
        type="text"
        placeholder="Nombre"
        className="border-customRed500 border-2 rounded-md px-2 py-1 w-full outline-none"
      />
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Cliente"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2 outline-none"
        />
        <input
          type="text"
          placeholder="Cuidad"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2 outline-none"
        />
      </div>
      <textarea
        name=""
        id=""
        placeholder="Descripción"
        className="border-customRed500 border-2 rounded-md px-2 py-1 w-full h-20 resize-none outline-none"
      ></textarea>

      <button
        className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
        type="button"
      >
        Agregar Mano de Obra
      </button>
      <div className="my-3 flex justify-start flex-wrap">
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Operarios - 5 turnos
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Operarios - 5 turnos
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Operarios - 5 turnos
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Operarios - 5 turnos
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
      </div>

      <button
        className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
        type="button"
      >
        Agregar Materiales
      </button>
      <div className="my-3 flex justify-start flex-wrap">
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Material 1 - 5 Kg
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Material 2 - 5 L
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
        <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
          Material 3 - 10 unid{" "}
          <button className="pl-5 text-customRed500 font-black">X</button>
        </span>
      </div>

      <label htmlFor="prioridad" className="me-2">
        Prioridad:
      </label>
      <select name="prioridad" id="">
        <option value="">--Seleccione-- </option>
        <option value="">Alta</option>
        <option value="">Medio</option>
        <option value="">Baja</option>
      </select>

      <input
        type="submit"
        className="w-full p-2 bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer uppercase text-xs"
        value="Guardar"
      />
    </form>
  );
};

export default VisitReportForm;