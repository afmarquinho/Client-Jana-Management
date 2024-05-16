import { useFormik } from "formik";
import { useState } from "react";
import { workForce } from "../types/types";
import { material } from "../types/types";
import { TrashIcon } from "@heroicons/react/16/solid";
import { addItem } from "../redux/tenders/visitReportSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../redux/store";

const VisitReportForm: React.FC = () => {
  const [workForceArray, setWorkForceArray] = useState<workForce[]>([]);
  const [materialArray, setMaterialArray] = useState<material[]>([]);

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
      console.log(workForceArray);
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
  };
  const deleteMaterial = (index: number) => {
    const newList = materialArray.filter((_, i) => i !== index);
    setMaterialArray(newList);
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      visitDate: "",
      name: "",
      customerName: "",
      city: "",
      address: "",
      phoneNumber: "",
      email: "",
      dueDate: "",
      priority: "",
      description: "",
    },
    onSubmit: (values) => {
      if (workForceArray.length === 0 || materialArray.length === 0) {
        alert("Debe asignar mano de obra y materiales a la cotización");
        return;
      }
      const visitReportData = {
        ...values,
        workforce: workForceArray,
        materials: materialArray,
        id: uuidv4(),
      };
      const dispatch = useDispatch();
      dispatch(addItem(visitReportData));
      const data = useSelector((state: RootState) => state.visitReport.data)
      console.log(data)

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

      {/* Workforce section */}
      <hr className="m-0 border-gray-300" />
      <small>Agregar Mano de Obra</small>
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
          placeholder="Cantidad"
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
        Agregar
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
      <hr className="m-0 border-gray-300" />
      <small>Agregar Materiales</small>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Material"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full outline-none"
          value={material}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMaterial(e.target.value)
          }
        />
        <div className="flex flex-col sm:flex-row gap-1">
          <input
            type="number"
            placeholder="cantidad"
            className="border-customRed500 border-2 rounded-md px-2 py-1 w-full sm:w-1/2 outline-none"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(parseInt(e.target.value))
            }
          />
          <div className="w-full sm:w-1/2">
            <label htmlFor="unit" className="me-2 text-sm">
              Unidades
            </label>
            <select
              id="unit"
              name="unit"
              className="text-sm"
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
          <li key={index} className=" flex justify-between">
            <span>
              {index + 1}. {item.material} -- {item.amount} {item.unit}
            </span>
            <button onClick={() => deleteMaterial(index)}>
              <TrashIcon className="text-red-500 h-4" />
            </button>
          </li>
        ))}
      </ul>

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
