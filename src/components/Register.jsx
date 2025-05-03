import { Link } from "react-router-dom";
import { useState } from "react";
import useRegister from "../hooks/useRegister"; // Importamos el hook
import { useEffect } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        tipo_documento: "DUI",
        numero_documento: "",
        password: "",
    });

    // Obtenemos el hook useRegister
    const { register, loading, error, success } = useRegister();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const { confirmPassword, ...dataToSend } = formData; // <-- El fix: excluye confirmPassword
        console.log(confirmPassword); // Verifica que los datos sean correctos
        await register(dataToSend);

        
    };

     // useEffect para mostrar el alert solo cuando el error cambie
  useEffect(() => {
    if (error) {   
      alert(error);
    }
  }, [error]); // Solo se ejecuta cuando el error cambia

  useEffect(() => {
    if (success) {
        alert("Registro exitoso, por favor inicia sesión");
        // Redirigir a la página de inicio o login si es necesario
    }
  }, [success]); // Solo se ejecuta cuando el éxito es verdadero
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#212121] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 text-white shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Regístrate</h1>
                    <p className="text-lg">en RegisData</p>
                </div>
                
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        {/* Form Fields Here */}

                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-white mb-1">Nombre</label>
                            <input id="nombre" name="nombre" type="text" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Tu nombre" 
                                value={formData.nombre} 
                                onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="apellido" className="block text-sm font-medium text-white mb-1">Apellido</label>
                            <input id="apellido" name="apellido" type="text" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Tu apellido" 
                                value={formData.apellido} 
                                onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Tu Email" 
                                value={formData.email} 
                                onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="telefono" className="block text-sm font-medium text-white mb-1">Teléfono</label>
                            <input id="telefono" name="telefono" type="tel" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Número de teléfono" 
                                value={formData.telefono} 
                                onChange={handleChange}/>
                        </div>

                        <div>
                            <label htmlFor="tipo_documento" className="block text-sm font-medium text-white mb-1">Tipo de Documento</label>
                            <select id="tipo_documento" name="tipo_documento" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                value={formData.tipo_documento} 
                                onChange={handleChange}>
                                <option value="DNI">DUI</option>
                                <option value="Pasaporte">Pasaporte</option>
                                <option value="Cédula">Cédula</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="numero_documento" className="block text-sm font-medium text-white mb-1">Número de Documento</label>
                            <input id="numero_documento" name="numero_documento" type="text" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Ej. 12345678-9" 
                                value={formData.numero_documento} 
                                onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Contraseña</label>
                            <input id="password" name="password" type="password" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Crea una contraseña" 
                                value={formData.password} 
                                onChange={handleChange}/>
                        </div>
                        
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">Confirmar Contraseña</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" required 
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" 
                                placeholder="Repite tu contraseña" 
                                value={formData.confirmPassword} 
                                onChange={handleChange}/>
                        </div>
                    </div>

                    {/* Si hay un error, lo mostramos aquí */}
                    {error && (
                        <div className="text-red-500 text-center mt-4">
                            <p>{error}</p>
                        </div>
                    )}

                    <div>
                        <button 
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#27AE60] hover:bg-[#277347] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                            disabled={loading} 
                            onSubmit={handleSubmit}
                        >
                            {loading ? "Cargando..." : "Crear cuenta en RegisData"}
                        </button>
                    </div>
                </form>

                <div className="text-center text-sm mt-4">
                    <span className="text-gray-600">¿Ya tienes cuenta? </span>
                    <Link to="/login" className="font-medium text-[#27AE60] hover:text-[#277347]">Inicia sesión</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
