import { VisitReport } from "../types/types";

type Props = {
  report: VisitReport[];
};

const ReportButton: React.FC<Props> = ({ report }) => {
  return (
    <div className="flex flex-col gap-3">
      {report.map((item) => (
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
          >
            <h3 className="font-bold"> {item.name}</h3>
            <h4 className="">{item.customerName}</h4>
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
