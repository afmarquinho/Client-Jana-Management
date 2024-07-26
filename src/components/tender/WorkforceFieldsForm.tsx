import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { LaborType } from "../../types/types";

type ChildInputProps = {
  register: UseFormRegister<LaborType>;
  watch: UseFormWatch<LaborType>;
};
const WorkforceFieldsForm: React.FC<ChildInputProps> = ({
  register,
  watch,
}) => {
  const workers = watch("workers", 0);
  const rate = watch("rate", 0);
  const shiftCount = watch("shiftCount", 0);
  const profit = watch("profit", 0);
  return (
    <div className="w-full space-y-2">
      <div className="flex gap-5">
        <label className="w-1/2 font-semibold"> Rol/Cargo:</label>
        <input
          type="text"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("role")}
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
        <label className="w-1/2 font-semibold">Número de Trabajadores:</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("workers", { valueAsNumber: true })}
        />
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">
          Tarifa ($) Jornada / Trabajador:
        </label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("rate", { valueAsNumber: true })}
        />
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">Turnos:</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("shiftCount", { valueAsNumber: true })}
        />
      </div>
      <div className="flex gap-5">
        <p className="w-1/2 font-semibold">Valor Parcial: </p>
        <p className="w-1/2 font-semibold">
          {" "}
          {(rate * workers * shiftCount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <div className="flex gap-5">
        <label className="w-1/2 font-semibold">
          Porcentaje de Ganancia (%):
        </label>
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
          {((profit / 100) * rate * workers * shiftCount).toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            }
          )}
        </p>
      </div>
      <div className="flex gap-5">
        <p className="w-1/2 font-semibold">Total Mano de Obra: </p>
        <p className="w-1/2 font-semibold">
          {((profit / 100 + 1) * rate * workers * shiftCount).toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "USD",
            }
          )}
        </p>
      </div>
    </div>
  );
};
export default WorkforceFieldsForm;
