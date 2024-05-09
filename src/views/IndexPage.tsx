import LoginForm from "../components/LoginForm";

const IndexPage = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="h-1/2 w-full absolute top-0 left-0 bg-customRed500 "></div>
      <div className="h-1/2 w-full absolute bottom-0 left-0 bg-customGray"></div>

      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl ">
        {/* Box with the background img*/}
        <div
          className="w-1/2 relative bg-cover bg-center p-5 hidden sm:flex"
          style={{
            backgroundImage: "url(../public/img/fondo.jpg)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p
            className="font-bold text-2xl text-right p-4 self-end rounded-md
          bg-customRed500 bg-opacity-85 text-white shadow-md shadow-gray-400"
          >
            ¡Bienvenido!
            <br />
            Simplificando la gestión, transformando ofertas en oportunidades.
          </p>
        </div>
        <LoginForm/>
      </div>
    </div>
  );
};

export default IndexPage;
