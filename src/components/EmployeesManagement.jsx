import { useState } from 'react';

const EmployeesManagement = () => {
    const [paints, setEmployees] = useState([
        { id: 1, nombre: 'Axel Ramirez', ocupacion: 'Jefe' },
        { id: 2, nombre: 'Levi Gonzalez', ocupacion: 'Esclavo' },
        { id: 3, nombre: 'Armando Semen', ocupacion: 'Esclavo' },
        { id: 4, nombre: 'Jose Adrian', ocupacion: 'Esclavo' },
        { id: 5, nombre: 'Novia de Tacita', ocupacion: 'Esclavo' },
    ]);

    const [newEmployee, setNewEmployee] = useState({nombre: '', ocupacion: 'Esclavo'});

    const [showModal, setShowModal] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();
        if (newEmployee.nombre.trim() === '') return;
        
        setEmployees(prev => [
            ...prev,
            {
                id: prev.length + 1,
                nombre: newEmployee.nombre,
                ocupacion: newEmployee.ocupacion
            }
        ]);
        
        setNewEmployee({ nombre: '', ocupacion: 'Esclavo' });
        setShowModal(false);
    };

    const handleDeleteEmployee = (id) => {
        setEmployees(prev => prev.filter(employee => employee.id !== id));
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold mb-6">Gestionar Empleados</h1>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ocupación</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paints.map((employee) => (
                            <tr key={employee.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{employee.ocupacion.toLowerCase()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button onClick={() => handleDeleteEmployee(employee.id)} className="text-red-600 hover:text-red-900 mr-3">Eliminar</button>
                                    <button className="text-blue-600 hover:text-blue-900">Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <button onClick={() => setShowModal(true)} className="bg-[#27AE60] hover:bg-[#277347] text-white font-bold py-2 px-4 rounded flex items-center transition-colors"><span className="mr-2">+</span> Agregar Empleado</button>
            
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Empleado</h2>
                            
                            <form onSubmit={handleAddEmployee}>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input type="text" id="nombre" name="nombre" value={newEmployee.nombre} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required/>
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                                    <select id="ocupacion" name="ocupacion"value={newEmployee.ocupacion} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                        <option value="Esclavo">Esclavo</option>
                                        <option value="Jefe">Jefe</option>
                                    </select>
                                </div>
                                
                                <div className="flex justify-end space-x-3">
                                    <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors" >Cancelar</button>
                                    <button type="submit" className="px-4 py-2 bg-[#27AE60] text-white rounded-md hover:bg-[#277347] transition-colors"> Guardar </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeesManagement;