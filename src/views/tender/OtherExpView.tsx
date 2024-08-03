import { useDispatch, useSelector } from "react-redux";
import TenderNav from "../../components/tender/TenderNav";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { OfferSummaryType, OtherExpensesType, Tender } from "../../types/types";
import { initValOtherExpenses } from "../../helpers/initialValues";
import OtherExpFieldsForm from "../../components/tender/OtherExpFieldsForm";
import { useForm, SubmitHandler } from "react-hook-form";
import TenderName from "../../components/tender/TenderName";
import OtherExpTable from "../../components/tender/OtherExpTable";
import OtherExpSummary from "../../components/tender/OtherExpSummary";
import { summaryTender } from "../../helpers/helpers";
import { fetchUpdateTender } from "../../redux/thunks/tenderThunks";

const OtherExpView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);
  const [index, setIndex] = useState<number | null>(null);
  const [expEdit, setExpEdit] =
    useState<OtherExpensesType>(initValOtherExpenses);

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<OtherExpensesType>({
      defaultValues: {
        description: "",
        shiftType: "",
        unit: "",
        amount: 0,
        unitCost: 0,
        partialCost: 0,
        profit: 0,
        profitAmount: 0,
        totalValue: 0,
      },
    });

  useEffect(() => {
    if (index !== null) {
      setValue("description", expEdit.description);
      setValue("shiftType", expEdit.shiftType);
      setValue("unit", expEdit.unit);
      setValue("amount", expEdit.amount);
      setValue("unitCost", expEdit.unitCost);
      setValue("partialCost", expEdit.partialCost);
      setValue("profit", expEdit.profit);
      setValue("profitAmount", expEdit.profitAmount);
      setValue("totalValue", expEdit.totalValue);
    }
  }, [expEdit, index, setValue]);

  const handleDelete = async (index: number) => {
    //* CREA UN NUEVO ARRAY CON LA DESCRIPCIÓN EN EL ÍNDICE DADO

    const updatedExpensesArray: OtherExpensesType[] =
      tender.otherExpenses.filter((_, i: number) => i !== index);

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      otherExpenses: updatedExpensesArray,
    };

    try {
      const resultAction = await dispatch(fetchUpdateTender(updatedTender));
      if (fetchUpdateTender.fulfilled.match(resultAction)) {
        alert("¡Mano de obra eliminada correctamente!");
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

  const onSubmit: SubmitHandler<OtherExpensesType> = async (data) => {
    data.partialCost = data.unitCost * data.amount;
    data.profitAmount = (data.profit / 100) * data.partialCost;
    data.totalValue = data.partialCost + data.profitAmount;

    const updatedOtherExpenses: OtherExpensesType[] =
      index !== null
        ? tender.otherExpenses.map((exp: OtherExpensesType, i: number) =>
            i === index ? data : exp
          )
        : [...tender.otherExpenses, data];

    let updatedTender: Tender = {
      ...tender,
      otherExpenses: updatedOtherExpenses,
    };

     //*ACTUALIZO EL CAMNPO DE RESUMEN
     const summary: OfferSummaryType = summaryTender(updatedTender);
    
     updatedTender = {
       ...updatedTender,
       summary:summary
     };




    try {
      const resultAction = await dispatch(fetchUpdateTender(updatedTender));

      if (fetchUpdateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Cotización Actualizada correctamente!");

        setIndex(null);
        setExpEdit(initValOtherExpenses);
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
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div className="w-full">
        <TenderName name={tender.name} />
        <form
          className="bg-white w-full max-w-xl mx-auto px-4 md:px-16 py-12 space-y-5 flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
            OTROS GASTOS Y <span className="text-gray-500">CONSUMIBLES</span>
          </h2>
          <OtherExpFieldsForm register={register} watch={watch} />
          <div className="pt-5 w-full flex justify-center items-center">
            <input
              type="submit"
              value={index !== null ? "Editar" : "Guardar"}
              className="bg-gradient-to-b from-cyan-700 to-cyan-800 hover:bg-gradient-to-b
            hover:from-gray-500 hover:to-gray-700
            rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-center px-16 py-2 text-sm"
            />
          </div>
        </form>
        <h2 className="italic font-bold mt-5 uppercase">
          Otros Gastos y Consumibles
        </h2>
        <OtherExpTable
          setIndex={setIndex}
          setExpEdit={setExpEdit}
          handleDelete={handleDelete}
          shiftType="preparation"
        />
        <OtherExpTable
          setIndex={setIndex}
          setExpEdit={setExpEdit}
          handleDelete={handleDelete}
          shiftType="day"
        />
        <OtherExpTable
          setIndex={setIndex}
          setExpEdit={setExpEdit}
          handleDelete={handleDelete}
          shiftType="night"
        />
        <OtherExpSummary />
      </div>
    </div>
  );
};
export default OtherExpView;
