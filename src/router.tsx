import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import NotFoundPage from "./views/NotFoundPage";
import Layout from "./components/Layout";
import InicioPage from "./views/InicioPage";
import BudgetPage from "./views/BudgetPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage/>} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<InicioPage />} />
          <Route path="/budget" element={<BudgetPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
