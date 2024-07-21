import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import perfil from "../../assets/background/perfil.jpg";

const DashboardUser = () => {
  return (
    <div className="flex my-4">
      <div>
        <nav className="bg-green-900">
          <div className="w-full p-4">
            <Link
              to="/new-user"
              className="bg-green-400 block w-full p-1 text-center"
            >
              + Nuevo Usuario
            </Link>
          </div>
          <button className="w-full text-left px-4 py-2 text-green-100 hover:bg-green-950 hover:border-l-green-300  hover:border-l-4 hover:ps-3">
            Usuarios
          </button>
          <button className="w-full text-left px-4 py-2 text-green-100 hover:bg-green-950 hover:border-l-green-300  hover:border-l-4 hover:ps-3">
            Usuarios
          </button>
        </nav>
      </div>
      <div className="p-4 pe-0">
        {" "}
        <form action="" className="w-11/12 max-w-72">
          <div className="bg-white h-12 flex items-center border">
            <input
              type="text"
              className="w-72 outline-none p-2"
              placeholder="cc, pe.: 125457825"
            />
            <button
              type="submit"
              className="h-full w-12 flex justify-center items-center bg-green-200"
            >
              <MagnifyingGlassIcon className="h-7 text-gray-600" />
            </button>
          </div>
        </form>
        <div>
          <table className="divide-y divide-gray-400">
            <thead className="">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Nombre
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Correo
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Status
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-400">
              <tr>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={perfil}
                      alt="foto"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  John Doe
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  correo@correo.com
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <span className="bg-green-300 px-2 rounded-xl text-green-700 font-semibold text-xs">
                    Activo
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
                  <Link to="/profile/2">ver</Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={perfil}
                      alt="foto"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  John Doe
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  correo@correo.com
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <span className="bg-green-300 px-2 rounded-xl text-green-700 font-semibold text-xs">
                    Activo
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
                  <Link to="/profile/2">ver</Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={perfil}
                      alt="foto"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  John Doe
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  correo@correo.com
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <span className="bg-green-300 px-2 rounded-xl text-green-700 font-semibold text-xs">
                    Activo
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
                  <Link to="/profile/2">ver</Link>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img
                      src={perfil}
                      alt="foto"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  John Doe
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  correo@correo.com
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                  <span className="bg-green-300 px-2 rounded-xl text-green-700 font-semibold text-xs">
                    Activo
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
                  <Link to="/profile/2">ver</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default DashboardUser;
