import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";

const IndexView = () => {
  return (
    <div className="h-screen flex justify-center items-center relative">
      <div className="w-1/2 h-full absolute top-0 left-0 bg-cyan-800 "></div>
      <div className="w-1/2 h-full absolute bottom-0 right-0 bg-white"></div>

      {/* central container with children */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-11/12 max-w-3xl shadow-[-10px_13px_49px_0px_rgba(0,0,0,0.48)]">
        {/* Box with the background img*/}
        <div
          className="w-1/2 p-5 bg-cover hidden sm:flex bg-cyan-800"
          style={{
            backgroundImage: "url(../src/assets/background/fondo2.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "30% 50%",
          }}
        >
          <div className="">
            <Logo />
            <p className="font-bold text-white text-2xl mb-2 tracking-widest">Bienvenido!!!</p>
            
              <small className="text-white hidden sm:block font-semibold text-lg w-2/3 leading-5">
                {" "}
                <span className="text-yellow-200 font-bold">Optimiza</span> tus procesos,{" "}
                <span className="text-yellow-200 font-bold">maximiza</span> tu éxito.
              </small>
            
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default IndexView;
