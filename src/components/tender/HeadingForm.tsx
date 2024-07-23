import { SubmitHandler, useForm } from "react-hook-form";
import { HeadingTender } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import HeadingFiledForm from "./HeadingFieldForm";
import { updateTender } from "../../redux/slices/tenderSlice";
import { getTodayDateString } from "../../helpers/helpers";
import HourglassSpinner from "../HourglassSpinner";

const HeadingForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);
  const loading = useSelector((state: RootState) => state.tender.loading);

  const { register, handleSubmit } = useForm<HeadingTender>({
    defaultValues: {
      id: tender.id,
      name: tender.name,
      customerName: tender.customerName,
      contactName: tender.contactName,
      email: tender.email,
      phoneNumber: tender.phoneNumber,
      customerCity: tender.customerCity,
      createdBy: tender.createdBy,
      reviewedBy: tender.reviewedBy,
      date: getTodayDateString(),
      leadTime: tender.leadTime,
      paymentMethod: tender.paymentMethod,
      proposalValidity: tender.proposalValidity,
    },
  });
  const onSubmit: SubmitHandler<HeadingTender> = async (data) => {
    const tend = { ...tender, ...data };

    try {
      await dispatch(updateTender(tend));
     
      alert("Tender actualizado exitosamente");
    } catch (error) {
      // Manejo de errores
      console.error("Error al actualizar el tender:", error);
      alert(
        "Ocurrió un error al actualizar el tender. Por favor, intenta nuevamente."
      );
    }
  };
  return (
    <>
      {loading ? (
        <HourglassSpinner />
      ) : (
        <form
          className="bg-white w-full max-w-5xl mx-auto px-4 md:px-16 py-12 space-y-5 flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
            Nueva <span className="text-gray-500">Cotización</span>
          </h2>

          <HeadingFiledForm register={register} />
          <input
            type="submit"
            value="Guardar"
            className="bg-gradient-to-b from-cyan-700 to-cyan-800 hover:bg-gradient-to-b
        hover:from-gray-500 hover:to-gray-700
            rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-center px-16 py-2 text-sm"
          />
        </form>
      )}
    </>
  );
};
export default HeadingForm;
