import { UseFormRegister } from "react-hook-form";
import { UserFormType } from "../../types/types";
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  EyeIcon,
  UserIcon,
  BriefcaseIcon,
  KeyIcon,
  EyeSlashIcon,
} from "@heroicons/react/16/solid";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";

type ChildInputProps = {
  register: UseFormRegister<UserFormType>;
};

const NewUserFieldsForm: React.FC<ChildInputProps> = ({ register }) => {
  const userEdit = useSelector((state: RootState) => state.user.userEdit);
  const [isActiveEyeSlahed, setIsActiveEyeSlahed] = useState<boolean>(false);
  
  const onEye = () => {
    setIsActiveEyeSlahed(!isActiveEyeSlahed)
  };
  

  return (
    <div className="w-full space-y-3">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <UserCircleIcon
            className={`h-6 ${userEdit ? "text-gray-400" : "text-gray-500"}`}
          />
          <input
            type="text"
            placeholder="Nombre"
            className={`outline-none w-full p-2 bg-transparent placeholder:text-gray-500 ${
              userEdit ? "text-gray-400" : "text-black"
            }`}
            {...register("name")}
            disabled={userEdit ? true : false}
          />
        </div>
        <div
          className={`w-full flex items-center justify-between px-1 rounded-sm bg-gray-200 ${
            userEdit ? "text-gray-400" : "text-black"
          }`}
        >
          <UserCircleIcon className="h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Apellido"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("lastName")}
            disabled={userEdit ? true : false}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-start px-1 rounded-sm bg-gray-200">
          <label
            className={`w-full px-1 ${
              userEdit ? "text-gray-400" : "text-black"
            }`}
          >
            Tipo de identificación:{" "}
          </label>
          <select
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("idType")}
            disabled={userEdit ? true : false}
          >
            <option value="" className="bg-gray-200">
              -- Seleccione --
            </option>
            <option value="cc" className="bg-gray-200">
              Cédula de ciudadanía
            </option>
            <option value="ce" className="bg-gray-200">
              Cédula de extrangería
            </option>
            <option value="passport" className="bg-gray-200">
              Pasaporte
            </option>
          </select>
        </div>
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <KeyIcon
            className={`h-6 ${userEdit ? "text-gray-400" : "text-gray-500"}`}
          />{" "}
          <input
            type="number"
            placeholder="N° de identificación"
            className={`outline-none w-full p-2 bg-transparent placeholder:text-gray-500 ${
              userEdit ? "text-gray-400" : "text-black"
            }`}
            {...register("userNo", { valueAsNumber: true })}
            disabled={userEdit ? true : false}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-start px-1 rounded-sm bg-gray-200">
          <label
            className={`w-full px-1 ${
              userEdit ? "text-gray-400" : "text-black"
            }`}
          >
            Fecha de nacimiento:{" "}
          </label>
          <input
            type="date"
            className={`outline-none w-full p-2 bg-transparent placeholder:text-gray-500 ${
              userEdit ? "text-gray-400" : "text-black"
            } `}
            {...register("dateOfBirth")}
          />
        </div>
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <MapPinIcon className="h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Dirección"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("address")}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <PhoneIcon className="h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Teléfono"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("phoneNumber")}
          />
        </div>
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <EnvelopeIcon className="h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Correo Electrónico"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("email")}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <BriefcaseIcon className="h-6 text-gray-500" />{" "}
          <input
            type="text"
            placeholder="Cargo"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("jobTitle")}
          />
        </div>
        <div className="w-full flex items-center justify-start px-1 rounded-sm bg-gray-200">
          <label className="w-1/3 px-1">Rol: </label>
          <select
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("role")}
          >
            <option value="" className="bg-gray-200">
              -- Seleccione --
            </option>
            <option className="bg-gray-200" value="gerente">
              Gerente
            </option>
            <option className="bg-gray-200" value="ingObra">
              Ingeniero de Obras
            </option>
            <option className="bg-gray-200" value="ingCotizacion">
              Ingeniero de Cotizaciones
            </option>
            <option className="bg-gray-200" value="admin">
              Administrador
            </option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200">
          <UserIcon className="h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Usuario"
            className="outline-none w-full p-2 bg-transparent placeholder:text-gray-500"
            {...register("user")}
          />
        </div>
        <div className="w-full flex items-center justify-between px-1 rounded-sm bg-gray-200 pe-2">
          <KeyIcon
            className={`h-6 ${userEdit ? "text-gray-400" : "text-gray-500"}`}
          />
          <input
            type={`${isActiveEyeSlahed ? "text" : "password"}`}
            placeholder="Contraseña"
            className={`outline-none w-full p-2 bg-transparent placeholder:text-gray-500 ${
              userEdit ? "text-gray-400" : "text-black"
            }`}
            {...register("password")}
            disabled={userEdit ? true : false}
          />
          <button type="button" onClick={onEye}  disabled={userEdit ? true : false}>
            {isActiveEyeSlahed ? (
              <EyeSlashIcon className="h-5 text-gray-500" />
            ) : (
              <EyeIcon
                className="h-5 text-gray-500"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewUserFieldsForm;
