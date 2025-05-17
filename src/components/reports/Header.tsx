import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Logo from "../Logo";
import perfil from "../../../public/genericPhotoIcon.png";
import { Link } from "react-router-dom";
import { cleanAuthUser } from "../../redux/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.user.authUser);

  const imgProfile = (path: string) => {
    return `${import.meta.env.VITE_API_URL}/${path}`;
  };
  const onClose = () => {
    dispatch(cleanAuthUser())
    localStorage.clear();
    

  };
  

  return (
    <>
      <div className="bg-green-600 py-2">
        <div className="w-11/12 max-w-[90rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="w-52">
            <Logo />
          </div>
          <div className="text-sm flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
            <span className="text-white font-semibold ">{`Bienvenido: ${user?.user}`}</span>
            <div className="h-14 w-14 rounded-full overflow-hidden bg-transparent">
              <img
                src={
                  !user
                    ? perfil
                    : !user.profilePicture
                    ? perfil
                    : imgProfile(user.profilePicture)
                }
                alt="foto"
                className="object-cover w-full h-full"
              />
            </div>
            <button
              className="py-1 px-2 rounded-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-800 hover:to-red-900 text-white shadow shadow-gray-700"
              type="button"
              onClick={onClose}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
      {!!user && user.role === "gerente" && (
        <div className="w-11/12 max-w-[90rem] mx-auto font-medium">
          <Link to="/dashboard-user" className="hover:text-blue-700">
            Administrador de Usuarios
          </Link>{" "}
          &gt;{" "}
          <Link to="/dashboard-report" className="hover:text-blue-700">
            Panel de Informes
          </Link>{" "}
          &gt;{" "}
          <Link to="/dashboard-tender" className="hover:text-blue-700">
            Panel de Cotizaciones
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
