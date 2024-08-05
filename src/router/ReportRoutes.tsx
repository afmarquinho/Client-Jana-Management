import { Route } from "react-router-dom";
import LayoutReport from "../components/reports/LayoutReport";
import DashboardReportView from "../views/reports/DashboardReportView";
import ReportSummaryView from "../views/reports/ReportSummaryView";
import NewReportView from "../views/reports/NewReportView";
import ProtectedRoute from "../components/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const ReportRoutes = () => {
  const user = useSelector((state: RootState) => state.user.authUser);
  return (
    <Route
      element={
        <ProtectedRoute
        isAllowed={
          !!user &&
          user.active &&
          (user.role === "gerente" || user.role === "ingObra")
        }
        redirectTo="/"
        />
      }
    >
      <Route element={<LayoutReport />}>
        <Route
          index
          path="/dashboard-report"
          element={<DashboardReportView />}
        />
        <Route path="/report-summary/:ref" element={<ReportSummaryView />} />
        <Route path="/report-form" element={<NewReportView />} />
        <Route path="/report-form/:ref" element={<NewReportView />} />
      </Route>
    </Route>
  );
};
export default ReportRoutes;
