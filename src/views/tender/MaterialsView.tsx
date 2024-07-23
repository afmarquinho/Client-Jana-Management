import { useSelector } from "react-redux";
import TenderNav from "../../components/tender/TenderNav";
import { RootState } from "../../redux/store";
import TenderName from "../../components/tender/TenderName";

const MaterialsView = () => {

  const tender = useSelector((state: RootState) => state.tender.tender);

  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div className="w-full">
        <TenderName name={tender.name}/>
        Info de materiales aquí
      </div>
    </div>
  );
};
export default MaterialsView;
