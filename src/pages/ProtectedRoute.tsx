import { Navigate, Outlet, useLocation } from "react-router";

export const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "/login",
}: {
  isAuthenticated: boolean;
  redirectPath?: string;
}) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
