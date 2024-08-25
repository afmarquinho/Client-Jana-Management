import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}: {
  isAllowed: boolean;
  redirectTo?: string;
  children?: React.ReactNode; //* ESTO HACE AL CHILDREN OPCIONAL
}) => {
  //const user = useSelector((state: RootState) => state.user.authUser);

  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
export default ProtectedRoute;
