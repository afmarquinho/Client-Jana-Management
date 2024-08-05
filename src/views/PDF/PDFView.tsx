import { useSelector } from "react-redux";
import { formatServerDate } from "../../helpers";
import { RootState } from "../../redux/store";
import termocalderas from "../../assets/logo/VMTERMOCALDERAS.png";
import termocalderas2 from "../../assets/logo/VMTERMOCALDERAS2.png";

const PDFView = () => {
  const tender = useSelector((state: RootState) => state.tender.tender);

  const totalSum = tender?.description?.reduce(
    (acc, desc) => acc + desc.totalValue,
    0
  );
  return (
    <div>
      {" "}
      <div className="px-10">
        <div className="text-sm my-5 font-bold w-full flex justify-between">
          <div>
            <div className="w-72">
              <img
                src={termocalderas2}
                alt="VM TERMOCALDERAS"
                className="w-full"
              />
              
              <p>NIT: 901360107-1 </p>
              <p>E-MAIL: vmtermocalderas.principal@gmail.com</p>
              <p>vmtermocalderas.compras@gmail.com</p>
              <p>TELEFONOS: 322 443 2959 - 315 5151743</p>
            </div>
          </div>
            <div><p>{tender?.consecutive}</p></div>
          <div className="h-40">
            <img
              src={termocalderas}
              alt="VM TERMOCALDERAS"
              className="h-full"
              />
          </div>
        </div>
        <div className="italic font-bold">
          <p className="font-normal">
            <span className="">Cartagena, </span>
            {tender?.date && formatServerDate(tender.date)}
          </p>
          <p className="font-normal mt-5">Ingeniero:</p>
          <p className="uppercase">{tender?.contactName}</p>
          <p className="uppercase">{tender?.customerName}</p>
          <p className="font-normal">{tender?.customerCity}</p>
        </div>
        <table className="w-full bg-gray-200 shadow-md overflow-hidden text-sm md:text-base my-5 table-auto">
          <tbody className="italic">
            <tr className="border last:border-b-0 uppercase">
              <th className="text-left p-4 text-gray-600  border border-gray-400">
                Cotización
              </th>
              <td className="text-left p-4 font-semibold border border-gray-400">
                {tender?.name}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>
            En atención a su amable solicitud nos permitimos enviar la
            cotización correspondiente:
          </p>
        </div>
        <table className="w-full divide-y divide-gray-400 my-5 table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Item
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Descripción
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Unidad
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Cantidad
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Vr Unitario
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Vr Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-400">
            {tender?.description.map((desc, index) => (
              <tr key={index}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-200 text-center border border-gray-400">
                  {desc.item}
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify border border-gray-400">
                  {desc.description}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center border border-gray-400">
                  {desc.unit}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center border border-gray-400">
                  {desc.quantity}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center border border-gray-400">
                  {desc.unitValue.toLocaleString("en-Us", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 text-center border border-gray-400">
                  {desc.totalValue.toLocaleString("en-Us", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={5}
                className="bg-gray-200 border border-gray-400 p-4 text-right uppercase font-bold text-gray-700"
              >
                Total Cotización
              </td>
              <td className="text-center border border-gray-400 text-sm font-bold text-gray-700">
                {totalSum?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full divide-y divide-gray-400 my-5 table-auto">
          <thead className="bg-gray-200">
            <tr className="text-center">
              <th className="px-4 py-3  text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Tiempo de Entrega
              </th>
              <th className="px-4 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Forma de Pago
              </th>
              <th className="px-4 py-3  text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border border-gray-400">
                Validez de la Oferta
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-400">
            <tr className="text-center">
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-400">
                {tender?.leadTime}
              </td>
              <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 border border-gray-400">
                {tender?.paymentMethod}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 border border-gray-400">
                {tender?.proposalValidity}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full divide-y divide-gray-400 my-5 table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border  border-gray-400">
                Item
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap border  border-gray-400">
                Nota
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-400">
            {tender?.notes.map((note, i) => (
              <tr key={i}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-white text-center border border-gray-400">
                  {i + 1}
                </td>
                <td className="px-4 py-4 whitespace-normal text-sm text-gray-900 text-justify border  border-gray-400">
                  {note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p className="italic mt-10">Agradeciendo su atención,</p>
          <p className="italic uppercase font-bold mt-5">Pedro Pérez</p>
          <p className="italic uppercase font-bold">Gerente General</p>
        </div>
      </div>
    </div>
  );
};
export default PDFView;
