const DraftTendersView = () => {
  return (
    <div>DraftTendersView</div>
  )
}
export default DraftTendersView

// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { Tender } from "../../types/types";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { getTendersApi } from "../../services/tenderServices";

// const DraftTendersView = () => {
//   const tenders = useSelector((state: RootState) => state.tender.tenders);

//   const draftArray = tenders.filter((tender: Tender) => {
//     return tender.status === "draft";
//   });

//   useEffect(() => {
//    console.log(tenders)
//   }, []);

//   return (
//     <>
//       <h2 className="my-5 text-left text-xl uppercase font-black text-gray-500">
//         Informe de Visita <span className="text-blue-800">pendientes</span> por
//         Procesar{" "}
//       </h2>
//       <table className="w-full max-w-full mx-auto">
//         <thead>
//           <tr>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {draftArray.map((tender: Tender) => (
//             <tr key={tender.id}>
//               <td>
//                 <div className="bg-white p-4 mb-4 flex justify-between items-center">
//                   <div className="">
//                     <h3 className="text:sm sm:text-2xl">{tender.name}</h3>
//                     <p className="text-xs sm:text-sm text-red-400 font-semibold">
//                       {tender.customerName}
//                     </p>
//                     <p className="text-xs sm:text-sm italic">
//                       Fecha de Entrega:{" "}
//                       <span className="font-bold">
//                         {/* {formatServerDate(tender.dueDate)} */}
//                       </span>
//                     </p>
//                   </div>
//                   <div className="flex gap-5">
//                     <Link
//                       to="#"
//                       className="text-sm bg-gradient-to-b from-blue-800 to-blue-950 shadow rounded px-6 py-1 text-white  hover:from-emerald-700 hover:to-emerald-800 text-center"
//                       //onClick={() => handleClick(report)}
//                     >
//                       Cotizar
//                     </Link>
//                   </div>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };
// export default DraftTendersView;
