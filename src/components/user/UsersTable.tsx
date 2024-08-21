import { Link } from "react-router-dom";
import { UserType } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import perfil from "../../assets/background/perfil.png";
import { setUserProfile } from "../../redux/slices/userSlice";

type ChildInputProps = {
  users: UserType[];
};

const UsersTable: React.FC<ChildInputProps> = ({ users }) => {
  const dispatch = useDispatch<AppDispatch>();

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

  return (
    <table className="divide-y divide-gray-400 w-full mt-2">
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
              <span
                className={`px-2 rounded-xl  font-semibold text-xs ${
                  item.active === true
                    ? "bg-green-300 text-green-700"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {item.active === true ? "Activo" : "No Activo"}
              </span>
            </td>
            <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify font-bold">
              <Link to={`/profile/${item.id}`} onClick={() => onUser(item)}>
                ver
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default UsersTable;
