import { SubmitHandler, useForm } from "react-hook-form";
import { VisitReport } from "../../types/types";
import ReportFieldForm from "./ReportFieldForm";
import { useEffect, useState } from "react";
import { workforce } from "../../types/types";
import { material } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState, AppDispatch } from "../../redux/store";
import {
  sendReportToApi,
  updateReportApi,
} from "../../redux/thunks/reportThunks";
import {
  deactReport,
  activateNewReport,
} from "../../redux/tenders/visitReportSlice";
import { useNavigate } from "react-router-dom";

const ReportForm: React.FC = () => {
  const [workForceArray, setWorkForceArray] = useState<workforce[]>([]);
  const [materialArray, setMaterialArray] = useState<material[]>([]);
  const { register, handleSubmit, setValue } = useForm<VisitReport>();
  const updatedReport = useSelector(
    (state: RootState) => state.visitReport.updatedReport
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  let act: boolean = true;

  useEffect(() => {
    // ? Fill the form with updatedReport data
    if (updatedReport) {
      const visitDate = new Date(updatedReport.visitDate)
        .toISOString()
        .split("T")[0];
      const dueDate = new Date(updatedReport.dueDate)
        .toISOString()
        .split("T")[0];
      setValue("name", updatedReport.name);
      setValue("visitDate", updatedReport.visitDate);
      setValue("dueDate", updatedReport.dueDate);
      setValue("customerName", updatedReport.customerName);
      setValue("city", updatedReport.city);
      setValue("contactName", updatedReport.contactName);
      setValue("phoneNumber", updatedReport.phoneNumber);
      setValue("email", updatedReport.email);
      setValue("priority", updatedReport.priority);
      setValue("description", updatedReport.description);
      setWorkForceArray(updatedReport.workforce);
      setMaterialArray(updatedReport.material);
    }

    return () => {};
  }, [updatedReport, setValue]);

  const onSubmit: SubmitHandler<VisitReport> = async (data) => {
    data.workforce = workForceArray;
    data.material = materialArray;
    if (workForceArray.length === 0) {
      alert("Debe haber al menos una mano de obra");
      return;
    }
    if (materialArray.length === 0) {
      alert("Debe haber al menos un material");
      return;
    }
    data.ref = uuidv4();

    if (updatedReport) {
      let report: any = data;
      report.processed = updatedReport.processed;
      report.tenderID = updatedReport.tenderID;
      report.id = updatedReport.id;
      dispatch(updateReportApi(report));
      dispatch(deactReport());
      dispatch(activateNewReport(!act));
      navigate("/dashboard-report");
      return;
    }
    dispatch(sendReportToApi(data));
    dispatch(deactReport());
    dispatch(activateNewReport(!act));
    navigate("/dashboard-report");
   
  };

  return (
    <form
      action=""
      className="bg-white w-full max-w-2xl mx-auto mb-5 px-8 md:px-16 py-12 space-y-5 flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="on"
    >
      <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
        Informe de <span className="text-gray-500">Visita de Obra</span>
      </h2>
      <ReportFieldForm
        register={register}
        setWorkForceArray={setWorkForceArray}
        setMaterialArray={setMaterialArray}
        workForceArray={workForceArray}
        materialArray={materialArray}
        setValue={setValue}
      />
      <input
        type="submit"
        className="w-full max-w-40 p-2 bg-gradient-to-b from-cyan-700 to-cyan-800
        hover:from-gray-500 hover:to-gray-700
            rounded shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer 
            uppercase text-xs self-end"
        value={updatedReport ? "Editar" : "Guardar"}
      />
    </form>
  );
};

export default ReportForm;
