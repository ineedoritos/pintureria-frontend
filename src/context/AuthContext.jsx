// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    role: null,
    email: null,
  });
  console.log("AuthProvider render", auth);
  // Recuperar datos de sesión al iniciar
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const email = decoded.email;
        const role = decoded.role;

        setAuth({
          isAuthenticated: true,
          token,
          role,
          email,
        });
      } catch (err) {
        console.error("Error decodificando token:", err);
      }
    }
  }, []);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      
    });

    const data = await response.json();
    console.log("Respuesta de login:", data);

    if (data.token) {
      try {
        const decoded = jwtDecode(data.token);
        const emailFromToken = decoded.email;
        const roleFromToken = decoded.role;

        // Guardar en sessionStorage
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("email", emailFromToken);
        sessionStorage.setItem("role", roleFromToken);

        // Actualizar estado
        setAuth({
          isAuthenticated: true,
          token: data.token,
          role: roleFromToken,
          email: emailFromToken,
        });

        return { success: true, role: roleFromToken };
      } catch (err) {
        console.error("Error decodificando token:", err);
        return { success: false, message: "Token inválido" };
      }
    }

    return { success: false, message: data.message || "Error de login" };
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, token: null, role: null, email: null });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
