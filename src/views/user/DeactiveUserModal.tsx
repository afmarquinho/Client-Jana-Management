import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchActiveDeactiveUser } from "../../redux/slices/userSlice";

type ChildInputProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeactiveUserModal: React.FC<ChildInputProps> = ({ setIsModalOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.userProfile);

  const onStatus = async () => {
    try {
      if (!user) {
        return;
      }
      setIsModalOpen(false);
  
      const resultAction = await dispatch(
        fetchActiveDeactiveUser({ id: user.id, status: !user.active })
      );
      if (fetchActiveDeactiveUser.fulfilled.match(resultAction)) {
        alert("Estado actualizado con éxito");
      }
    } catch (error) {
      console.error("Error al actualizar el estado del usuario:", error);
      alert("No se pudo actualizar el usuario");
    }
  };
  

  return (
    <div className="fixed bg-black bg-opacity-50 flex justify-center items-center inset-0 z-[100]">
      <div className="w-9/12 max-w-96 mx-auto bg-white rounded-md overflow-hidden">
        <h4
          className={`${
            user?.active === true ? "bg-red-700" : "bg-blue-500"
          } p-3 text-sm md:text-lg text-white font-bold text-center flex items-center justify-center gap-3 relative`}
        >
          <ExclamationTriangleIcon className="h-5 md:h-6 text-yellow-400 absolute left-4" />
          Alerta
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            onClick={() => setIsModalOpen(false)}
          >
            <XCircleIcon className="h-5 md:h-7 text-white" />
          </button>
        </h4>
        <div className="p-6 space-y-3">
          <p className="text-sm md:text-base text-center">
            {user?.active === true ? (
              <>
                ¿Realmente deseas{" "}
                <span className="font-semibold text-red-500">desactivar</span>{" "}
                al usuario{" "}
                <span className="font-semibold">{`${user?.name} ${user?.lastName}`}</span>
                ?
              </>
            ) : (
              <>
                Confirma que deseas{" "}
                <span className="font-semibold text-blue-500">activar</span> al
                usuario{" "}
                <span className="font-semibold">{`${user?.name} ${user?.lastName}`}</span>
              </>
            )}
          </p>

          <div className="w-full flex justify-evenly text-sm text-white">
            <button
              type="button"
              className={`${
                user?.active === true ? "bg-red-700" : "bg-blue-500"
              } bg-gradient-to-b py-2 px-4 rounded`}
              onClick={onStatus}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeactiveUserModal;
