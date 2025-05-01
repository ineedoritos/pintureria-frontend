// src/guards/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // Importa el hook de autenticación

const ProtectedRoute = ({ element, roles }) => {
  // Usamos el hook `useAuth` para obtener el estado de autenticación
  const { isAuthenticated, role } = useAuth();

  // Si el usuario no está autenticado, lo redirigimos a la página de login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si el usuario no tiene uno de los roles permitidos, también lo redirigimos
  if (!roles.includes(role)) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado y tiene el rol adecuado, muestra el componente
  return element;
};

export default ProtectedRoute;
