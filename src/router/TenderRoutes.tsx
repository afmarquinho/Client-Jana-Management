import { Route } from "react-router-dom"
import LayoutTender from "../components/tender/LayoutTender"
import DashboardTenderView from "../views/tender/DashboardTenderView"
import NewTenderView from "../views/tender/NewTenderView"
import DescriptionsTenderView from "../views/tender/DescriptionsTenderView"
import NotesTenderView from "../views/tender/NotesTenderView"
import WorkforceView from "../views/tender/WorkforceView"
import MaterialsView from "../views/tender/MaterialsView"
import OtherExpView from "../views/tender/OtherExpView"
import TenderSummaryView from "../views/tender/TenderSummaryView"
import AnalysisView from "../views/tender/AnalysisView"
import CommentsView from "../views/tender/CommentsView"
import ReportView from "../views/tender/ReportView"

const TenderRoutes = () => {
  return (
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
            <Route
              path="/tender-editing-workforce"
              element={<WorkforceView />}
            />
            <Route
              path="/tender-editing-materials"
              element={<MaterialsView />}
            />
            <Route
              path="/tender-editing-other-expenses"
              element={<OtherExpView />}
            />
            <Route
              path="/tender-summary-view"
              element={<TenderSummaryView />}
            />
            <Route path="/tender-analysis" element={<AnalysisView />} />
            <Route path="/tender-comments" element={<CommentsView />} />
            <Route path="/tender-report-summary/:ref" element={<ReportView/>} />
          </Route>
  )
}
export default TenderRoutes