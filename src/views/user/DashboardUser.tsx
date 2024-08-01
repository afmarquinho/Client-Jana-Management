import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { cleanUserEdit, fetchGetUsers } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import UsersTable from "../../components/user/UsersTable";

const DashboardUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);

  const activeUsers = users.filter((user) => user.active === true);
  const deactiveUsers = users.filter((user) => user.active === false);

  const loading = useSelector((state: RootState) => state.user.loading);

  useEffect(() => {
    dispatch(cleanUserEdit());
    if (users.length <= 0) {
      dispatch(fetchGetUsers());
    }
  }, [dispatch, users]);

  return (
    <>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex flex-col md:flex-row my-4">
          <div className="w-[200px]">
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
          <div className="px-0 py-4 md:px-4 md:py-0 w-full">
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
            <UsersTable users={activeUsers}/>
            <h2 className="font-medium text-xl text-gray-600 mt-7">Usuarios <span className="text-red-500">No Activos</span></h2>
            <UsersTable users={deactiveUsers}/>
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardUser;
