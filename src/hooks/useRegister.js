import { useState } from "react";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("http://localhost:3000/api/clientes", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        // Si la respuesta no es OK, se trata del error del backend
        const err = await response.json();
        console.log("Error del backend:", err);  // Ver en la consola el error completo
        setError(err.error || "Error al registrar");  // Usar el campo 'error' del backend o un mensaje por defecto
        return;  // Salir de la función si el registro falla
      }

      setSuccess(true);
    } catch (err) {
      console.log("Error al registrar:", err);  // Log del error en caso de problemas con la solicitud
      setError(err.message || "Error inesperado al registrar");
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    error,
    success,
  };
};

export default useRegister;
