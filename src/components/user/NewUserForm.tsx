import NewUserFiledsForm from "../../views/user/NewUserFieldsForm";

const NewUserForm = () => {
  return (
    <form className="bg-white p-5 w-full">
      <NewUserFiledsForm />
      <input
        type="submit"
        value="CREAR"
        className="my-5 bg-gradient-to-b from-green-600 to-green-700 hover:from-blue-900 hover:to-blue-950 text-white shadow shadow-gray-700 px-7 py-1 cursor-pointer rounded-sm text-sm"
      />
    </form>
  );
};
export default NewUserForm;
