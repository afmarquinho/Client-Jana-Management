import VisitReportForm from "./VisitReportForm"

const VisitReport = () => {
  return (
<>
        <h1 className="font-bold text-center text-xl mb-5">
          Informe de Visita a Obra
        </h1>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <VisitReportForm />

          <div className="w-full md:w-1/2 lg:w-2/3">
            <h2 className="text-center font-bold">
              Visualiza tus informes aquí
            </h2>
            <div className="mt-4 flex flex-wrap gap-5"></div>

            {/* Box to render the buttons of the reports according to their priority. */}
            <div className=" w-full flex flex-col lg:flex-row justify-around align-top gap-5">
              {/* Hight priority */}
              <div className="flex flex-col gap-2">
                <h4 className="text-red-500 font-bold">Alta</h4>
                <button className="p-2 text-xs md:text-sm border border-l-8 border-l-red-500 flex flex-col hover:bg-slate-100">
                  <h3 className="font-bold">Nombre</h3>
                  <h4 className="">Cliente</h4>
                  <h5 className="italic text-end w-full">fecha</h5>
                  <p className="text-left text-xs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt laborum ea quod blanditiis aspernatur soluta
                    facere? Qui assumenda dolore soluta?
                  </p>
                  <span className="text-xs w-full text-right">Ver Mas +</span>
                </button>
                <button className="p-2 text-xs md:text-sm border border-l-8 border-l-red-500 flex flex-col hover:bg-slate-100">
                  <h3 className="font-bold">Nombre</h3>
                  <h4 className="">Cliente</h4>
                  <h5 className="italic text-end w-full">fecha</h5>
                  <p className="text-left text-xs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt laborum ea quod blanditiis aspernatur soluta
                    facere? Qui assumenda dolore soluta?
                  </p>
                  <span className="text-xs w-full text-right">Ver Mas +</span>
                </button>
              </div>
              {/* Medium Priority */}
              <div className="flex flex-col gap-2">
                <h4 className="text-yellow-400 font-bold">Media</h4>
                <button className="p-2 text-xs md:text-sm border border-l-8 border-l-yellow-400 flex flex-col hover:bg-slate-100">
                  <h3 className="font-bold">Nombre</h3>
                  <h4 className="">Cliente</h4>
                  <h5 className="italic text-end w-full">fecha</h5>
                  <p className="text-left text-xs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt laborum ea quod blanditiis aspernatur soluta
                    facere? Qui assumenda dolore soluta?
                  </p>
                  <span className="text-xs w-full text-right">Ver Mas +</span>
                </button>
              </div>
              {/* Low Priority */}
              <div className="flex flex-col gap-2">
                <h4 className="text-blue-600 font-bold">Baja</h4>
                <button className="p-2 text-xs md:text-sm border border-l-8 border-l-blue-600 flex flex-col hover:bg-slate-100">
                  <h3 className="font-bold">Nombre</h3>
                  <h4 className="">Cliente</h4>
                  <h5 className="italic text-end w-full">fecha</h5>
                  <p className="text-left text-xs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Incidunt laborum ea quod blanditiis aspernatur soluta
                    facere? Qui assumenda dolore soluta?
                  </p>
                  <span className="text-xs w-full text-right">Ver Mas +</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default VisitReport