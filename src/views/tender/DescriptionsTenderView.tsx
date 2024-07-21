import { useForm, SubmitHandler } from "react-hook-form";
import DescriptionsFiledForm from "../../components/tender/DescriptionsFiledForm";
import TenderNav from "../../components/tender/TenderNav";
import { Description, Tender } from "../../types/types";
import DescriptionTable from "../../components/tender/DescriptionTable";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateTenderService } from "../../services/tenderServices";

const DescriptionsTenderView = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);
  const { register, handleSubmit, watch, reset } = useForm<Description>({
    defaultValues: {
      unitValue: 0,
      quantity: 0,
      totalValue: 0,
    },
  });

  const onSubmit: SubmitHandler<Description> = async (data) => {
    data.totalValue = data.quantity * data.unitValue;
    const updatedDescriptions: Description[] = [...tender.description, data];
    const updatedTender: Tender = {
      ...tender,
      description: updatedDescriptions,
    };

    await updateTenderService(updatedTender);

    reset();
  };

  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div className="w-full">
        <h2 className="italic text-gray-800 text-lg sm:text-2xl font-semibold mb-4">
          {tender.name}
        </h2>
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
            value={"Agregar"}
            className="mx-auto bg-gradient-to-b from-cyan-700 to-cyan-800 hover:bg-gradient-to-b
        hover:from-gray-500 hover:to-gray-700
        rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
        uppercase text-center px-16 py-2 text-sm"
          />
        </form>
        <DescriptionTable />
      </div>
    </div>
  );
};
export default DescriptionsTenderView;
