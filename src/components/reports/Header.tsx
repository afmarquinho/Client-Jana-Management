import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Logo from "../Logo";
import perfil from "../../assets/background/perfil.jpg";

const Header = () => {
  const user = useSelector((state: RootState) => state.user.authUser);

  const imgProfile = (path: string | null) => {
    if (path === null) {
      return perfil;
    } else {
      return `${import.meta.env.VITE_API_URL}/${path}`;
    }
  };

  return (
    <>
      <div className="bg-green-600 py-2">
        <div className="w-11/12 max-w-[70rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="w-52">
            <Logo />
          </div>
          <div className="text-sm flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
            <span className="text-white ">{`Bienvenido: ${user?.name} ${user?.lastName}  `}</span>
            <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src={imgProfile(user.profilePicture)}
                  alt="foto"
                  className="object-cover w-full h-full"
                />
              </div>
            <button
              className="py-1 px-2 rounded-md bg-gradient-to-b from-red-600 to-red-700 hover:from-red-800 hover:to-red-900 text-white shadow shadow-gray-700"
              type="button"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
