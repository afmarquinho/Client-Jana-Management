import Logo from "../Logo";

const Header = () => {
  return (
    <>
      <div className="bg-cyan-800 py-2">
        <div className="w-11/12 max-w-[70rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <Logo />
          <div className="text-xs flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
            <span className="text-white ">Bienvenido: John Doe </span>
            <button
              className="py-1 px-2 rounded-md bg-gradient-to-b from-cyan-500 to-cyan-600 hover:from-red-600 hover:to-red-700 text-white shadow shadow-gray-700"
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
