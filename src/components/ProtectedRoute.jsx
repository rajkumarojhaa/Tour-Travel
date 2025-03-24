// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";

export const ProtectedRoute = ({ children }) => {
  const { isAdmin } = useAdminAuth();
  const location = useLocation();

  if (!isAdmin) {
    // Redirect to the admin login page if not authenticated
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  return children;
};
