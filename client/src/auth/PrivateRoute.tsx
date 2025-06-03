import { Navigate } from "react-router-dom";
import keycloak from "@/util/keycloak";

const PrivateRoute = ({ children }) => {
  if (!keycloak.authenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
