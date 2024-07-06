import { Outlet } from "react-router-dom"


const LayoutUser = () => {
  return (
    <>
    <h1 className="text-gray-500 font-black uppercase text-sm sm:text-xl">
        Administrador de <span className="text-customRed">Usuarios</span>
      </h1>
    <Outlet />
    </>
    
  )
}
export default LayoutUser