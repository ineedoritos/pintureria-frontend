// src/hooks/useAuth.js
import { useState } from "react";

// Este hook simula el estado de autenticación
export const useAuth = () => {
  // Aquí definimos dos cosas:
  // - isAuthenticated: si el usuario está autenticado o no
  // - role: el rol del usuario (puede ser "admin", "employee" o "client")
 
 
  // eslint-disable-next-line no-unused-vars
  const [auth, setAuth] = useState({
    isAuthenticated: true, // Simula que el usuario está autenticado
    role: "admin", // Simula que el rol del usuario es "employee"
  });

  return auth;
};
