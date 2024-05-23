import { Navigate, Route, Routes } from "react-router-dom";
import { Landing, Login, Dashboard } from "../pages";
import { Private } from "../shared/components/Private";
import { useAuth } from "../shared/hooks";

export const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route element={<Private />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={isAuthenticated? <Navigate to="/dashboard"/>:<Login />} />
    </Routes>
  );
};
