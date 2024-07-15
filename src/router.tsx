import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexView from "./views/IndexView";
import NotFoundView from "./views/NotFoundView";
import Layout from "./components/Layout";
import InicioPage from "./views/InicioPage";
import DashboardReportView from "./views/reports/DashboardReportView";
import LayoutReport from "./components/reports/LayoutReport";
import ReportSummaryView from "./views/reports/ReportSummaryView";
import NewReportView from "./views/reports/NewReportView";
import DashboardTenderView from "./views/tender/DashboardTenderView";
import LayoutTender from "./components/tender/LayoutTender";
import TenderToProcessView from "./views/tender/TenderToProcessView";
import NewTenderView from "./views/tender/NewTenderView";
import NewUser from "./views/user/NewUser";
import LayoutUser from "./components/user/LayoutUser";
import DashboardUser from "./views/user/DashboardUser";
import ProfileUser from "./views/user/ProfileUser";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<InicioPage />} />
          <Route element={<LayoutUser />}>
          <Route index path="/dashboard-user" element={<DashboardUser/>}/>
            <Route path="/profile/:id" element={<ProfileUser />} />
            <Route path="/new-user" element={<NewUser />} />
          </Route>

          <Route element={<LayoutReport />}>
            <Route
              index
              path="/dashboard-report"
              element={<DashboardReportView />}
            />
            <Route path="/report-summary" element={<ReportSummaryView />} />
            <Route path="/report-form" element={<NewReportView />} />
          </Route>
          <Route element={<LayoutTender />}>
            <Route
              index
              path="/dashboard-tender"
              element={<DashboardTenderView />}
            />
            <Route
              path="/tender-to-process"
              element={<TenderToProcessView />}
            />
            <Route path="/new-tender" element={<NewTenderView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
