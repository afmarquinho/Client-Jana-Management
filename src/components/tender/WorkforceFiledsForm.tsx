import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { LaborType } from "../../types/types";

type ChildInputProps={
    register:UseFormRegister<LaborType>
    watch:UseFormWatch<LaborType>
}
const WorkforceFiledsForm: React.FC<ChildInputProps> = ({register, watch}) => {
    const workers = watch("workers", 0);
  const rate = watch("rate", 0);
  const workshift = watch("workshift", 0);
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
              <label className="w-1/2 font-semibold">
                Número de Trabajadores:
              </label>
              <input
                type="number"
                required
                className="w-1/2 bg-gray-200 outline-none px-2"
                {...register("workers", { valueAsNumber: true })}
              />
            </div>

            <div className="flex gap-5">
              <label className="w-1/2 font-semibold">
                Tasa por Jornada ($)/Trabajador:
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
                {...register("workshift", { valueAsNumber: true })}
              />
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
            <p className="w-full font-semibold text-center">
                {(
                  (profit / 100 + 1) *
                  rate *
                  workers *
                  workshift
                ).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
               
          </div>
  )
}
export default WorkforceFiledsForm