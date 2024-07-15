import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const IndexView = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="w-1/2 h-full absolute top-0 left-0 bg-green-600 "></div>
      <div className="w-1/2 h-full absolute bottom-0 right-0 bg-green-400"></div>

      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl shadow-[-10px_13px_49px_0px_rgba(0,0,0,0.48)]">
        {/* Box with the background img*/}
        <div
          className="w-1/2 p-5 bg-cover hidden sm:flex bg-green-400"
          style={{
            backgroundImage: "url(../src/assets/background/fondo2.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "30% 50%",
          }}
        >
          <div className="w-full">
            <div className="w-2/3">
              <Logo />
            </div>
            <small className="text-black font-semibold hidden sm:block text-sm ">
              "Gestión eficiente, resultados poderosos."
            </small>
            <h1 className="text-3xl font-black text-blue-950 mt-8 mb-4">
              ¡Bienvenido a Jana!
            </h1>
            <p className="text-black font-bold mb-6">
              Gestione sus procesos con eficiencia y precisión. Inicie sesión
              para comenzar.
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default IndexView;
