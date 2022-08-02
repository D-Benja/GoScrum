import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default RequireAuth;
