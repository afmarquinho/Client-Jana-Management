import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import NotFoundView from "./views/NotFoundView";
import Layout from "./components/Layout";
import InicioPage from "./views/InicioPage";
import DashboardReportView from "./views/reports/DashboardReportView";
import LayoutReport from "./components/reports/LayoutReport";
import ReportSummaryView from "./views/reports/ReportSummaryView";
import EditReportView from "./views/reports/EditReportView";
import NewReportView from "./views/reports/NewReportView";
import DashboardTenderView from "./views/tender/DashboardTenderView";
import LayoutTender from "./components/tender/LayoutTender";
import TenderToProcessView from "./views/tender/TenderToProcessView";


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
              element={<DashboardReportView />}
            />
            <Route path="/report-summary" element={<ReportSummaryView />} />
            <Route path="/new-report" element={<NewReportView />} />
            <Route path="/edit-report" element={<EditReportView />} />
          </Route>
          <Route element={<LayoutTender />}>
          <Route index path="/dashboard-tender" element={<DashboardTenderView/>}/>
          <Route path="/tender-to-process" element={<TenderToProcessView/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
