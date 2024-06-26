import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location.pathname }} />;
};

export default PrivateRoute;
