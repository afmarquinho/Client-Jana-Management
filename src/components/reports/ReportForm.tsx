import { SubmitHandler, useForm } from "react-hook-form";
import { VisitReportType } from "../../types/types";
import ReportFieldForm from "./ReportFieldForm";
import { useEffect, useState } from "react";
import { WorkforceType } from "../../types/types";
import { MaterialType } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState, AppDispatch } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { formatServerDate } from "../../helpers/helpers";
import Alert from "../Alert";
import {
  fetchCreateReport,
  fetchEditReport,
  fetchProcessReport,
} from "../../redux/thunks/reportThunks";
// import { fetchCreateTender } from "../../redux/thunks/tenderThunks";
import { Slide, toast, ToastContainer } from "react-toastify";

// TODO: SI EL USUARIO QUIE CREA EL REPORTE TIENE ROL DE ING DE COTIZACIONES ENTONCES QUE SE CREE Y PROCESE DE UNA VEZ, DE ESA MANERA EL ING DE OBRA NO VE ESA COTIZACIÓN EN SU PANEL

export type UserType = {
  name: string;
  lastName: string;
  idType: string;
  userNo: number;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  email: string;
  role: string;
  jobTitle: string;
  user: string;
  password: string;
  id: number;
  profilePicture: string | null;
  active: boolean;
};

const ReportForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { ref } = useParams();

  const report = useSelector((state: RootState) => state.report.report);
  const error = useSelector((state: RootState) => state.report.error);
  const loading = useSelector((state: RootState) => state.report.loading);
  const user = useSelector((state: RootState) => state.user.authUser);
  

  const [workforceArray, setWorkforceArray] = useState<WorkforceType[]>([]);
  const [materialArray, setMaterialArray] = useState<MaterialType[]>([]);

  const { register, handleSubmit, setValue, reset } =
    useForm<VisitReportType>();

  useEffect(() => {
    // ? Fill the form with updatedReport data
    if (ref) {
      if (report === null) {
        return;
      }
      setValue("name", report.name);
      setValue("visitDate", formatServerDate(report.visitDate));
      setValue("dueDate", formatServerDate(report.dueDate));
      setValue("customerName", report.customerName);
      setValue("customerCity", report.customerCity);
      setValue("contactName", report.contactName);
      setValue("phoneNumber", report.phoneNumber);
      setValue("email", report.email);
      setValue("priority", report.priority);
      setValue("description", report.description);
      setWorkforceArray(report.workforces);
      setMaterialArray(report.materials);
      setValue("ref", report.ref);
      setValue("userId", report.userId);
    }
  }, [ref, report, setValue]);

  const onSubmit: SubmitHandler<VisitReportType> = async (data) => {
    if(!user) return

    if (workforceArray.length === 0) {
      alert("Debe haber al menos una mano de obra");
      return;
    }
    if (materialArray.length === 0) {
      alert("Debe haber al menos un material");
      return;
    }

    data.workforces = workforceArray;
    data.materials = materialArray;

    if (!report) {
      //* IF REPORT IF FULLIED IT MEANS I AM EDITING, OTHERWISE I AM CREANTING A NEW ONE
      data.ref = uuidv4();
       

      data.userId = user.id;
   

      if (user?.role !== "ingObra") {
        //   //* ONLY IF USER IS DIFFERNT TO INGOBRA THE REPORT IS IMEDIATLY PROCESSED
        data.processed = true;
      }
    }

    //*EDIT REPORT AS REPORT STATUS IS FULLFILLED
    if (report && report.id) {
      const resultAction = await dispatch(
        fetchEditReport({ id: report.id, data })
      );
      if (fetchEditReport.fulfilled.match(resultAction)) {
        alert("Informe actualizado exitosamente");
        reset();
        navigate(-1);
      } else {
        alert(
          "Ocurrió un error al editar el informe, revise los datos cuidadosamente"
        );
      }
      //* CREATE REPORT
    } else {

      const resultAction = await dispatch(fetchCreateReport(data));
      if (fetchCreateReport.fulfilled.match(resultAction)) {
        toast.success("¡Informe creado exitosamente!", {
          transition: Slide,
        });
       
        reset();
        navigate(-1);

        //*CREATE TENDER ONLY IF USER IS DIFFERENT TO INGOBRA
        if (user.role !== "ingObra") {
          await dispatch(fetchProcessReport({reportId: resultAction.payload.id,
            userId: resultAction.payload.userId,
            dueDate:data.dueDate
          }));
        }
        
      } else {
        toast.error(`${resultAction.error.message}`, {
          transition: Slide,
          autoClose: 8000,
          theme: "colored",
        });
        
      }
    }
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="on"
      className="bg-white w-full max-w-3xl mx-auto mb-5 px-10 md:px-16 py-12 space-y-5 flex flex-col items-center shadow-md rounded-lg overflow-hidden"
    >
      <h2 className="text-center font-black text-red-600 uppercase text-base md:text-xl">
        Informe de <span className="text-gray-500">Visita de Obra</span>
      </h2>
      {error && <Alert msg={error} />}
      <ReportFieldForm
        register={register}
        setWorkforceArray={setWorkforceArray}
        setMaterialArray={setMaterialArray}
        workforceArray={workforceArray}
        materialArray={materialArray}
        setValue={setValue}
      />
      <input
        type="submit"
        className="w-full max-w-40 p-2 bg-gradient-to-b from-cyan-700 to-cyan-800
        hover:from-gray-500 hover:to-gray-700 cursor-pointer uppercase text-xs self-end text-white font-semibold"
        value={report ? "Editar" : "Guardar"} disabled={loading}
      />
      <ToastContainer/>
    </form>
  );
};

export default ReportForm;
