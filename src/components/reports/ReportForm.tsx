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
import { useNavigate } from "react-router-dom";
import { formatServerDate } from "../../helpers/helpers";
import Alert from "../Alert";

// TODO: SI EL USUARIO QUIE CREA EL REPORTE TIENE ROL DE ING DE COTIZACIONES ENTONCES QUE SE CREE Y PROCESE DE UNA VEZ, DE ESA MANERA EL ING DE OBRA NO VE ESA COTIZACIÓN EN SU PANEL

const ReportForm: React.FC = () => {
  const [workForceArray, setWorkForceArray] = useState<workforce[]>([]);
  const [materialArray, setMaterialArray] = useState<material[]>([]);

  const { register, handleSubmit, setValue } = useForm<VisitReport>();
  const updatedReport = useSelector(
    (state: RootState) => state.visitReport.updatedReport
  );
  const errorMsg = useSelector(
    (state: RootState) => state.visitReport.errorMsg
  );
  const [successfulSubmitting, setSuccessfulSubmitting] = useState<string>(""); //* estado local para evitar la redirección automatica en el effect

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    // ? Fill the form with updatedReport data
    if (updatedReport) {
      setValue("name", updatedReport.name);
      setValue("visitDate", formatServerDate(updatedReport.visitDate));
      setValue("dueDate", formatServerDate(updatedReport.dueDate));
      setValue("customerName", updatedReport.customerName);
      setValue("customerCity", updatedReport.customerCity);
      setValue("contactName", updatedReport.contactName);
      setValue("phoneNumber", updatedReport.phoneNumber);
      setValue("email", updatedReport.email);
      setValue("priority", updatedReport.priority);
      setValue("description", updatedReport.description);
      setWorkForceArray(updatedReport.workforce);
      setMaterialArray(updatedReport.material);
    }
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
    data.createdBy = "John Doe";

    if (updatedReport) {
      const report: any = data;
      report.tenderID = updatedReport.tenderID;
      report.processed = updatedReport.processed;
      report.id = updatedReport.id;
      await dispatch(updateReportApi(report));
      return setSuccessfulSubmitting("ok");
    } else {
      await dispatch(sendReportToApi(data));
      return setSuccessfulSubmitting("ok");
    }
  };

  useEffect(() => {
    if (successfulSubmitting === "ok") {
      if (!errorMsg) {
        navigate(-1);
      } else {
        console.log(errorMsg);
        setSuccessfulSubmitting("");
      }
    }
  }, [errorMsg, navigate, successfulSubmitting]);

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="on"
      className="bg-white w-full max-w-2xl mx-auto mb-5 px-10 md:px-16 py-12 space-y-5 flex flex-col items-center shadow-md rounded-lg overflow-hidden"
    >
      <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
        Informe de <span className="text-gray-500">Visita de Obra</span>
      </h2>
      {errorMsg && <Alert msg={errorMsg} />}
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
        hover:from-gray-500 hover:to-gray-700 cursor-pointer uppercase text-xs self-end text-white font-semibold"
        value={updatedReport ? "Editar" : "Guardar"}
      />
    </form>
  );
};

export default ReportForm;
