import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { cleanUserEdit } from "../../redux/slices/userSlice";
import { useEffect, useState } from "react";
import UsersTable from "../../components/user/UsersTable";
import HourglassSpinner from "../../components/HourglassSpinner";
import { fetchGetUsers } from "../../redux/thunks/userThunks";

const DashboardUser = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);

  const [filter, setFilter] = useState<string>("all");

  const filteredUsers = users.filter((user) => {
    if (filter === "all") return true;
    if (filter === "active") return user.active === true;
    if (filter === "inactive") return user.active === false;
    return true;
  });

  useEffect(() => {
    dispatch(cleanUserEdit());
    if (users.length <= 0) {
      dispatch(fetchGetUsers());
    }
  }, [dispatch, users]);

  return (
    <>
      {loading ? (
        <HourglassSpinner />
      ) : (
        <div className="flex flex-col md:flex-row my-4">
          <div className="w-[200px]">
            <nav className="bg-sky-950">
              <div className="w-full p-4">
                <Link
                  to="/new-user"
                  className="bg-sky-600 block w-full p-1 text-center text-white hover:bg-sky-700"
                >
                  + Nuevo Usuario
                </Link>
              </div>
            </nav>
          </div>
          <div className="px-0 py-4 md:px-4 md:py-0 w-full">
            <select
              name="userFilter"
              id="userFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mb-5 p-2 border border-gray-300 rounded"
            >
              <option value="all">Todos</option>
              <option value="active">Activos</option>
              <option value="inactive">No Activos</option>
            </select>
            {/* <form action="" className="w-11/12 max-w-72">
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
            </form> */}
            {filteredUsers.length === 0 ? (
              <p className="font-semibold">
                No hay <span className="text-blue-500 font-bold">Usuarios</span>{" "}
                para mostrar. <br />{" "}
              </p>
            ) : (
              <UsersTable users={filteredUsers} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default DashboardUser;
