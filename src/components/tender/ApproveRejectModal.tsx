import {
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { CommentsTypes } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Tender } from "../../types/types";
import { fetchUpdateTender } from "../../redux/thunks/tenderThunks";
import { createConsecutiveService } from "../../services/consecutiveService";

type ChildInputProps = {
  status: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApproveRejectModal: React.FC<ChildInputProps> = ({
  status,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);

  const { register, handleSubmit, reset } = useForm<CommentsTypes>({
    defaultValues: {
      author: "Joe Doe",
      comment: "",
    },

  });

  const onSubmit: SubmitHandler<CommentsTypes> = async (data) => {
    if (!tender) {
      return;
    }

    const commentsArray: CommentsTypes[] = data.comment
      ? [...tender.comments, data]
      : [...tender.comments];

    let updatedTender: Tender = {
      ...tender,
      comments: commentsArray,
    };
    updatedTender =
      status === "rejected"
        ? {
            ...updatedTender,
            status: "rejected",
          }
        : status === "approved"
        ? {
            ...updatedTender,
            status: "approved",
          }
        : {
            ...updatedTender,
            status: "review",
          };

    try {
      if (!tender) {
        return;
      }
      await createConsecutiveService(tender?.id);

      const resultAction = await dispatch(fetchUpdateTender(updatedTender));

      if (fetchUpdateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Cotización Actualizada correctamente!");

        setIsModalOpen(false);
        reset();
      } else {
        if (resultAction.payload) {
          // La actualización falló con un mensaje de error del backend
          console.error(resultAction.payload);
        } else {
          // La actualización falló con un error desconocido
          console.error("Falló la actualización de la cotización");
        }
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-50 flex justify-center items-center inset-0">
      <div className="w-9/12 max-w-96 mx-auto bg-white rounded-md overflow-hidden">
        <h4
          className={`${
            status === "rejected"
              ? "bg-red-700"
              : status === "approved"
              ? "bg-green-500"
              : "bg-blue-500"
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
          <p
            className={`${
              status === "rejected"
                ? "text-red-700"
                : status === "approved"
                ? "text-green-700"
                : "text-blue-700"
            } text-sm md:text-base text-center  font-bold`}
          >
            {status === "rejected"
              ? "¿Realmente deseas rechazar la cotización?"
              : status === "approved"
              ? "¿Confirma que deseas aprobar la cotización?"
              : "¿Confirma que deseas enviar la cotización para revisión?"}
          </p>
          <p className="text-sm text-center">
            {status === "review"
              ? "Pues dejar un comentario si deseas."
              : "Puedes dejar un comentario para que el responsable conozca el motivo de tu decisión."}
          </p>

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="w-full h-32 bg-white outline-none px-2 resize-none border border-gray-500"
              {...register("comment")}
            />
            <div className="w-full flex justify-evenly text-sm text-white">
              <button
                type="submit"
                className={`${
                  status === "rejected"
                    ? "bg-red-700"
                    : status === "approved"
                    ? "bg-green-500"
                    : "bg-blue-500"
                } bg-gradient-to-b py-2 px-4 rounded`}
              >
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ApproveRejectModal;
