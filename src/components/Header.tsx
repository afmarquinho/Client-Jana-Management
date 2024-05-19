import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="bg-customBgGray py-5 sm:py-2 ">
        <div className="w-11/12 max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Logo />
          <div className="text-xs flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
            <span className="text-white ">Bienvenido: John Doe </span>
            <button
              className="py-1 px-2 rounded-md bg-cyan-100 hover:bg-customCyan"
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
