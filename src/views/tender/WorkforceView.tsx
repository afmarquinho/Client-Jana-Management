import { useDispatch, useSelector } from "react-redux";
import TenderNav from "../../components/tender/TenderNav";
import { AppDispatch, RootState } from "../../redux/store";
import TenderName from "../../components/tender/TenderName";
import { useForm, SubmitHandler } from "react-hook-form";
import WorkforceFiledsForm from "../../components/tender/WorkforceFieldsForm";
import { LaborType, OfferSummaryType, Tender } from "../../types/types";
import WorkforceTable from "../../components/tender/WorkforceTable";
import { useEffect, useState } from "react";
import { updateTender } from "../../redux/slices/tenderSlice";
import { initValWorkforce } from "../../helpers/initialValues";
import WorkforceSummary from "../../components/tender/WorkforceSummary";
import { summaryTender } from "../../helpers/helpers";
//TODO: VALIDAR PARA QUE NO SE ENVÍEN NULOS, SI SE ENVIA EL TURNO VACIO LUEGO NO LO PUEDO VER PERO SI ESTA SUMANDO

const WorkforceView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);
  const [index, setIndex] = useState<number | null>(null);
  const [wfEdit, setWfEdit] = useState<LaborType>(initValWorkforce);

  const { register, handleSubmit, watch, reset, setValue } = useForm<LaborType>(
    {
      defaultValues: {
        role: "",
        workers: 0,
        shiftType: "",
        rate: 0,
        shiftCount: 0,
        partialCost: 0,
        profit: 0,
        profitAmount: 0,
        totalValue: 0,
      },
    }
  );
  useEffect(() => {
    if (index !== null) {
      setValue("role", wfEdit.role);
      setValue("workers", wfEdit.workers);
      setValue("shiftType", wfEdit.shiftType);
      setValue("rate", wfEdit.rate);
      setValue("shiftCount", wfEdit.shiftCount);
      setValue("profit", wfEdit.profit);
    }
  }, [wfEdit, index, setValue]);

  const handleDelete = async (index: number) => {
    //* CREA UN NUEVO ARRAY CON LA DESCRIPCIÓN EN EL ÍNDICE DADO

    const updatedWorkforceArray: LaborType[] = tender.workforce.filter(
      (_, i: number) => i !== index
    );

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      workforce: updatedWorkforceArray,
    };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));
      if (updateTender.fulfilled.match(resultAction)) {
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

  const onSubmit: SubmitHandler<LaborType> = async (data) => {
    data.partialCost = data.rate * data.workers * data.shiftCount;
    data.profitAmount = (data.profit / 100) * data.partialCost;
    data.totalValue = data.profitAmount + data.partialCost;

    const updatedWorkforceArray: LaborType[] =
      index !== null
        ? tender.workforce.map((wf: LaborType, i: number) =>
            i === index ? data : wf
          )
        : [...tender.workforce, data];

    let updatedTender: Tender = {
      ... tender,
      workforce: updatedWorkforceArray,
    };

    //*ACTUALIZO EL CAMNPO DE RESUMEN
    const summary: OfferSummaryType = summaryTender(updatedTender);
    
    updatedTender = {
      ...updatedTender,
      summary:summary
    };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));

      if (updateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Cotización Actualizada correctamente!");

        setIndex(null);
        setWfEdit(initValWorkforce);
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
            Calcular <span className="text-gray-500">Mano de Obra</span>
          </h2>
          <WorkforceFiledsForm register={register} watch={watch} />
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
        <h2 className="italic font-bold mt-5 uppercase">Mano de Obra</h2>
        <WorkforceTable
          setIndex={setIndex}
          setWfEdit={setWfEdit}
          handleDelete={handleDelete}
          shiftType="preparation"
        />
        <WorkforceTable
          setIndex={setIndex}
          setWfEdit={setWfEdit}
          handleDelete={handleDelete}
          shiftType="day"
        />
        <WorkforceTable
          setIndex={setIndex}
          setWfEdit={setWfEdit}
          handleDelete={handleDelete}
          shiftType="night"
        />
        <WorkforceSummary />
      </div>
    </div>
  );
};
export default WorkforceView;
