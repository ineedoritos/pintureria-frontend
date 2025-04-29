import { Link } from "react-router-dom";
import "./index.css";

function App() {
    return (
        <div className="min-h-screen bg-[#ECF0F1] flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl font-bold text-gray-900">Bienvenido a <span className="text-[#27AE60]">Regis-Data!</span></h1>
            <Link to="/products" className="bg-[#1d262f] hover:bg-gray-600 text-white text-lg font-bold py-3 px-7 rounded-lg transition-colors">Ver Productos</Link>
        </div>
    );
}

export default App;
