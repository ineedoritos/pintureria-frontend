// src/guards/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Asegúrate de que esta ruta es correcta

const ProtectedRoute = ({ element, roles }) => {
  const { isAuthenticated, role } = useAuth();
  


  console.log("isAuthenticated", isAuthenticated);
  console.log("role", role);
  
 

  if (!isAuthenticated) { 
    return <Navigate to="/login" replace />;
  }

  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" replace />; // o redirige a login si prefieres
  }

  return element;
};

export default ProtectedRoute;
