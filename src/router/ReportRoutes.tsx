import { Route } from "react-router-dom";
import LayoutReport from "../components/reports/LayoutReport";
import DashboardReportView from "../views/reports/DashboardReportView";
import ReportSummaryView from "../views/reports/ReportSummaryView";
import NewReportView from "../views/reports/NewReportView";

const ReportRoutes = () => {
  return (
    <Route element={<LayoutReport />}>
      <Route index path="/dashboard-report" element={<DashboardReportView />} />
      <Route path="/report-summary/:ref" element={<ReportSummaryView />} />
      <Route path="/report-form" element={<NewReportView />} />
      <Route path="/report-form/:ref" element={<NewReportView />} />
    </Route>
  );
};
export default ReportRoutes;
