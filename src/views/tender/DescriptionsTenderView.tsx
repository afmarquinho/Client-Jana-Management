import { useForm, SubmitHandler } from "react-hook-form";
import DescriptionsFiledForm from "../../components/tender/DescriptionsFieldsForm";
import TenderNav from "../../components/tender/TenderNav";
import { Description, Tender } from "../../types/types";
import DescriptionTable from "../../components/tender/DescriptionTable";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import HourglassSpinner from "../../components/HourglassSpinner";
import { useEffect, useState } from "react";
import TenderName from "../../components/tender/TenderName";
import TotalSummary from "../../components/tender/TotalSummary";
import TenderSummary from "../../components/tender/TenderSummary";
import { fetchUpdateTender } from "../../redux/thunks/tenderThunks";

const DescriptionsTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);

  const loading = useSelector((state: RootState) => state.tender.loading);
  const error = useSelector((state: RootState) => state.tender.error);

  const [index, setIndex] = useState<number | null>(null);
  const [descEdit, setDescEdit] = useState<Description | null>(null);

  const { register, handleSubmit, watch, reset, setValue } =
    useForm<Description>({
      defaultValues: {
        unitValue: 0,
        quantity: 0,
        totalValue: 0,
      },
    });
  useEffect(() => {
    if (index !== null && descEdit!== null) {
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
    if (!tender) {
      return;
    }
    const updatedDescriptions = tender.description.filter(
      (_, i: number) => i !== index
    );

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      description: updatedDescriptions,
    };

    const resultAction = await dispatch(fetchUpdateTender(updatedTender));
    if (fetchUpdateTender.fulfilled.match(resultAction)) {
      alert("Descripción eliminada correctamente");
    } else {
      alert(error);
    }
    setIndex(null);
  };

  const onSubmit: SubmitHandler<Description> = async (data) => {
    data.totalValue = data.quantity * data.unitValue;
    if (!tender) {
      return;
    }
    const updatedDescriptions: Description[] =
      index !== null
        ? tender.description.map((desc: Description, i: number) =>
            i === index ? data : desc
          )
        : [...tender.description, data];

    const updatedTender: Tender = {
      ...tender,
      description: updatedDescriptions,
    };

    const resultAction = await dispatch(fetchUpdateTender(updatedTender));

    if (fetchUpdateTender.fulfilled.match(resultAction)) {
      alert("¡Cotización Actualizada correctamente!");
      reset();
    }
    setIndex(null);
    setDescEdit(null);
  };

  return (
    <div className="my-5 flex gap-5">
      {loading ? (
        <HourglassSpinner />
      ) : (
        <>
          <TenderNav />
          <div className="w-full">
            <TenderName name={tender ? tender.name : ""} />
            <h2 className="text-red-500">Resúmen de la oferta</h2>
            <div className="flex gap-10">
              <TotalSummary />
              <TenderSummary />
            </div>
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
