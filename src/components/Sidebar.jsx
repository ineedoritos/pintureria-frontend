import { useState, useEffect } from 'react';
import { TiHome  as Casita} from "react-icons/ti";
import { FaClipboardList  as Productitos} from "react-icons/fa6";
import { FaPaintRoller as Pinturita } from "react-icons/fa";
import { FaShoppingCart as Carrito } from "react-icons/fa";





// Estilos CSS personalizados para las animaciones
const styles = `
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.sidebar-transition {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-item-animation {
  animation: slideIn 0.3s ease-out forwards;
}

.profile-text-animation {
  animation: fadeIn 0.5s ease-in forwards;
}

.hamburger-line {
  transition: all 0.3s ease;
}

.sidebar-open .hamburger-top {
  transform: rotate(45deg) translateY(6px);
}

.sidebar-open .hamburger-middle {
  opacity: 0;
}

.sidebar-open .hamburger-bottom {
  transform: rotate(-45deg) translateY(-6px);
}
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Inicio');
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    { name: 'Inicio', icon: <Casita/>, link: '#' },
    { name: 'Productos', icon:<Productitos/>, link: '#' },
    { name: 'Colores', icon: <Pinturita/>, link: '#' },
    { name: 'Carrito', icon: <Carrito/>, link: '#' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(true);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <style>{styles}</style>
      
      {/* Botón móvil */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg ${
          isOpen ? 'sidebar-open' : ''
        }`}
      >
        <div className="w-6 space-y-1 h-6">
          
        {isMobile && (isOpen ? '✕' : '→')}
        </div>
      </button>

      <div className={`h-screen flex fixed z-40 ${isMobile ? 'left-0' : ''}`}>
        <div
          className={`sidebar-transition h-full bg-white shadow-xl rounded-r-2xl p-4 flex flex-col border-r-2 border-gray-100 ${
            isOpen ? 'w-64' : 'w-20'
          } ${isMobile && !isOpen ? '-translate-x-full' : ''}`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="self-end p-2 rounded-full hover:bg-gray-100 transition-colors aspect-square w-10 h-10"
          >
            <div className="transform transition-transform duration-300 ">
            {!isMobile && (isOpen ? '✕' : '→')}
            </div>
          </button>

          
          <nav className="mt-8 flex-1">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className="menu-item-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.link}
                    onClick={() => setActiveItem(item.name)}
                    className={`flex ${isOpen ? 'justify-start' : 'justify-center'} p-3 rounded-xl transition-all duration-200 ${
                      activeItem === item.name
                        ? 'bg-blue-100 text-blue-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className={`text-2xl min-w-[40px] ${!isOpen ? 'ml-7' : 'ml-0'}`}>{item.icon}</span>
                    <span
                      className={`ml-3 text-lg font-medium overflow-hidden ${
                        isOpen
                          ? 'opacity-100 w-auto transition-opacity delay-100'
                          : 'opacity-0 w-0 transition-opacity'
                      }`}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t-2 pt-4">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full aspect-square" />
              <div
                className={`ml-3 ${
                  isOpen 
                    ? 'opacity-100 max-w-full' 
                    : 'opacity-0 max-w-0'
                } transition-all duration-300 delay-150 overflow-hidden`}
              >
                <p className="font-semibold whitespace-nowrap">Pinturería XYZ</p>
                <p className="text-sm text-gray-500">Tu color, nuestro arte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;