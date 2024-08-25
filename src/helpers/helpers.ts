import { NavigateFunction } from "react-router-dom";
import { AuthUserType, Tender } from "../types/types";

//* FORMAT DATES
export const formatServerDate = (dateString: string): string => {
  // Corta la cadena hasta antes del carácter 'T' para ignorar la hora y la zona horaria
  const dateOnlyString = dateString.split("T")[0];
  return dateOnlyString;
};

// console.log(inputDate);
// console.log("la fecha real es: " + realDate);

//* VALIDATE IF A DATE IS HAS NO EXPIRED, USED ON SUMMARY-REPORTS BEFORE SENDING TO API AN RESQUEST
export const isDateValid = (dateString: string): boolean => {
  const inputDate = new Date(dateString);
  const realDate = new Date(inputDate.setDate(inputDate.getDate() + 1));

  const currentDate = new Date();

  const tomorrow = new Date(currentDate.setDate(currentDate.getDate() + 1));

  // Comparar la fecha de entrada con mañana
  return realDate >= tomorrow;
};

//* Los datos que vienen del backen al crear un nuevo tender, vienen de esta forma, vamos a cambiarlos  datos nulos

// const dataFromBackendExample = {
//   contactName: "Juan Torres",
//   createdBy: "John Doe",
//   customerCity: "Pereira",
//   customerName: "Risaralda",
//   date: null,
//   description: null,
//   email: "juan.torres@risaralda.com",
//   id: 60,
//   leadTime: null,
//   name: "Revisión de Sistemas Hidráulicos",
//   notes: null,
//   paymentMethod: null,
//   phoneNumber: "555-2468",
//   proposalValidity: null,
//   reportId: 6,
//   reviewedBy: null,
//   status: "draft",
//   tender: null,
//   ref: "asc-634",
// };

// Definición de tipos
//type TenderDataFromBackend = typeof dataFromBackendExample;

export function getTodayDateString(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// export const assignTenderData = (data: TenderDataFromBackend) => {
//   // Función para obtener el día de hoy en formato "YYYY-MM-DD"
//   return {
//     id: data.id,
//     tender: data.tender ?? "", // Inicia con cadena vacía si es nulo
//     name: data.name,
//     customerName: data.customerName,
//     contactName: data.contactName,
//     email: data.email,
//     phoneNumber: data.phoneNumber,
//     customerCity: data.customerCity,
//     createdBy: data.createdBy,
//     reviewedBy: data.reviewedBy ?? "", // Inicia con cadena vacía si es nulo
//     date: data.date ?? getTodayDateString(), // Usa getTodayDateString si data.date es null
//     leadTime: data.leadTime ?? "", // Inicia con cadena vacía si es nulo
//     paymentMethod: data.paymentMethod ?? "", // Inicia con cadena vacía si es nulo
//     proposalValidity: data.proposalValidity ?? "", // Inicia con cadena vacía si es nulo
//     description: data.description ?? [], // Inicia con arreglo vacío si es nulo
//     notes: data.notes ?? [], // Inicia con arreglo vacío si es nulo
//     status: data.status,
//     reportId: data.reportId,
//     ref: data.ref,
//   };
// };

export const summaryTender = (tender: Tender) => {
  const materials = tender.materials.reduce(
    (acc: number, value) => acc + value.totalValue,
    0
  );

  const preparation =
    tender.workforces
      .filter((item) => item.shiftType === "preparation")
      .reduce((total, item) => total + item.totalValue, 0) +
    tender.otherExpenses
      .filter((item) => item.shiftType === "preparation")
      .reduce((total, item) => total + item.totalValue, 0);

  const day =
    tender.workforces
      .filter((item) => item.shiftType === "day")
      .reduce((total, item) => total + item.totalValue, 0) +
    tender.otherExpenses
      .filter((item) => item.shiftType === "day")
      .reduce((total, item) => total + item.totalValue, 0);

  const night =
    tender.workforces
      .filter((item) => item.shiftType === "night")
      .reduce((total, item) => total + item.totalValue, 0) +
    tender.otherExpenses
      .filter((item) => item.shiftType === "night")
      .reduce((total, item) => total + item.totalValue, 0);

  const total = materials + preparation + day + night;
  return { materials, preparation, day, night, total };
};

export const redirectTo = (user: AuthUserType, navigate: NavigateFunction)=>{
  
  if (user.role === "admin") {
    navigate("/dashboard-user");
    return;
  } else {
    if (user.role === "ingObra") {
      navigate("/dashboard-report");
      return;
    } else {
      navigate("/dashboard-tender");
      return;
    }
  }
}