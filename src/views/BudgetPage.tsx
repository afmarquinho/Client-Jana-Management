const BudgetPage = () => {
  return (
    <>
      <h1 className="font-bold text-center text-xl">
        Informe de Visita a Obra
      </h1>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <form
          action="
        "
          className="w-full md:w-1/2 lg:w-1/3 space-y-4"
        >
          <h2 className="text-center font-bold">Ingresa el informe aquí</h2>
          <input
            type="text"
            placeholder="Nombre"
            className="border-customRed500 border-2 rounded-md px-2 py-1 w-full"
          />
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Cliente"
              className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2"
            />
            <input
              type="text"
              placeholder="Cuidad"
              className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Descripción"
            className="border-customRed500 border-2 rounded-md px-2 py-1 w-full h-20 resize-none"
          ></textarea>
          <div>
            <button
              className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
              type="button"
            >
              Agregar Mano de Obra
            </button>
            <div className="my-3 flex justify-start flex-wrap">
              <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
                Operarios - 5 turnos
                <button className="pl-5 text-customRed500 font-black">X</button>
              </span>
              <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
                Operarios - 5 turnos
                <button className="pl-5 text-customRed500 font-black">X</button>
              </span>
              <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
                Operarios - 5 turnos
                <button className="pl-5 text-customRed500 font-black">X</button>
              </span>
              <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
                Operarios - 5 turnos
                <button className="pl-5 text-customRed500 font-black">X</button>
              </span>
            </div>
          </div>
          <input
            type="submit"
            className="w-full p-2 bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer uppercase text-xs"
            value="Guardar"
          />
        </form>
        <div className="w-full md:w-1/2 lg:w-2/3">
          <h2 className="text-center font-bold">Visualiza tus informe aquí</h2>
          <div className="mt-4 flex flex-wrap gap-5">
            
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
            <button className="w-80 p-2 text-xs md:text-sm border border-l-8 border-l-orange-500 flex flex-col hover:bg-slate-100">
              <h3 className="font-bold">Nombre</h3>
              <h4 className="">Cliente</h4>
              <h5 className="italic text-end w-full">fecha</h5>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt laborum ea quod blanditiis aspernatur soluta facere?
                Qui assumenda dolore soluta?
              </p>
            </button>
           
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetPage;
