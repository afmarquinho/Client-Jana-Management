import { TrashIcon } from "@heroicons/react/16/solid";
import { UseFormRegister } from "react-hook-form";
import { VisitReport } from "../../types/types";

type ChildInputProps = {
  register: UseFormRegister<VisitReport>;
};

const ReportFliedForm: React.FC<ChildInputProps> = ({ register }) => {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-customRed"
        id="name"
        {...register("name")}
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2">
          <label htmlFor="visitDate" className="text-sm">
            Fecha de Visita
          </label>
          <input
            type="date"
            className="border-gray-400 border-2 rounded-md px-2 w-full py-1 outline-customRed"
            id="visitDate"
            {...register("customerName")}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="dueDate" className="text-sm">
            Fecha de Entrega
          </label>
          <input
            type="date"
            className="border-gray-400 border-2 rounded-md px-2 w-full py-1 outline-customRed"
            {...register("dueDate")}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Cliente"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
          {...register("customerName")}
        />

        <input
          type="text"
          placeholder="Cuidad"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
          {...register("city")}
        />
      </div>

      <input
        type="text"
        placeholder="Dirección p.e. Calle 35 # 10-45"
        className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-customRed"
        {...register("address")}
      />
      <input
        type="number"
        placeholder="nit p.e. 254781247"
        className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-customRed"
        {...register("nit")}
      />

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="phone"
          placeholder="Teléfono p.e. +573121234567"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
          {...register("phoneNumber")}
        />

        <input
          type="email"
          placeholder="Correo p.e. correo@correo.com"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
          {...register("email")}
        />
      </div>
      <textarea
        placeholder="Descripción"
        className="border-gray-400 border-2 rounded-md px-2 py-1 w-full h-20 resize-none outline-customRed"
        {...register("description")}
      />

      {/* ---------------------------------------------------------------------------------------- */}
      {/* ----------------------------------WORKFORCE SECTION ------------------------------------ */}
      {/* ---------------------------------------------------------------------------------------- */}

      <hr className="m-0 border-gray-400" />
      <small>Agregar Mano de Obra</small>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Mano de Obra"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-2/3 outline-customRed"
        />
        <input
          type="number"
          placeholder="Cantidad"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/3 outline-customRed"
        />
      </div>
      <button
        className="text-xs text-white font-bold bg-blue-500 py-1 px-2 rounded-md
     hover:bg-green-800"
        type="button"
      >
        Agregar
      </button>
      <ul className="">
        <li>
          <button>
            <TrashIcon className="text-red-500 h-4" />
          </button>
        </li>
      </ul>

      {/* ---------------------------------------------------------------------------------------- */}
      {/* ------------------------------------MATERIAL SECTION------------------------------------ */}
      {/* ---------------------------------------------------------------------------------------- */}
      <hr className="m-0 border-gray-400" />
      <small>Agregar Materiales</small>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Material"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-customRed"
        />
        <div className="flex flex-col sm:flex-row gap-1">
          <input
            type="number"
            placeholder="Cantidad"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
          />
          <div className="w-full sm:w-1/2">
            <label htmlFor="unit" className="me-2">
              Unidades
            </label>
            <select id="unit" name="unit" className="outline-customRed">
              <option value="">--Seleccione-- </option>
              <option value="m">Metro</option>
              <option value="m2">m2</option>
              <option value="kg">Kilogramo</option>
              <option value="g">Gramo</option>
              <option value="l">Litro</option>
              <option value="m3">m3</option>
              <option value="u">Unidad</option>
            </select>
          </div>
        </div>
      </div>
      <button
        className="text-xs text-white font-bold bg-blue-500 py-1 px-2 rounded-md
     hover:bg-green-800"
        type="button"
      >
        Agregar
      </button>
      <br />
      <label htmlFor="prioridad" className="me-2">
        Prioridad:
      </label>
      <select className="outline-customRed" {...register("priority")}>
        <option value="">--Seleccione-- </option>
        <option value="hight">Alta</option>
        <option value="middle">Medio</option>
        <option value="low">Baja</option>
      </select>
    </div>
  );
};

export default ReportFliedForm;
