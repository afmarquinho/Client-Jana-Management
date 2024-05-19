const Report = () => {
  return (
    <div className="w-full h-60 flex-grow flex flex-col md:flex-row justify-between items-start gap-5">
      <div className="w-full h-full">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-red-500">Alta</h2>
      </div>
      <div className="w-full h-full">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-yellow-500">Media</h2>
      </div>
      <div className="w-full h-full">
        <h2 className="text-sm md:text-base bg-white py-1 px-2 border-b-8 border-blue-600">Baja</h2>
      </div>
    </div>
  );
};

export default Report;
