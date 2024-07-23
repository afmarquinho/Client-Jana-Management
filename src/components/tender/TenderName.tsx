type ChildInputProps = {
  name: string;
};

const TenderName: React.FC<ChildInputProps> = ({ name }) => {
  return (
    <h2 className="italic text-gray-800 text-lg sm:text-2xl font-semibold mb-4">
      {name}
    </h2>
  );
};
export default TenderName;
