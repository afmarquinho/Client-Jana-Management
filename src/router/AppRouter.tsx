import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "../views/IndexView";
import NotFoundView from "../views/NotFoundView";
import Layout from "../components/Layout";
import InicioPage from "../views/InicioPage";
import ReportRoutes from "./ReportRoutes";
import UserRoutes from "./UserRoutes";
import TenderRoutes from "./TenderRoutes";

const AppRouter = () => {
  return (
    //TODO: REDIRECT USER IF THE PAGE NORT FOUND
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<InicioPage />} />
          {UserRoutes()}
          {ReportRoutes()}
          {TenderRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
