import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-[#27AE60] text-white shadow-md py-4">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">REGIS-DATA</Link>
                
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-200 transition-colors">Inicio</Link></li>
                        <li><Link to="/products" className="hover:text-blue-200 transition-colors font-semibold">Productos</Link></li>
                        <li><Link to="/login" className="hover:text-blue-200 transition-colors">Cerrar Sesión</Link></li>
                    </ul>
                </nav>
                
                <button className="md:hidden text-2xl">☰</button>
            </div>
        </header>
    );
};

export default Header;