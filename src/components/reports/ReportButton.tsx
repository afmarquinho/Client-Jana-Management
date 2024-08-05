import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatServerDate } from "../../helpers/helpers";
import { VisitReportType } from "../../types/types";
import { addReport } from "../../redux/slices/reportSlice";

type Props = {
  item: VisitReportType;
  dias: string;
};

const ReportButton: React.FC<Props> = ({ item, dias = "Días Restantes" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const remainingDays = (date: string) => {
    const futureDate = new Date(date);
    // Get the current date
    const currentDate = new Date();

    // Convert dates to milliseconds
    const currentTime = currentDate.getTime();
    const futureTime = futureDate.getTime();

    // Calculate the difference in milliseconds
    const difference = futureTime - currentTime;

    // Convert difference to days
    const remainingDays = Math.abs(Math.ceil(difference / (1000 * 3600 * 24)));

    return remainingDays;
  };

  const handleClick = (report: VisitReportType) => {
    navigate(`/report-summary/${report.ref}`);
    dispatch(addReport(report));
  };

  return (
    <button
      key={item.ref}
      className={`${
        item.priority === "high"
          ? "border-l-red-600"
          : item.priority === "medium"
          ? "border-l-violet-700"
          : "border-l-blue-500"
      } w-full px-3 py-2 text-xs md:text-sm border border-l-[6px] flex flex-col bg-white space-y-2 hover:bg-gray-300`}
      onClick={() => handleClick(item)}
    >
      <h3 className="font-bold text-left"> {item.name}</h3>
      <h4 className="text-orange-600 font-semibold">{item.customerName}</h4>
      <p className="italic text-left w-full text-xs">
        Vence:{" "}
        <span className=" font-semibold">{formatServerDate(item.dueDate)}</span>
      </p>
      <small>
        {dias}:{" "}
        <span className="font-semibold">{remainingDays(item.dueDate)}</span>
      </small>
      <span className="text-xs w-full text-right">Ver Mas +</span>
    </button>
  );
};
export default ReportButton;
