const IndexPage = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="h-1/2 w-full absolute top-0 left-0 bg-red-600"></div>
      <div className="h-1/2 w-full absolute bottom-0 left-0 bg-gray-300"></div>
      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl ">
        <div className="w-1/2 relative bg-cover bg-center" style={{backgroundImage: "url(../public/img/fondo.jpg)", backgroundRepeat: "no-repeat"}} >
          <div className="w-full h-full absolute top-0 bottom-0 right-0 left-0" style={{ background: 'linear-gradient(to right bottom, rgba(255, 0, 0, 0.3), rgba(128, 0, 128, 0.4))' }}></div>
          <p className="absolute bottom-0 text-black font-bold text-2xl text-right p-4">
            <span className="text-5xl text-red-800">¡Bienvenido!</span>
            <br />
            <br />
            <span>
              Simplificando la gestión, transformando ofertas en{" "}
              <span className=" text-4xl font-black">oportunidades</span>
            </span>
          </p>
        </div>
        <form action="" className="w-1/2 p-8 bg-white space-y-8">
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
            className="w-full bg-red-600 shadow-gray-400 shadow-md outline-none p-2 text-white font-bold cursor-pointer hover:bg-red-700"
          />
          <button className="w-full font-bold text-right">
            ¿Olvidaste la contraseña?
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
