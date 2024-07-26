import { useDispatch, useSelector } from "react-redux";
import TenderNav from "../../components/tender/TenderNav";
import { AppDispatch, RootState } from "../../redux/store";
import TenderName from "../../components/tender/TenderName";
import { useForm, SubmitHandler } from "react-hook-form";
import { SupplyType, Tender } from "../../types/types";
import { useEffect, useState } from "react";
import { initValMaterial } from "../../helpers/initialValues";
import { updateTender } from "../../redux/slices/tenderSlice";
import MaterialFieldForm from "../../components/tender/MaterialFieldForm";
import MaterialTable from "../../components/tender/MaterialTable";
import MaterialSummary from "../../components/tender/MaterialSummary";

//TODO: COLOCAR TABLA DE MANO DE OBRA Y MATERIALES PARA FACILITAR LA DESCRIPCION

const MaterialsView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);
  const [index, setIndex] = useState<number | null>(null);
  const [mtEdit, setMtEdit] = useState<SupplyType>(initValMaterial);

  const { register, handleSubmit, reset, setValue, watch } =
    useForm<SupplyType>({
      defaultValues: {
        description: "",
        unit: "",
        quantity: 0,
        unitCost: 0,
        partialCost: 0,
        profit: 0,
        profitAmount: 0,
        totalValue: 0,
      },
    });

  useEffect(() => {
    if (index !== null) {
      setValue("description", mtEdit.description);
      setValue("unit", mtEdit.unit);
      setValue("quantity", mtEdit.quantity);
      setValue("unitCost", mtEdit.unitCost);
      setValue("partialCost", mtEdit.partialCost);
      setValue("profit", mtEdit.profit);
      setValue("profitAmount", mtEdit.profitAmount);
      setValue("totalValue", mtEdit.totalValue);
    }
  }, [mtEdit, index, setValue]);

  const handleDelete = async (index: number) => {
    //* CREA UN NUEVO ARRAY CON LA DESCRIPCIÓN EN EL ÍNDICE DADO

    const updatedMaterialArray: SupplyType[] = tender.materials.filter(
      (_, i: number) => i !== index
    );

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      materials: updatedMaterialArray,
    };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));

      if (updateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Material eliminado correctamente!");

        setIndex(null);
        reset();
      } else {
        if (resultAction.payload) {
          // La actualización falló con un mensaje de error del backend
          console.error(resultAction.payload);
        } else {
          // La actualización falló con un error desconocido
          console.error("Falló la eliminación");
        }
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    }
    //* DESPARA EL THUNK
  };

  const onSubmit: SubmitHandler<SupplyType> = async (data) => {
    data.partialCost = data.unitCost * data.quantity;
    data.profitAmount = (data.profit / 100) * data.partialCost;
    data.totalValue = data.partialCost + data.profitAmount

    const updatedMaterialArray: SupplyType[] =
      index !== null
        ? tender.materials.map((mt: SupplyType, i: number) =>
            i === index ? data : mt
          )
        : [...tender.materials, data];

    const updatedTender: Tender = {
      ...tender,
      materials: updatedMaterialArray,
    };

    try {
      const resultAction = await dispatch(updateTender(updatedTender));

      if (updateTender.fulfilled.match(resultAction)) {
        // La actualización fue exitosa
        alert("¡Cotización Actualizada correctamente!");

        setIndex(null);
        setMtEdit(initValMaterial);
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
            Administrar <span className="text-gray-500">Materiales</span>
          </h2>
          <MaterialFieldForm register={register} watch={watch} />

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
        <MaterialTable
          setIndex={setIndex}
          setMtEdit={setMtEdit}
          handleDelete={handleDelete}
        />
        <MaterialSummary/>
      </div>
    </div>
  );
};
export default MaterialsView;
