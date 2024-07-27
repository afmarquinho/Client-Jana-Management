import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { OtherExpenses } from "../../types/types";

type ChildInputProps = {
  register: UseFormRegister<OtherExpenses>;
  watch: UseFormWatch<OtherExpenses>;
};

const OtherExpFieldsForm: React.FC<ChildInputProps> = ({
  register,
  watch,
}) => {
  const amount = watch("amount", 0);
  const unitCost = watch("unitCost", 0);
  const profit = watch("profit", 0);

  return (
    <div className="w-full space-y-2">
      <div className="flex gap-5">
        <label className="w-1/2 font-semibold"> Descripción:</label>
        <input
          type="text"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("description")}
        />
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Turno / Prealistamiento</label>
        <select className="outline-customRed" {...register("shiftType")}>
          <option value="">--Seleccione-- </option>
          <option value="day">Día</option>
          <option value="night">Noche</option>
          <option value="preparation">Prealistamiento</option>
        </select>
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Unidad</label>
        <input
          type="text"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("unit")}
        />
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Cantidad</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("amount", { valueAsNumber: true })}
        />
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Valor Comercial</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("unitCost", { valueAsNumber: true })}
        />
      </div>
      <div className="flex gap-5">
        <p className="w-1/2 font-semibold">Valor Parcial: </p>
        <p className="w-1/2 font-semibold">
          {" "}
          {(amount * unitCost).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Margen (%):</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("profit", { valueAsNumber: true })}
        />
      </div>
      <div className="flex gap-5 items-center">
        <p className="w-1/2 font-semibold">Margen de Contribución (MC): </p>
        <p className="w-1/2 font-semibold">
          {((profit / 100) * amount * unitCost).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <p className="w-full text-center font-semibold">
        Total Mano de Obra:{" "}
        {((profit / 100 + 1) * amount * unitCost).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </p>
    </div>
  );
};
export default OtherExpFieldsForm;
