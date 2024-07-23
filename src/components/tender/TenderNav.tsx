import { NavLink } from "react-router-dom";

const TenderNav: React.FC = () => {
  return (
    <div>
      <nav className="bg-green-900 text-white w-36">
        <div className="p-4">
          <NavLink
            to="#"
            className="text-black text-center bg-green-400 py-2 hover:bg-green-700 block w-full hover:text-white"
          >
            Resúmen
          </NavLink>
        </div>
        <NavLink
          to="/tender-editing-heading"
          className={({ isActive }) =>
            isActive
              ? "text-black border-l-4 ps-3 py-3 border-l-green-300 bg-green-400 block w-full"
              : "text-green-100 border-l-4 ps-3 py-3 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 block w-full"
          }
        >
          Encabezado
        </NavLink>
        <NavLink
          to="/tender-editing-workforce"
          className={({ isActive }) =>
            isActive
              ? "text-black border-l-4 ps-3 py-3 border-l-green-300 bg-green-400 block w-full"
              : "text-green-100 border-l-4 ps-3 py-3 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 block w-full"
          }
        >
          Mano de Obra
        </NavLink>
        <NavLink
          to="/tender-editing-materials"
          className={({ isActive }) =>
            isActive
              ? "text-black border-l-4 ps-3 py-3 border-l-green-300 bg-green-400 block w-full"
              : "text-green-100 border-l-4 ps-3 py-3 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 block w-full"
          }
        >
          Materiales
        </NavLink>
        <NavLink
          to="/tender-editing-descriptions"
          className={({ isActive }) =>
            isActive
              ? "text-black border-l-4 ps-3 py-3 border-l-green-300 bg-green-400 block w-full"
              : "text-green-100 border-l-4 ps-3 py-3 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 block w-full"
          }
        >
          Descripciones
        </NavLink>
        <NavLink
          to="/tender-editing-notes"
          className={({ isActive }) =>
            isActive
              ? "text-black border-l-4 ps-3 py-3 border-l-green-300 bg-green-400 block w-full"
              : "text-green-100 border-l-4 ps-3 py-3 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 block w-full"
          }
        >
          Observaciones
        </NavLink>
      </nav>
    </div>
  );
};
export default TenderNav;
