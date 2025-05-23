import { useState } from 'react';

const ColorManagement = () => {
    const [customColors, setCustomColors] = useState([
        { id: 1, name: 'Rojo Corporativo', hex: '#FF0000' },
        { id: 2, name: 'Verde Principal', hex: '#27AE60' },
    ]);

    const [newColor, setNewColor] = useState({name: '', hex: '#27AE60'});

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewColor(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleColorChange = (e) => {
        setNewColor(prev => ({
            ...prev,
            hex: e.target.value
        }));
    };

    const handleSaveColor = (e) => {
        e.preventDefault();
        if (newColor.name.trim() === '') return;

        setCustomColors(prev => [
            ...prev,
            {
                id: prev.length + 1,
                name: newColor.name,
                hex: newColor.hex
            }
        ]);

        setNewColor({ name: '', hex: '#27AE60' });
        setShowModal(false);
    };

    const handleDeleteColor = (id) => {
        setCustomColors(prev => prev.filter(color => color.id !== id));
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6">Personalización de Colores</h1>
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Muestra</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {customColors.map((color) => (
                            <tr key={color.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="w-10 h-10 rounded-full border border-gray-200" style={{ backgroundColor: color.hex }}></div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{color.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{color.hex}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button onClick={() => handleDeleteColor(color.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <button onClick={() => setShowModal(true)} className="bg-[#27AE60] hover:bg-[#277347] text-white font-bold py-2 px-4 rounded flex items-center transition-colors"><span className="mr-2">+</span> Agregar Color</button>
            
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Nuevo Color Personalizado</h2>
                            
                            <form onSubmit={handleSaveColor}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre del Color</label>
                                    <input type="text" id="name" name="name" value={newColor.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required placeholder="Ej: Verde Corporativo"/>
                                </div>
                                
                                <div className="mb-6">
                                    <label htmlFor="colorPicker" className="block text-sm font-medium text-gray-700 mb-1">Seleccionar Color</label>
                                    <div className="flex items-center">
                                        <input type="color" id="colorPicker" value={newColor.hex} onChange={handleColorChange} className="h-12 w-12 cursor-pointer rounded border border-gray-300"/>
                                        <span className="ml-3 text-sm font-medium text-gray-700">{newColor.hex}</span>
                                        <div className="ml-4 w-8 h-8 rounded border border-gray-200" style={{ backgroundColor: newColor.hex }}></div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end space-x-3">
                                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors">Cancelar</button>
                                    <button type="submit" className="px-4 py-2 bg-[#27AE60] text-white rounded-md hover:bg-[#277347] transition-colors">Guardar Color</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ColorManagement;