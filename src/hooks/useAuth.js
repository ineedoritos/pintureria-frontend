  // src/hooks/useAuth.js
  import { useState } from "react";
import { jwtDecode } from "jwt-decode";
  export const useAuth = () => {
    const [auth, setAuth] = useState(() => {
      const token = sessionStorage.getItem("token");
      const role = sessionStorage.getItem("role");
      return {
        isAuthenticated: !!token,
        role: role || null,
        token,
      };
    });

    const login = async (email, password) => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        
        });
        console.log("Response del login:", response); // Log para verificar la respuesta del servidor
        const data = await response.json();

        if (response.ok) {
          const token = data.token;
          console.log("Token recibido:", token); // Log para verificar el token recibido

        
          const payload = jwtDecode(token);
          console.log(payload.role); 
          const role = payload.role || null; 
          console.log("Rol del usuario:", role); 
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("role", role);

          setAuth({
            isAuthenticated: true,
            role,
            token,
          });

          return { success: true };
        } else {
          return { success: false, message: data.message };
        }
      } catch (err) {
        console.error(err);
        return { success: false, message: "Error del servidor" };
      }
    };

    const logout = () => {
      sessionStorage.clear();
      setAuth({ isAuthenticated: false, role: null, token: null });
    };

    return { ...auth, login, logout };
  };
