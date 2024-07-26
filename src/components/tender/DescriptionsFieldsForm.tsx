import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { Description } from "../../types/types";

type ChildInputProps = {
  register: UseFormRegister<Description>;
  watch: UseFormWatch<Description>;
};
const DescriptionsFieldsForm: React.FC<ChildInputProps> = ({
  register,
  watch,
}) => {
  const quantity = watch("quantity", 0);
  const unitValue = watch("unitValue", 0);

  return (
    <>
      <div className="flex w-full">
        <label htmlFor="" className="w-32 font-semibold">
          ítem
        </label>
        <input
          type="text"
          className="bg-gray-200 outline-none px-2 w-full"
          {...register("item")}
        />
      </div>

      <div className="flex w-full">
        <label htmlFor="" className="w-32 font-semibold">
          Descripción
        </label>
        <textarea
          id=""
          className="bg-gray-200 outline-none px-2 resize-none w-full h-24"
          {...register("description")}
        />
      </div>

      <div className="flex w-full">
        <label htmlFor="" className="w-32 font-semibold">
          Unidad
        </label>
        <input
          type="text"
          className="bg-gray-200 outline-none px-2 w-full"
          {...register("unit")}
        />
      </div>

      <div className="flex w-full">
        <label htmlFor="" className="w-32 font-semibold">
          Cantidad
        </label>
        <input
          type="number"
          className="bg-gray-200 outline-none px-2 w-full"
          {...register("quantity", {valueAsNumber:true})}
        />
      </div>

      <div className="flex w-full">
        <label htmlFor="" className="w-32 font-semibold">
          Vr Unitario
        </label>
        <input
          type="number"
          className="bg-gray-200 outline-none px-2 w-full"
          {...register("unitValue",{valueAsNumber:true})}
        />
      </div>

      <p className="w-full font-semibold text-center">
        Vr. Total:{" "}
        <span>
          {(quantity * unitValue).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </p>
    </>
  );
};
export default DescriptionsFieldsForm;
