import {
  BookOpenIcon,
  ChatBubbleBottomCenterIcon,
  ChevronLeftIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  HandRaisedIcon,
  HomeIcon,
  PencilSquareIcon,
  PrinterIcon,
  WrenchIcon,
} from "@heroicons/react/16/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cleanTender } from "../../redux/slices/tenderSlice";
import { RootState } from "../../redux/store";


const TenderNav: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tender = useSelector((state:RootState)=> state.tender.tender)

  const onBack = () => {
    navigate(-1);
  };
  const onHome = () => {
    navigate("/dashboard-tender");
    dispatch(cleanTender());
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-5">
          <button
            onClick={onHome}
            className="w-8 h-8 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
          hover:from-cyan-700 hover:to-cyan-800 text-xs shadow-gray-400 shadow-md flex justify-center items-center"
          >
            <HomeIcon className="h-4" />
          </button>

          <button
            onClick={onBack}
            className="w-8 h-8 bg-gradient-to-b from-red-500 to-red-600 uppercase p-2 text-white font-bold rounded 
          hover:from-cyan-700 hover:to-cyan-800 text-xs shadow-gray-400 shadow-md flex justify-center items-center"
          >
            <ChevronLeftIcon className="h-4" />
          </button>
        </div>
        <nav className="bg-green-900 text-white w-36">
          <div className="p-4">
            <NavLink
              to="/tender-summary-view"
              className="text-black text-center bg-green-400 py-2 hover:bg-green-700 block w-full hover:text-white"
            >
              Resúmen
            </NavLink>
          </div>
          <NavLink
            to="/tender-editing-heading"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <DocumentIcon className="h-4" />
            Encabezado
          </NavLink>
          <NavLink
            to="/tender-editing-workforce"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <HandRaisedIcon className="h-4" />
            Mano de Obra
          </NavLink>
          <NavLink
            to="/tender-editing-materials"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <WrenchIcon className="h-4" />
            Materiales
          </NavLink>
          <NavLink
            to="/tender-editing-other-expenses"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <CurrencyDollarIcon className="h-4" />
            Otros Gastos
          </NavLink>
          <NavLink
            to="/tender-editing-descriptions"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <BookOpenIcon className="h-4" />
            Descripciones
          </NavLink>
          <NavLink
            to="/tender-editing-notes"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <PencilSquareIcon className="h-4" />
            Observaciones
          </NavLink>
          <NavLink
            to="/tender-comments"
            className={({ isActive }) =>
              isActive
                ? "text-black border-l-4 border-l-green-300 bg-green-400 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
                : "text-green-100 border-l-4 border-l-green-900 hover:bg-green-700 hover:border-l-green-300 w-full flex jjustify-start items-center gap-1 ps-1 py-3"
            }
          >
            <ChatBubbleBottomCenterIcon className="h-4" />
            Comentarios
          </NavLink>
        </nav>

        <Link
          to={`/tender-PDF/${tender?.id}`}
          className="text-green-100 bg-orange-600 hover:bg-teal-900 w-full flex jjustify-start items-center gap-1 ps-1 py-3 mt-5"
        >
          <PrinterIcon className="h-4" />
          Imprimir
        </Link>
      </div>
    </>
  );
};
export default TenderNav;
