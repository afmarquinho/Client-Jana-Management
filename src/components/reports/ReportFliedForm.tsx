import { TrashIcon } from "@heroicons/react/16/solid";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { VisitReport } from "../../types/types";
import { workForce } from "../../types/types";
import { material } from "../../types/types";
import {  useState } from "react";

type ChildInputProps = {
  register: UseFormRegister<VisitReport>;
  setValue: UseFormSetValue<VisitReport>;
  setWorkForceArray: (data: workForce[]) => void;
  setMaterialArray: (data: material[]) => void;

  workForceArray: workForce[];
  materialArray: material[];
};

const ReportFliedForm: React.FC<ChildInputProps> = ({
  register,
  setWorkForceArray,
  setMaterialArray,
  workForceArray,
  materialArray,
  
}) => {
  const [workForce, setWorkForce] = useState<string>("");
  const [workShift, setWorkShift] = useState<number>(0);
  const [material, setMaterial] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [unit, setUnit] = useState<string>("");
 
  const addWorkForce = () => {
    if (workForce && workShift > 0) {
      setWorkForceArray([...workForceArray, { workForce, workShift }]);
      //* Otra manera de resolver el llenado del array
      // * setWorkForceArray( prevWorkForceArray =>[...prevWorkForceArray, {workForce, workShift}])

      setWorkForce("");
      setWorkShift(0);
    } else {
      alert("Debe completar los campos de mano de obra y turnos correctamente");
    }
  };
  const addMaterial = () => {
    if (material && unit && amount > 0) {
      setMaterialArray([...materialArray, { material, amount, unit }]);
      setMaterial("");
      setAmount(0);
      setUnit("");
    } else {
      alert("Debe completar los campos de materiales");
    }
  };

  const deleteWorkForce = (index: number) => {
    const newList = workForceArray.filter((_, i) => i !== index);
    setWorkForceArray(newList);
    console.log(workForceArray);
  };
  const deleteMaterial = (index: number) => {
    const newList = materialArray.filter((_, i) => i !== index);
    setMaterialArray(newList);
    console.log(materialArray);
  };

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
          value={workForce}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWorkForce(e.target.value)
          }
        />
        <input
          type="number"
          placeholder="Cantidad"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/3 outline-customRed"
          value={workShift}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWorkShift(parseInt(e.target.value))
          }
        />
      </div>
      <button
        className="text-xs text-white font-bold bg-blue-500 py-1 px-2 rounded-md
     hover:bg-green-800"
        type="button"
        onClick={addWorkForce}
      >
        Agregar
      </button>

      <ul className="">
        {workForceArray.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>
              {index + 1}. {item.workForce} -- {item.workShift} Turnos{" "}
            </span>
            <button onClick={() => deleteWorkForce(index)}>
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
        <input
          type="text"
          placeholder="Material"
          className="border-gray-400 border-2 rounded-md px-2 py-1 w-full outline-customRed"
          value={material}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMaterial(e.target.value)
          }
        />
        <div className="flex flex-col sm:flex-row gap-1">
          <input
            type="number"
            placeholder="Cantidad"
            className="border-gray-400 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-customRed"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(parseInt(e.target.value))
            }
          />
          <div className="w-full sm:w-1/2">
            <label htmlFor="unit" className="me-2">
              Unidades
            </label>
            <select
              id="unit"
              name="unit"
              className="outline-customRed"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
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
        onClick={addMaterial}
      >
        Agregar
      </button>
      <ul className="">
        {materialArray.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span>
              {index + 1}. {item.material} -- {item.amount} {item.unit}
            </span>
            <button onClick={() => deleteMaterial(index)}>
              <TrashIcon className="text-red-500 h-4" />
            </button>
          </li>
        ))}
      </ul>

      <br />
      <label htmlFor="prioridad" className="me-2">
        Prioridad:
      </label>
      <select className="outline-customRed" {...register("priority")}>
        <option value="">--Seleccione-- </option>
        <option value="high">Alta</option>
        <option value="middle">Medio</option>
        <option value="low">Baja</option>
      </select>
    </div>
  );
};

export default ReportFliedForm;
