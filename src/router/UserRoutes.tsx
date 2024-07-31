import { Route } from "react-router-dom";
import LayoutUser from "../components/user/LayoutUser";
import DashboardUser from "../views/user/DashboardUser";
import UserProfileView from "../views/user/UserProfileView";
import NewUserView from "../views/user/NewUserView";

const UserRoutes = () => {
  return (
    <Route element={<LayoutUser />}>
      <Route index path="/dashboard-user" element={<DashboardUser />} />
      <Route path="/profile/:id" element={<UserProfileView />} />
      <Route path="/new-user" element={<NewUserView />} />
    </Route>
  );
};
export default UserRoutes;
