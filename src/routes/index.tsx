import { Navigate, Route, Routes } from "react-router-dom";
import { Landing, Login, Dashboard } from "../pages";
import { Private } from "../shared/components/Private";
import { useAuth } from "../shared/hooks";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();  

  return (
    <Routes>
      <Route path="/" element={isAuthenticated?<Private />:<Login/>}>
        <Route index element={<Dashboard />} />
        <Route path="/certidao" element={<h1>Certidão</h1>} />        
      </Route>
      <Route path="/home" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={isAuthenticated? <Navigate to="/"/>:<Login />} />
    </Routes>
  );
};
