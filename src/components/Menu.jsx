import { useState } from 'react';

const Menu = () => {
    const [isAdmin, setIsAdmin] = useState();
    
    
    const commonItems = [
        { name: 'Pinturas', path: '/paints' },
        { name: 'Productos', path: '/products' }
    ];
    
    const adminItems = [
        { name: 'Empleados', path: '/admin/employees' },
        { name: 'Cartillas', path: '/admin/cards' },
        { name: 'Pinturas', path: '/admin/paints' },
        { name: 'Colores', path: '/admin/colors' },
    ];
    
    return (
        <div className="bg-[#212121] text-white w-1/6 flex flex-col justify-start p-6">
            <div className="text-2xl font-bold mt-6 mb-6 flex items-center justify-between">
                <h1>Menú &nbsp;<span className="text-lg">▼</span></h1>
            </div>
            
            <div className="mb-8">
                <div className="flex flex-col space-y-1">
                    {commonItems.map((item, index) => (
                        <a key={`common-${index}`} href={item.path} className="hover:font-bold transition-colors py-1 px-2 rounded hover:bg-gray-700 flex items-center">{item.name}</a>
                    ))}
                </div>
            </div>
            
            {isAdmin && (
                <div className="mb-8">
                    <h2 className="text-sm font-semibold text-gray-400 mb-2">ADMINISTRADOR</h2>
                    <div className="flex flex-col space-y-1">
                        {adminItems.map((item, index) => (
                            <a  key={`admin-${index}`} href={item.path} className="hover:font-bold transition-colors py-1 px-2 rounded hover:bg-gray-700 flex items-center">{item.name}</a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menu;