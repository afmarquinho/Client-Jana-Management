import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import WorkforceMaterialModal from "./modals/WorkforceMaterialModal";


const VisitReportForm = () => {
  return (
    <Formik
      initialValues={{
        nombre: "",
        cliente: "",
        ciudad: "",
        descripcion: "",
        prioridad: "",
      }}
      validationSchema={Yup.object({
        nombre: Yup.string().required("El nombre es obligatorio"),
        cliente: Yup.string().required("El cliente es obligatorio"),
        ciudad: Yup.string().required("La ciudad es obligatoria"),
        descripcion: Yup.string().required("La descripción es obligatoria"),
        prioridad: Yup.string().required("La prioridad es obligatoria"),
      })}
      onSubmit={(values) => {console.log(values);
        // demas funciones del submit
      }}
    >
      <Form className="w-full md:w-1/2 lg:w-1/3 space-y-4">
        <h2 className="text-center font-bold">
          Ingresa los datos del informe de visita a obra
        </h2>
        <ErrorMessage
          name="nombre"
          component="div"
          className="text-red-500 text-xs"
        >
          {(msg) => <div className="text-red-500 text-xs m-0">{msg}</div>}
        </ErrorMessage>
        <Field
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full outline-none"
        />
        <div className="flex space-x-2">
          <Field
            type="text"
            name="cliente"
            placeholder="Cliente"
            className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2 outline-none"
          />
          <Field
            type="text"
            name="ciudad"
            placeholder="Cuidad"
            className="border-customRed500 border-2 rounded-md px-2 py-1 w-1/2 outline-none"
          />
        </div>
        <ErrorMessage name="cliente" component="div" className="text-red-500">
          {(msg) => <div className="text-red-500 text-xs m-0">{msg}</div>}
        </ErrorMessage>
        <ErrorMessage name="ciudad" component="div" className="text-red-500">
          {(msg) => <div className="text-red-500 text-xs m-0">{msg}</div>}
        </ErrorMessage>

        <Field
          as="textarea"
          name="descripcion"
          placeholder="Descripción"
          className="border-customRed500 border-2 rounded-md px-2 py-1 w-full h-20 resize-none outline-none"
        />
        <ErrorMessage
          name="descripcion"
          component="div"
          className="text-red-500"
        >
          {(msg) => <div className="text-red-500 text-xs m-0">{msg}</div>}
        </ErrorMessage>

        <button
          className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
          type="button"
        >
          Agregar Mano de Obra
        </button>
        <WorkforceMaterialModal/>
        
        <div className="my-3 flex justify-start flex-wrap">
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Operarios - 5 turnos
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Operarios - 5 turnos
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Operarios - 5 turnos
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Operarios - 5 turnos
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
        </div>

        <button
          className="text-xs text-white font-bold bg-customRed500 py-1 px-2 rounded-md hover:bg-customRed700"
          type="button"
        >
          Agregar Materiales
        </button>
        <div className="my-3 flex justify-start flex-wrap">
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Material 1 - 5 Kg
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Material 2 - 5 L
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
          <span className="text-xs md:text-sm border-2 rounded-md border-customRed500 px-2 me-2 mb-2">
            Material 3 - 10 unid{" "}
            <button className="pl-5 text-customRed500 font-black">X</button>
          </span>
        </div>

        <label htmlFor="prioridad" className="me-2">
          Prioridad:
        </label>
        <Field as="select" name="prioridad">
          <option value="">--Seleccione-- </option>
          <option value="alta">Alta</option>
          <option value="media">Medio</option>
          <option value="baja">Baja</option>
        </Field>
        <ErrorMessage
          name="prioridad"
          component="div"
          className="text-red-500 text-xs"
        >
          {(msg) => <div className="text-red-500 text-xs m-0">{msg}</div>}
        </ErrorMessage>

        <button
          type="submit"
          className="w-full p-2 bg-gradient-to-b from-customRed700 to-customRed800
            rounded-md shadow-gray-400 shadow-md outline-none text-white font-bold cursor-pointer uppercase text-xs"
        >
          Guardar
        </button>
      </Form>
    </Formik>
  );
};

export default VisitReportForm;
