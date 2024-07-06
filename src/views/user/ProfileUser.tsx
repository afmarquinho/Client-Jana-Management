import { useState } from "react";
import perfil from "../../assets/background/perfil.jpg";
import { useNavigate } from "react-router-dom";

const ProfileUser = () => {
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate()


  return (
    <div className="bg-gradient-to-tr from-green-400 via-green-600 to-violet-300 flex flex-col p-5 gap-5 mt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-3xl text-white font-thin">John Doe</h2>
      </div>
      <nav className="bg-white px-5 text-green-700 text-sm space-x-4 rounded-xl flex justify-between items-center">
        <div>
          <button
            className={`${
              isActive
                ? "font-bold text-blue-700 border-b-4 border-b-blue-500"
                : ""
            } py-4 px-1 sm:px-4`}
            onClick={() => setIsActive(true)}
          >
            General
          </button>
          <button
            className={`${
              !isActive
                ? "font-bold text-blue-700 border-b-4 border-b-blue-500"
                : ""
            } py-4 px-1 sm:px-4`}
            onClick={() => setIsActive(false)}
          >
            Seguridad
          </button>
        </div>
        <button onClick={()=> navigate(-1)} className="text-black">Atrás</button>
      </nav>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-5">
        <div className="sm:w-1/2 md:w-1/3 flex flex-col justify-start gap-5">
          <div className=" bg-white w-full h-72 rounded-xl flex justify-center items-center">
            <div className="w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden">
              <img
                src={perfil}
                alt="Imagen Perfíl"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className=" bg-white rounded-xl p-5">
            <p className="text-gray-400">Último ingreso</p>
            <p>2 Octubre de 2024</p>
          </div>
          <div></div>
        </div>
        <div className="sm:w-1/2 md:w-2/3 space-y-5">
          {isActive ? (
            <div className=" rounded-xl bg-white p-5">
              <h2 className="font-bold text-green-700">
                Información de Contacto
              </h2>
              <hr className="mb-3 border-gray-400" />
              <p className="text-gray-400">Nombre</p>
              <p className="mb-3">John</p>
              <p className="text-gray-400">Apellido</p>
              <p className="mb-3">Doe</p>
              <p className="text-gray-400">Teléfono</p>
              <p className="mb-3">+57-2314574124</p>
              <p className="text-gray-400">Correo Electrónico</p>
              <p className="mb-3">correo@correo.com</p>
              <p className="text-gray-400">Fecha de Nacimiento</p>
              <p className="mb-3">01/01/1990</p>
              <p className="text-gray-400">Cargo</p>
              <p className="mb-3">Administrador</p>
            </div>
          ) : (
            <div className=" rounded-xl bg-white p-5">
              <h2 className="font-bold text-green-700">Seguridad</h2>
              <hr className="mb-3 border-gray-400" />
              <p className="text-gray-400">Usuario</p>
              <p className="mb-3">DoeJohn</p>
              <p className="text-gray-400">Contraseña</p>
              <p className="mb-3">Doe1245@</p>
              <button className="text-sm font-thin">Cambiar Contraseña</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProfileUser;
