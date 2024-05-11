import { ExclamationTriangleIcon } from "@heroicons/react/16/solid";


const AcceptModal: React.FC<{ title: string; message: string }> = ({
  title = "Atención",
  message = "¿Confirmas esta acción",
}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-60 flex items-center justify-center">
      <div className="w-9/12 max-w-96 mx-auto bg-white rounded-md overflow-hidden">
       
        <h4
          className={`${
            title === "Importante" ? "bg-green-600" : "bg-red-700"
          } p-2 text-xs md:text-xl text-white font-bold text-center flex flex-col items-center justify-center`}
        >
           <ExclamationTriangleIcon className="h-7 md:h-10 text-yellow-400"/> {title}
        </h4>
        <div className="p-4">
          <p className="text-xs text-left">{message}</p>

          {title === "Importante" ? (
            <div className="flex justify-evenly mt-5 text-xs md:text-sm">
              <button className="bg-green-500 px-2 py-1 rounded hover:bg-green-700 hover:text-white">Cancelar</button>
              <button className="bg-red-400 px-2 py-1 rounded hover:bg-red-700 hover:text-white">Eliminar</button>
            </div>
          ) : (
            <div className="flex justify-evenly mt-5 text-xs md:text-sm">
              <button className="bg-green-500 px-2 py-1 rounded hover:bg-green-700 hover:text-white">Confirmar</button>
              <button className="bg-red-400 px-2 py-1 rounded hover:bg-red-700 hover:text-white">Cancelar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptModal;
