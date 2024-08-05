import { useSelector } from "react-redux";
import HeadingForm from "../../components/tender/HeadingForm";
import TenderName from "../../components/tender/TenderName";
import TenderNav from "../../components/tender/TenderNav";
import { RootState } from "../../redux/store";

const NewTenderView = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div className="w-full">
        <TenderName name={tender ? tender.name : ""} />
        <HeadingForm />
      </div>
    </div>
  );
};
export default NewTenderView;
