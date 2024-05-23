import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";


export const Private: React.FC = () => {
  const {isAuthenticated} = useAuth();
  
  return isAuthenticated?<Outlet/> : <Navigate to="/login"/>;
};