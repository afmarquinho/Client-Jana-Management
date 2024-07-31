import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import perfil from "../../assets/background/perfil.jpg";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { cleanUserEdit, fetchGetUsers, setUserProfile } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import { UserType } from "../../types/types";

const DashboardUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);


  const imgProfile = (path: string | null) => {
    if (path === null) {
      return perfil; 
    } else {
      return `${import.meta.env.VITE_API_URL}/${path}`;
    }
  };

  const onUser = (item: UserType) => {
    dispatch(setUserProfile(item));
  };

  useEffect(() => {
    dispatch(cleanUserEdit())
    if (users.length <= 0) {
      dispatch(fetchGetUsers());
    }
  }, [dispatch, users]);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex my-4">
          <div>
            <nav className="bg-green-900">
              <div className="w-full p-4">
                <Link
                  to="/new-user"
                  className="bg-green-400 block w-full p-1 text-center hover:bg-green-700 hover:text-white"
                >
                  + Nuevo Usuario
                </Link>
              </div>
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
                  {users.map((item, i) => (
                    <tr key={i}>
                      <td
                        className="px-4 py-2 whitespace-normal text-sm text-gray-900 text-justify"
                        key={i}
                      >
                        <div className="h-16 w-16 rounded-full overflow-hidden">
                          <img
                            src={imgProfile(item.profilePicture)}
                            alt="foto"
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                        {`${item.name} ${item.lastName}`}
                      </td>
                      <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                        {item.email}
                      </td>
                      <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify">
                        <span className={`px-2 rounded-xl  font-semibold text-xs ${item.active === true? "bg-green-300 text-green-700": "bg-gray-300 text-gray-800"}`}>
                         {item.active === true ? "Activo": "No Activo" }
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
                        <Link
                          to={`/profile/${item.id}`}
                          onClick={() => onUser(item)}
                        >
                          ver
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardUser;
