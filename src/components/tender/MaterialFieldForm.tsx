import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { SupplyType } from "../../types/types";

type ChildInputProps = {
  register: UseFormRegister<SupplyType>;
  watch: UseFormWatch<SupplyType>;
};

const MaterialFieldForm: React.FC<ChildInputProps> = ({ register, watch }) => {
  const quantity = watch("quantity");
  const unitCost = watch("unitCost");
  const profit = watch("profit");

  return (
    <div className="w-full space-y-2">
      <div className="w-full space-y-2">
        <div className="flex gap-5">
          <label className="w-1/2 font-semibold">Material</label>
          <textarea
            required
            className="w-1/2 h-12 bg-gray-200 outline-none px-2 resize-none"
            {...register("description")}
          />
        </div>
      </div>

      <div className="w-full flex gap-5">
        <label className="w-1/2 font-semibold">Unidad</label>
        <select className="outline-customRed" {...register("unit")}>
          <option value="">--Seleccione-- </option>
          <option value="centimetro">Centímetro</option>
          <option value="galon">Galón</option>
          <option value="gramo">Gramo</option>
          <option value="kilogramo">Kilogramo</option>
          <option value="kit">Kit</option>
          <option value="litro">Litro</option>
          <option value="metro">Metro</option>
          <option value="mm">Mililitro</option>
          <option value="m2">m2</option>
          <option value="m3">m3</option>
          <option value="tonelada">Tonelada</option>
          <option value="unidad">Unidad</option>
        </select>
      </div>

      <div className="w-full flex gap-5">
        <label className="w-1/2 font-semibold">Cantidad</label>
        <input
          type="number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("quantity", { valueAsNumber: true })}
        />
      </div>

      <div className=" w-full flex gap-5">
        <label className="w-1/2 font-semibold">Costo Unidatario</label>
        <input
          type="Number"
          required
          className="w-1/2 bg-gray-200 outline-none px-2"
          {...register("unitCost", { valueAsNumber: true })}
        />
      </div>

      <div className="w-full flex gap-5">
        <p className="w-1/2 font-semibold">Valor Parcial: </p>
        <p className="w-1/2 font-semibold">
          {" "}
          {(quantity * unitCost).toLocaleString("en-US", {
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

      <div className="w-full flex gap-5">
        <p className="w-1/2 font-semibold">Margen de Contribución (MC): </p>
        <p className="w-1/2 font-semibold">
          {" "}
          {((profit / 100) * quantity * unitCost).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>

      <p className="w-full font-semibold text-center">
        Total Materiales:{" "}
        <span>
          {((profit / 100 + 1) * quantity * unitCost).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </p>
    </div>
  );
};
export default MaterialFieldForm;
