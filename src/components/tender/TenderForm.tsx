import TenderFiledForm from "./TenderFiledForm";

const TenderForm = () => {
  return (
    <form className="bg-white w-full max-w-5xl mx-auto mb-5 px-8 md:px-16 py-12 space-y-5 flex flex-col items-center">
      <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
        Nueva <span className="text-gray-500">Cotización</span>
      </h2>

      <TenderFiledForm />
      <input
        type="sumit"
        value="Crear Cotización"
        className="bg-gradient-to-b from-cyan-700 to-cyan-800 hover:bg-gradient-to-b
        hover:from-gray-500 hover:to-gray-700
            rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-center px-3 py-2 text-sm"
      />
    </form>
  );
};
export default TenderForm;
