
const LoginForm = () => {
  return (
    <form action="" className="w-full sm:w-1/2 p-8 bg-white space-y-8">
          <h1 className="text-4xl font-black text-center">
            Logo <br /> <span className="text-red-600">JANA</span>
          </h1>
          <input
            type="text"
            className="w-full border border-red-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
            placeholder="usuario"
          />
          <input
            type="password"
            className="w-full border border-red-600 rounded-md shadow-gray-400 shadow-md outline-none p-2"
            placeholder="contraseña"
          />
          <input
            type="submit"
            className="w-full p-2 bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer"
          />
          <button className="w-full text-right">
            ¿Olvidaste la contraseña?
          </button>
        </form>
  )
}

export default LoginForm