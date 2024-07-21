const TenderToProcessView = () => {
  return (
    <div>TenderToProcessView</div>
  )
}
export default TenderToProcessView


// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { cleanReport } from "../../redux/slices/tenderSlice";
// import { RootState } from "../../redux/store";
// import { formatServerDate } from "../../helpers/helpers";


// //TODO:  HACER LA TABLA UN COMPONENTE PARA REUTILIZAR

// const TenderToProcessView = () => {
//   const viewReport = useSelector((state: RootState) => state.tender.viewReport);

//   const dispatch = useDispatch();
//   // const onBack = () => {
//   //   dispatch(cleanReport());
//   // };
  

//   return (
//     <>
//       <Link
//         className="w-40 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
//        hover:from-cyan-700 hover:to-cyan-800 my-4 text-xs shadow-gray-400 shadow-md text-center"
//         to="/dashboard-tender"
//         // onClick={onBack}
//       >
//         Volver
//       </Link>

//       <h2 className="text-gray-500 font-black uppercase text-md sm:text-xl text-center mb-5">
//         Resúmen de <span className="text-customRed">Informe de Vista</span>
//       </h2>

//       {/* <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
//         <tbody className="italic">
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Nombre del Proyecto
//             </th>
//             <td className="text-left p-4 w-/3 not-italic font-semibold">
//               {viewReport?.name}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Fecha de Visita
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {formatServerDate(viewReport?.visitDate)}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Fecha de Entrega
//             </th>
//             <td className="text-left p-4 w-/3 not-italic font-semibold">
//               {formatServerDate(viewReport?.dueDate)}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Cliente
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.customerName}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Ciudad
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.customerCity}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Nombre de Contacto
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.contactName}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Teléfono
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.phoneNumber}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Correo Eléctronico
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.email}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Prioridad
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.priority === "high"
//                 ? "Alta"
//                 : viewReport?.priority === "medium"
//                 ? "Media"
//                 : "Baja"}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Descripción
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.description}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Mano de Obra
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               <ol className="list-decimal ps-4">
//                 {viewReport?.workforce.map((item, index) => (
//                   <li key={index} className="">
//                     {item.workforce} -- {item.workshift} Turnos
//                   </li>
//                 ))}
//               </ol>
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Materiales
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               <ol className="list-decimal ps-4">
//                 {viewReport?.material.map((item, index) => (
//                   <li key={index} className="">
//                     {item.material} -- {item.quantity} {item.unit}
//                   </li>
//                 ))}
//               </ol>
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Reporte Procesado
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.processed ? "Sí" : "No"}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Cerrado
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.close ? "Sí":"No"}
//             </td>
//           </tr>
//           <tr className="border-b last:border-b-0">
//             <th className="text-left p-4 text-gray-600 w-1/3 border-e">
//               Creado por
//             </th>
//             <td className="text-left p-4 w-/3 not-italic">
//               {viewReport?.createdBy}
//             </td>
//           </tr>
//         </tbody>
//       </table> */}
      
//     </>
//   );
// };
// export default TenderToProcessView;
