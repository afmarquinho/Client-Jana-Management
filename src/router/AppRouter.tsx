import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "../views/IndexView";
import NotFoundView from "../views/NotFoundView";
import Layout from "../components/Layout";
import ReportRoutes from "./ReportRoutes";
import UserRoutes from "./UserRoutes";
import TenderRoutes from "./TenderRoutes";
import PDFView from "../views/PDF/PDFView";
import ProtectedRoute from "../components/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AppRouter = () => {
  const user = useSelector((state: RootState) => state.user.authUser);

  return (
    //TODO: REDIRECT USER IF THE PAGE NORT FOUND
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<NotFoundView />} />

        <Route
          path="/tender-PDF/:id"
          element={
            <ProtectedRoute
              isAllowed={
                !!user &&
                user.active &&
                (user.role === "gerente" || user.role === "ingCotizacion")
              }
              redirectTo="/"
            >
              <PDFView />
            </ProtectedRoute>
          }
        />

        <Route element={<Layout />}>
          {UserRoutes()}
          {ReportRoutes()}
          {TenderRoutes()}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
