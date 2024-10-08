import TenderNav from "../../components/tender/TenderNav";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Tender } from "../../types/types";
import HourglassSpinner from "../../components/HourglassSpinner";
import TenderName from "../../components/tender/TenderName";
import { SubmitHandler, useForm } from "react-hook-form";
import NotesTable from "../../components/tender/NotesTable";
import { fetchUpdateTender } from "../../redux/thunks/tenderThunks";

type FormFields = {
  note: string;
};

const NotesTenderView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tender = useSelector((state: RootState) => state.tender.tender);
  const loading = useSelector((state: RootState) => state.tender.loading);
  const error = useSelector((state: RootState) => state.tender.error);
  const [index, setIndex] = useState<number | null>(null);
  const [noteEdit, setNoteEdit] = useState<string>("");

  const { register, handleSubmit, reset, setValue } = useForm<FormFields>({
    defaultValues: {
      note: "",
    },
  });

  useEffect(() => {
    if (index !== null) {
      setValue("note", noteEdit);
    }
  }, [setValue, noteEdit, index]);

  const handleDelete = async (index: number) => {
    //* CREA UN NUEVO ARRAY CON LA DESCRIPCIÓN EN EL ÍNDICE DADO
    if (tender === null) {
      return;
    }
    const updatedNotes = tender.notes.filter((_, i: number) => i !== index);

    //* Crea un nuevo objeto `Tender` con la lista actualizada de descripciones
    const updatedTender: Tender = {
      ...tender,
      notes: updatedNotes,
    };

    const resultAction = await dispatch(fetchUpdateTender(updatedTender));
    if (fetchUpdateTender.fulfilled.match(resultAction)) {
      alert("¡Nota eliminada correctamente!");
      setIndex(null);
    } else {
      alert(error);
    }
    setIndex(null);
  };

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    if (tender === null) {
      return;
    }
    const updatedNotesArray: string[] =
      index !== null
        ? tender.notes.map((note: string, i: number) =>
            i === index ? data.note : note
          )
        : [...tender.notes, data.note];

    const updatedTender: Tender = {
      ...tender,
      notes: updatedNotesArray,
    };

    const resultAction = await dispatch(fetchUpdateTender(updatedTender));

    if (fetchUpdateTender.fulfilled.match(resultAction)) {
      // La actualización fue exitosa
      alert("¡Cotización Actualizada correctamente!");

      setIndex(null);
      setNoteEdit("");
      reset();
    } else {
      alert(error);
    }
    setIndex(null);
    setNoteEdit("");
  };

  useEffect(() => {
    if (index !== null) {
      setValue("note", noteEdit);
    }
  }, [setValue, noteEdit, index]);

  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      {loading ? (
        <HourglassSpinner />
      ) : (
        <div className="w-full">
          <TenderName name={tender ? tender.name : ""} />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center font-black text-gray-500 uppercase text-base md:text-xl">
              Notas <span className="text-red-500">Adicionales</span>
            </h2>
            <div className="flex gap-5">
              <label htmlFor="" className="font-semibold">
                Observación
              </label>
              <textarea
                className="w-full h-32 bg-white outline-none px-2 resize-none"
                {...register("note")}
              />
            </div>
            <div className="w-full flex justify-center my-5">
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
          <NotesTable
            setIndex={setIndex}
            setNoteEdit={setNoteEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};
export default NotesTenderView;
