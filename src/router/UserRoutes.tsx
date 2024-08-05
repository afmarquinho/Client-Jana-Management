import { Route } from "react-router-dom";
import LayoutUser from "../components/user/LayoutUser";
import DashboardUser from "../views/user/DashboardUser";
import UserProfileView from "../views/user/UserProfileView";
import NewUserView from "../views/user/NewUserView";
import UpdatePasswordView from "../views/user/UpdatePasswordView";
import ProtectedRoute from "../components/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const UserRoutes = () => {
  const user = useSelector((state: RootState) => state.user.authUser);

  return (
    <Route
      element={
        <ProtectedRoute
        isAllowed={
          !!user &&
          user.active &&
          (user.role === "gerente" || user.role === "admin")
        }
        redirectTo="/"
        />
      }
    >
      <Route element={<LayoutUser />}>
        <Route index path="/dashboard-user" element={<DashboardUser />} />
        <Route path="/profile/:id" element={<UserProfileView />} />
        <Route path="/new-user" element={<NewUserView />} />
        <Route path="/update-passowrd/:id" element={<UpdatePasswordView />} />
      </Route>
    </Route>
  );
};
export default UserRoutes;
