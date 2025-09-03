import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
// import photo from "../../public/background/background.png"
import "../components/css/indexView.css";

const IndexView = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="w-1/2 h-full absolute top-0 left-0 bg-sky-950 " />
      <div className="w-1/2 h-full absolute bottom-0 right-0 bg-sky-900" />

      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl shadow-[-10px_13px_49px_0px_rgba(0,0,0,0.48)]">
        {/* Box with the background img*/}
        <div className="box-bg w-1/2 py-2 px-4 bg-cover hidden sm:flex bg-sky-900 bg-no-repeat">
          <div className="w-full">
            <div className="w-full max-w-60">
              <Logo />
            </div>
            <small className="text-white hidden sm:block text-base font-semibold ">
              "Gestión eficiente, <br />
              resultados poderosos."
            </small>
            <h1 className="text-2xl font-black text-sky-300 my-2 w-full">
              ¡Bienvenido a Jana!
            </h1>
            <p className="text-white mb-6">
              Gestione sus procesos con <br />
              eficiencia y precisión. <br />{" "}
              <span className={`text-sky-300`}>
                Inicie sesión para comenzar
              </span>
            </p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default IndexView;
