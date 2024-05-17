import { VisitReport } from "../types/types";

type Props = {
  reportArray: VisitReport[];
  onReportClick: (itemReport: VisitReport) => void;
};

const ReportButton: React.FC<Props> = ({ reportArray: reportArray, onReportClick }) => {
  const report = (itemReport: VisitReport) => {
    onReportClick(itemReport);
  };

  return (
    <div className="flex flex-col gap-3">
      {reportArray.map((item) => (
        <>
          <button
            key={item.id}
            className={`${
              item.priority === "hight"
                ? "border-l-red-500"
                : item.priority === "middle"
                ? "border-l-yellow-400"
                : "border-l-blue-600"
            } p-2 text-xs md:text-sm border border-l-[15px]  flex flex-col hover:bg-slate-100`}
            onClick={() => report(item)}
          >
            <h3 className="font-bold text-left"> {item.name}</h3>
            <h4 className="text-orange-600 font-semibold">{item.customerName}</h4>
            <h5 className="italic text-end w-full text-xs">{item.dueDate}</h5>
            <p className="text-left text-xs">{item.description}</p>
            <span className="text-xs w-full text-right">Ver Mas +</span>
          </button>
        </>
      ))}
    </div>
  );
};

export default ReportButton;
