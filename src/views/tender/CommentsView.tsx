import { useSelector } from "react-redux";
import TenderNav from "../../components/tender/TenderNav";
import { RootState } from "../../redux/store";

const CommentsView = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  return (
    <div className="my-5 flex gap-5">
      <TenderNav />
      <div className="w-full max-w-[500px]">
        {!tender ? 0 : 
        tender.comments.length
          ? tender.comments.map((item, i) => (
              <div key={i} className="mb-8">
                <p className="w-full text-sm font-medium">{item.author}</p>
                <p className="w-full bg-gray-200 rounded-lg p-5">
                  {item.comment}
                </p>
              </div>
            ))
          : "No hay comentarios en esta cotización"}
      </div>
    </div>
  );
};
export default CommentsView;
