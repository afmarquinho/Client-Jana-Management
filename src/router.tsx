import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import NotFoundView from "./views/NotFoundView";
import Layout from "./components/Layout";
import InicioPage from "./views/InicioPage";
import DashboardReportPage from "./views/reports/DashboardReportView";
import LayoutReport from "./components/reports/LayoutReport";
import ReportSummaryView from "./views/reports/ReportSummaryView";
import EditReportView from "./views/reports/EditReportView";
import NewReportView from "./views/reports/NewReportView";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<InicioPage />} />
          <Route element={<LayoutReport />}>
            <Route
              index
              path="/dashboard-report"
              element={<DashboardReportPage />}
            />
            <Route path="/report-summary" element={<ReportSummaryView />} />
            <Route path="/new-report" element={<NewReportView />} />
            <Route path="/edit-report" element={<EditReportView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
