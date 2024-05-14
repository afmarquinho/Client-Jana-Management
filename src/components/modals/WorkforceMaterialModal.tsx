const WorkforceMaterialModal: React.FC = () => {
  return (
    <div className="fixed top-[-20px] left-0 w-screen h-screen z-50 bg-black bg-opacity-60 flex items-center justify-center m-0">
      <div className="bg-white rounded-md overflow-hidden text-xs md:text-base w-10/12 max-w-2xl">
        <h1 className="bg-green-500 p-4 text-center font-bold">
          Agregar Mano de Obra
        </h1>
        <div className="flex flex-col sm:flex-row p-4 sm:gap-2">
          <form className="sm:w-1/2">
            <div className="flex gap-1">
              <input
                type="text"
                placeholder="Nombre M.O"
                className="w-2/3 border-gray-200 border-2 rounded outline-none"
              />
              <input
                type="number"
                placeholder="# turnos"
                className="w-1/3 border-gray-200 border-2 rounded outline-none"
              />
            </div>
            <button className="text-xs mt-2">
                Agregar
            </button>
            <input
              type="submit"
              name=""
              id=""
              value="Terminar"
              className="w-full bg-green-500 py-1 my-4 uppercase text-white font-bold hover:bg-green-700 cursor-pointer text-sm"
            />
          </form>
          <div className="sm:w-1/2 h-full">
            <ul>
              <li>1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceMaterialModal;
