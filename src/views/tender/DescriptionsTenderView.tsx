import { useForm, SubmitHandler } from "react-hook-form";
import DescriptionsFiledForm from "../../components/tender/DescriptionsFieldsForm";
import TenderNav from "../../components/tender/TenderNav";
import { Description, Tender } from "../../types/types";
import DescriptionTable from "../../components/tender/DescriptionTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { updateTender } from "../../redux/slices/tenderSlice";

import HourglassSpinner from "../../components/HourglassSpinner";
import { useEffect, useState } from "react";
import { initValDescription } from "../../helpers/initialValues";
import TenderName from "../../components/tender/TenderName";
import WorkforceMaterialSummary from "../../components/tender/WorkforceMaterialSummary";

const DescriptionsTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);

  const loading = useSelector((state: RootState) => state.tender.loading);

  const [index, setIndex] = useState<number | null>(null);
  const [descEdit, setDescEdit] = useState<Description>(initValDescription);

  const { register, handleSubmit, watch, reset, setValue } =
    useForm<Description>({
      defaultValues: {
        unitValue: 0,
        quantity: 0,
        totalValue: 0,
      },
    });
  useEffect(() => {
    if (index !== null) {
      setValue("item", descEdit.item);
      setValue("description", descEdit.description);
      setValue("unit", descEdit.unit);
      setValue("quantity", descEdit.quantity);
      setValue("unitValue", descEdit.unitValue);
      setValue("totalValue", descEdit.totalValue);
    }
  }, [setValue, descEdit, index]);

  const handleDelete = async (index: number) => {
    //* CREA UN NUEVO ARRAY CON LA DESCRIPCIÓN EN EL ÍNDICE DADO
    const updatedDescriptions = tender.description.filter(
      (_, i: number) => i !== index
    );

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      description: updatedDescriptions,
    };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));
      if (updateTender.fulfilled.match(resultAction)) {
        alert("¡Descripción eliminada correctamente!");
      } else {
        if (resultAction.payload) {
          console.error(resultAction.payload);
        } else {
          console.error("Falló la eliminación");
        }
      }
      setIndex(null);
    } catch (error) {
      console.error("Error inesperado:", error);
    }
    //* DESPARA EL THUNK
  };

  const onSubmit: SubmitHandler<Description> = async (data) => {
    data.totalValue = data.quantity * data.unitValue;
    
    const updatedDescriptions: Description[] =
    index !== null ? tender.description.map((desc:Description, i:number)=>
      i === index ? data : desc
    ) : [...tender.description, data];

    const updatedTender: Tender = {
       ...tender,
       description: updatedDescriptions,
     };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));

      if (updateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Cotización Actualizada correctamente!");
        reset();
      } else {
        if (resultAction.payload) {
          // La actualización falló con un mensaje de error del backend
          console.error(resultAction.payload);
        } else {
          // La actualización falló con un error desconocido
          console.error("Failed to update tender.");
        }
      }
      setIndex(null)
      setDescEdit(initValDescription)

    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  return (
    <div className="my-5 flex gap-5">
      {loading ? (
        <HourglassSpinner />
      ) : (
        <>
          <TenderNav />
          <div className="w-full">
            <TenderName name={tender.name} />
            <WorkforceMaterialSummary/>
            <form
              className="bg-white w-full max-w-[600px] mx-auto px-4 md:px-16 py-12 space-y-5 flex flex-col items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="text-center font-black text-gray-500 uppercase text-base md:text-xl">
                Descripción
              </h2>
              <DescriptionsFiledForm register={register} watch={watch} />
              <input
                type="submit"
                value={index !== null ? "Editar" : "Guardar"}
                className="mx-auto bg-gradient-to-b from-cyan-700 to-cyan-800 hover:bg-gradient-to-b

                hover:from-gray-500 hover:to-gray-700
                rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
                uppercase text-center px-16 py-2 text-sm"
              />
            </form>
            <DescriptionTable
              setIndex={setIndex}
              setDescEdit={setDescEdit}
              handleDelete={handleDelete}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default DescriptionsTenderView;
