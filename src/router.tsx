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
import NewTenderView from "./views/tender/NewTenderView";
import NewUser from "./views/user/NewUser";
import LayoutUser from "./components/user/LayoutUser";
import DashboardUser from "./views/user/DashboardUser";
import ProfileUser from "./views/user/ProfileUser";
import DescriptionsTenderView from "./views/tender/DescriptionsTenderView";
import NotesTenderView from "./views/tender/NotesTenderView";
import WorkforceView from "./views/tender/WorkforceView";
import MaterialsView from "./views/tender/MaterialsView";

const AppRouter = () => {
  return (
    //TODO: REDIRECT USER IF THE PAGE NORT FOUND
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<InicioPage />} />
          <Route element={<LayoutUser />}>
            <Route index path="/dashboard-user" element={<DashboardUser />} />
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
            <Route path="/tender-editing-heading" element={<NewTenderView />} />
            <Route
              path="/tender-editing-descriptions"
              element={<DescriptionsTenderView />}
            />
            <Route path="/tender-editing-notes" element={<NotesTenderView />} />
            <Route path="/tender-editing-workforce" element={<WorkforceView />} />
            <Route path="/tender-editing-materials" element={<MaterialsView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
