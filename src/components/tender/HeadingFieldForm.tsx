import { UseFormRegister } from "react-hook-form";
import { HeadingTender } from "../../types/types";
type ChildInputProps = {
  register: UseFormRegister<HeadingTender>;
};

const HeadingFiledForm: React.FC<ChildInputProps> = ({ register }) => {
  return (
    <>
      <div className="w-full space-y-2">
        <div className="flex gap-5">
          <label
            htmlFor=""
            className="w-3/12 font-bold uppercase text-sm italic"
          >
            Proyecto
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("name")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Cliente
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("customerName")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Ingeniero
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("contactName")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Correo Electrónico
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("email")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Teléfono
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("phoneNumber")}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Ciudad
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("customerCity")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Realizó
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("createdBy")}
            readOnly
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Revisó
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("reviewedBy")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Fecha
          </label>
          <input
            type="date"
            className="bg-gray-200 outline-none px-2"
            {...register("date")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Tiempo de entrega
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("leadTime")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Forma de pago
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("paymentMethod")}
          />
        </div>

        <div className="flex gap-5">
          <label htmlFor="" className="w-3/12 font-semibold">
            Validez de la oferta
          </label>
          <input
            type="text"
            className="w-8/12 bg-gray-200 outline-none px-2"
            {...register("proposalValidity")}
          />
        </div>
        <div className="flex justify-center items-center gap-5 font-bold text-lg">
          <label htmlFor="" className="">
            Revisión
          </label>
          <input
            type="number"
            className="py-1 px-2 max-w-14 outline-none"
            {...register("rev")}
          />
        </div>
      </div>
    </>
  );
};
export default HeadingFiledForm;
