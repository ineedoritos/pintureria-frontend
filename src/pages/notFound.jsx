// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600"></h1>
      <p className="text-3xl mt-4 font-bold">Vaya, lo has roto</p>
      <Link to="/" className="mt-6 text-blue-500 underline hover:text-blue-700">
        Volver al inicio
      </Link>
    </div>
  );
};

