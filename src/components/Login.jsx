import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SEXOOOO:", { email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#212121] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 p-10 text-white shadow-lg">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Inicia Sesión</h1>
                    <p className="text-lg">en RegisData</p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Su Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">Contraseña</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Su contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-[#27AE60] hover:bg-[#277347] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" >Entra en RegisData</button>
                    </div>
                </form>

                <div className="text-center text-sm mt-4">
                    <span className="text-gray-600">¿No tienes cuenta? </span>
                    <Link to="/register" className="font-medium text-[#27AE60] hover:text-[#277347]">Crea una cuenta nueva</Link>
                    <p className="underline mt-2 text-xs text-gray-500">Olvidé mi contraseña</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
