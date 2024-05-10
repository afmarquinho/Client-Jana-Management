const Header = () => {
  return (
    <>
      <div className="bg-customRed500 p-2 flex justify-between align-middle">
        <span className="font-black text-white">JANA</span>
        <div className="text-xs">
          <span className="text-white pe-3">Bienvenido: John Doe </span>
          <button className="bg-white py-1 px-2 rounded-md hover:bg-red-300" type="button">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
