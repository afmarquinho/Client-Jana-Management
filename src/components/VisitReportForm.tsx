import { useFormik } from "formik";
import { useState } from "react";
import { workForceObject } from "../types/types";
import { TrashIcon } from "@heroicons/react/16/solid";

const VisitReportForm: React.FC = () => {
  const [workForceArray, setWorkForceArray] = useState<workForceObject[]>([]);
  const [workForce, setWorkForce] = useState<string>("");
  const [workShift, setWorkShift] = useState<number>(0);

  const addWorkForce = () => {
    if (workForce && workShift > 0) {
      setWorkForceArray([...workForceArray, { workForce, workShift }]);
      //* Otra manera de resolver el llenado del array
      // * setWorkForceArray( prevWorkForceArray =>[...prevWorkForceArray, {workForce, workShift}])
      console.log(workForceArray);
      setWorkForce("");
      setWorkShift(0);
    } else {
      alert("Debe completar los campos de mano de obra y turnos correctamente");
    }
  };

  const deleteWorkForce = (index: number) => {
    const newList = workForceArray.filter((_, i) => i !== index);
    setWorkForceArray(newList);
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      initialValues: {
        name: "",
        visitDate: "",
        dueDate: "",
        customerName: "",
        city: "",
        address: "",
        phoneNumber: "",
        email: "",
        priority: "",
        workforce: [],
        materials: [],
        description: "",
      },
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      action="
        "
      className="w-full md:w-1/2 lg:w-1/3 space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="">Ingresa los datos del informe de visita a obra</h2>
      <input
        type="text"
        placeholder="Nombre"
        className="border-customRed500 border-2 rounded-md px-2 py-1 w-full outline-none"
        name="name"
        onChange={handleChange}
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/2">
          <label htmlFor="visitDate" className="text-sm">
            Fecha de Visita
          </label>
          <input
            type="date"
            className="border-customRed500 border-2 rounded-md px-2 w-full py-1 outline-none"
            name="visitDate"
            onChange={handleChange}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <label htmlFor="dueDate" className="text-sm">
            Fecha de Entrega
          </label>
          <input
            type="date"
            className="border-customRed500 border-2 rounded-md px-2 w-full py-1 outline-none"
            name="dueDate"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Cliente"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-none"
          name="customerName"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Cuidad"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-none"
          name="city"
          onChange={handleChange}
        />
      </div>
      <input
        type="text"
        placeholder="Dirección p.e. Calle 35 # 10-45"
        className="border-customRed500 border-2 rounded-md px-2 py-1 w-full outline-none"
        name="address"
        onChange={handleChange}
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="phone"
          placeholder="Teléfono p.e. +573121234567"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-none"
          name="phoneNumber"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Correo p.e. correo@correo.com"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-none"
          name="email"
          onChange={handleChange}
        />
      </div>
      <textarea
        placeholder="Descripción"
        className="border-customRed500 border-2 rounded-md px-2 py-1 w-full h-20 resize-none outline-none"
        name="description"
        onChange={handleChange}
      ></textarea>
      <hr className="m-0 border-gray-300" />
      <small>Agregar Mano de Obra</small> <br />
      {/*Work Force Section */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Mano de Obra"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-2/3 outline-none"
          value={workForce}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setWorkForce(e.target.value)
          }
        />
        <input
          type="number"
          placeholder="# Turnos"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/3 outline-none"
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
        Agregar Mano de Obra
      </button>
      <ul className="list-decimal">
        {workForceArray.map((item, index) => (
          <li key={index} className=" flex justify-between items-center">
            <span>
              {index + 1}. {item.workForce} -- {item.workShift} Turnos
            </span>
            <button onClick={() => deleteWorkForce(index)}>
              <TrashIcon className="text-red-500 h-4" />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
        type="button"
      >
        {/* *Material Section */}
        Agregar Materiales
      </button>
      
      <label htmlFor="prioridad" className="me-2">
        Prioridad:
      </label>
      <select name="priority" onChange={handleChange}>
        <option value="">--Seleccione-- </option>
        <option value="hight">Alta</option>
        <option value="middle">Medio</option>
        <option value="low">Baja</option>
      </select>
      <input
        type="submit"
        className="w-full p-2 bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer uppercase text-xs"
        value="Guardar"
      />
    </form>
  );
};

export default VisitReportForm;
