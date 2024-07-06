import NewUserForm from "../../components/user/NewUserForm"

const NewUser = () => {
  return (
    <>
     <h2 className="text-center font-black text-gray-500 uppercase text-base md:text-xl mb-5">
        Crear <span className=" text-red-600">Nuevo Usuario</span>
      </h2>
      <NewUserForm/>
    </>
)}
export default NewUser