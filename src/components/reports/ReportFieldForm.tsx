import { TrashIcon } from "@heroicons/react/16/solid";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { VisitReportType } from "../../types/types";
import { WorkforceType } from "../../types/types";
import { MaterialType } from "../../types/types";
import React, { useState } from "react";

type ChildInputProps = {
  register: UseFormRegister<VisitReportType>;
  setValue: UseFormSetValue<VisitReportType>;
  setWorkforceArray: React.Dispatch<React.SetStateAction<WorkforceType[]>>;
  setMaterialArray: React.Dispatch<React.SetStateAction<MaterialType[]>>;
  workforceArray: WorkforceType[];
  materialArray: MaterialType[];
};

const ReportFieldForm: React.FC<ChildInputProps> = ({
  register,
  setWorkforceArray,
  setMaterialArray,
  workforceArray,
  materialArray,
}) => {
  const [role, setRole] = useState<string>("");
  const [workshift, setWorkShift] = useState<number>(0);
  const [material, setMaterial] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");

  const addWorkforce = () => {
    if (role && workshift > 0) {
      setWorkforceArray([...workforceArray, { role, workshift }]);
      setRole("");
      setWorkShift(0);
    } else {
      alert("Debe completar los campos de mano de obra y turnos correctamente");
    }
  };
  const addMaterial = () => {
    if (material && unit && quantity > 0) {
      setMaterialArray([...materialArray, { material, quantity, unit }]);
      setMaterial("");
      setQuantity(0);
      setUnit("");
    } else {
      alert("Debe completar los campos de materiales");
    }
  };

  const deleteWorkForce = (index: number) => {
    const newList = workforceArray.filter((_, i) => i !== index);
    setWorkforceArray(newList);
  };
  const deleteMaterial = (index: number) => {
    const newList = materialArray.filter((_, i) => i !== index);
    setMaterialArray(newList);
  };

  return (
    <div className="space-y-4 w-full">
      <div>
        <label className="text-sm">Nombre del Proyecto</label>
        <input
          type="text"
          placeholder="p.e.: Mantenimiento Preventivo de maquinaria"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2">
          <label htmlFor="visitDate" className="text-sm">
            Fecha de Visita
          </label>
          <input
            type="date"
            className="border-gray-400 border-2 rounded-md px-2 w-full py-1 outline-red-500"
            {...register("visitDate")}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="dueDate" className="text-sm">
            Fecha de Entrega
          </label>
          <input
            type="date"
            className="border-gray-400 border-2 rounded-md px-2 w-full py-1 outline-red-500"
            {...register("dueDate")}
          />
        </div>
      </div>

      <hr className="m-0 border-gray-400" />
      <small>Datos del Cliente</small>
      <div className="gap-2 w-full flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm w-full">Nombre del Cliente</label>
          <input
            type="text"
            placeholder="Ingenio Cali"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            {...register("customerName")}
          />
        </div>

        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm w-full">Ciudad</label>
          <input
            type="text"
            placeholder="p.e.: Cali"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            {...register("customerCity")}
          />
        </div>
      </div>

      <hr className="m-0 border-gray-400" />
      <small>Datos de contacto</small>
      <div className="w-full">
        <label className="text-sm w-full">Nombre</label>
        <input
          type="text"
          placeholder="p.e.: John Doe"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
          {...register("contactName")}
        />
      </div>

      <div className="gap-2 w-full flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm w-full">Teléfono</label>
          <input
            type="text"
            placeholder="p.e.: +573121234567"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            {...register("phoneNumber")}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2">
          <label className="text-sm w-full">Correo</label>
          <input
            type="email"
            placeholder="p.e.: correo@correo.com"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            {...register("email")}
          />
        </div>
      </div>

      <hr className="m-0 border-gray-400" />
      <div>
        <label className="text-sm">Descripción</label>
        <textarea
          placeholder="Descripción"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full h-20 resize-none outline-red-500"
          {...register("description")}
        />
      </div>

      {/* ---------------------------------------------------------------------------------------- */}
      {/* ----------------------------------WORKFORCE SECTION ------------------------------------ */}
      {/* ---------------------------------------------------------------------------------------- */}

      <hr className="m-0 border-gray-400" />
      <small>Agregar Mano de Obra</small>
      <div className="gap-2 w-full flex flex-col sm:flex-row">
        <div className="flex flex-col w-full sm:w-1/2 md:w-2/3">
          <label className="text-sm w-full">Nombre</label>
          <input
            type="text"
            placeholder="Mano de Obra"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            value={role}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRole(e.target.value)
            }
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/3">
          <label className="text-sm w-full">Cant Turnos</label>
          <input
            type="number"
            placeholder="Cantidad"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            value={workshift}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setWorkShift(parseInt(e.target.value))
            }
          />
        </div>
      </div>
      <button
        className="text-xs text-white font-bold bg-blue-500 py-1 px-2 rounded-md
     hover:bg-green-800"
        type="button"
        onClick={addWorkforce}
      >
        Agregar
      </button>

      <ul className="w-full max-w-96">
        {workforceArray.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              {index + 1}. {item.role} -- {item.workshift} Turnos{" "}
            </span>
            <button type="button" onClick={() => deleteWorkForce(index)}>
              <TrashIcon className="text-red-500 h-4" />
            </button>
          </li>
        ))}
      </ul>

      {/* ---------------------------------------------------------------------------------------- */}
      {/* ------------------------------------MATERIAL SECTION------------------------------------ */}
      {/* ---------------------------------------------------------------------------------------- */}
      <hr className="m-0 border-gray-400" />
      <small>Agregar Materiales</small>
      <div className="flex flex-col gap-2">
        <div className="w-full">
          <label className="text-sm w-full">Nombre</label>
          <input
            type="text"
            placeholder="Material"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
            value={material}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMaterial(e.target.value)
            }
          />
        </div>

        <div className="gap-2 w-full flex flex-col sm:flex-row items-center">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm w-full">Cantidad</label>
            <input
              type="number"
              placeholder="Cantidad"
              className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-red-500"
              value={quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuantity(parseInt(e.target.value))
              }
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label htmlFor="unit" className="me-2">
              Unidades
            </label>
            <select
              name="unit"
              className="outline-red-500"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="">--Seleccione-- </option>
              <option value="centimetro">Centímetro</option>
              <option value="galon">Galón</option>
              <option value="gramo">Gramo</option>
              <option value="kilogramo">Kilogramo</option>
              <option value="kit">Kit</option>
              <option value="litro">Litro</option>
              <option value="metro">Metro</option>
              <option value="m2">m2</option>
              <option value="m3">m3</option>
              <option value="tonelada">Tonelada</option>
              <option value="unidad">Unidad</option>
            </select>
          </div>
        </div>

      </div>
      <button
        className="text-xs text-white font-bold bg-blue-500 py-1 px-2 rounded-md
     hover:bg-green-800"
        type="button"
        onClick={addMaterial}
      >
        Agregar
      </button>
      <ul className="w-full max-w-96">
        {materialArray.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>
              {index + 1}. {item.material} -- {item.quantity} {item.unit}
            </span>
            <button type="button" onClick={() => deleteMaterial(index)}>
              <TrashIcon className="text-red-500 h-4" />
            </button>
          </li>
        ))}
      </ul>

      <br />
      <label htmlFor="prioridad" className="me-2">
        Prioridad:
      </label>
      <select className="outline-red-500" {...register("priority")}>
        <option value="">--Seleccione-- </option>
        <option value="high">Alta</option>
        <option value="medium">Medio</option>
        <option value="low">Baja</option>
      </select>
    </div>
  );
};

export default ReportFieldForm;
