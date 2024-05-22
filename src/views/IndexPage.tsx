import LoginForm from "../components/LoginForm";

const IndexPage = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="h-1/2 w-full absolute top-0 left-0 bg-red-500 "></div>
      <div className="h-1/2 w-full absolute bottom-0 left-0"></div>

      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl ">
        {/* Box with the background img*/}
        <div
          className="w-1/2 bg-cover bg-center p-5 hidden sm:flex"
          style={{
            backgroundImage: "url(../src/assets/background/fondo.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p
            className="font-semibold text-2xl text-right p-2 self-end rounded-[15px]
          bg-cyan-800 border-[1px] border-cyan-300 bg-opacity-70 text-white shadow-md shadow-gray-400"
          >
            ¡Bienvenido!
            <br />
            <span className="text-yellow-100 font-black">Simplificando</span>
            {" "}la gestión, <span className="text-yellow-100 font-black">transformando</span>{" "}ofertas en oportunidades.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default IndexPage;
