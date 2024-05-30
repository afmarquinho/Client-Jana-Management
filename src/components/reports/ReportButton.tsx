import { useDispatch } from "react-redux";
import { actReport } from "../../redux/tenders/visitReportSlice";
import { VisitReport } from "../../types/types";

type Props = {
  item: VisitReport;
};

const ReportButton: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(actReport(item))
  };

  return (
    <button
      key={item.id}
      className={`${
        item.priority === "high"
          ? "border-l-customRed"
          : item.priority === "medium"
          ? "border-l-yellow-400"
          : "border-l-blue-600"
      } w-full p-2 text-xs md:text-sm border border-l-[3px] flex flex-col bg-white hover:bg-zinc-200`}
      onClick={handleClick}
    >
      <h3 className="font-bold text-left"> {item.name}</h3>
      <h4 className="text-orange-600 font-semibold">{item.customerName}</h4>
      <h5 className="italic text-end w-full text-xs">{item.dueDate}</h5>
      <p className="text-left text-xs">{item.description}</p>
      <span className="text-xs w-full text-right">Ver Mas +</span>
    </button>
  );
};
export default ReportButton;
