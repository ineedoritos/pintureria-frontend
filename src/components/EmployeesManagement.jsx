import { useState } from 'react';

const EmployeesManagement = () => {
    const [employees, setEmployees] = useState([
        { id: 1, nombre: 'Axel Ramirez', ocupacion: 'Jefe', 
          detalles: {
            fechaContratacion: '2020-05-15',
            telefono: '555-1234',
            email: 'axel@udb.com',
            direccion: 'En frente de la U'
          }
        },
        { id: 2, nombre: 'Levi Gonzalez', ocupacion: 'Esclavo', 
          detalles: {
            fechaContratacion: '2021-03-22',
            telefono: '555-5678',
            email: 'levi@udb.com',
            direccion: 'Soyapango'
          }
        },
        { id: 3, nombre: 'Armando Semen', ocupacion: 'Esclavo', 
          detalles: {
            fechaContratacion: '2021-07-10',
            telefono: '555-9012',
            email: 'armando@udb.com',
            direccion: 'Soyapangooooo'
          }
        },
        { id: 4, nombre: 'Jose Adrian', ocupacion: 'Esclavo', 
          detalles: {
            fechaContratacion: '2022-01-05',
            telefono: '555-3456',
            email: 'jose@udb.com',
            direccion: 'San Salvador'
          }
        },
        { id: 5, nombre: 'Novia de Tacita', ocupacion: 'Esclavo', 
          detalles: {
            fechaContratacion: '2022-02-18',
            telefono: '555-7890',
            email: 'tacita@udb.com',
            direccion: 'Caza de tacita'
          }
        },
    ]);

    const [newEmployee, setNewEmployee] = useState({
        nombre: '', 
        ocupacion: 'Esclavo',
        detalles: {
            fechaContratacion: '',
            telefono: '',
            email: '',
            direccion: ''
        }
    });

    const [showAddModal, setShowAddModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDetailInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({
            ...prev,
            detalles: {
                ...prev.detalles,
                [name]: value
            }
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
                ocupacion: newEmployee.ocupacion,
                detalles: newEmployee.detalles
            }
        ]);
        
        setNewEmployee({ 
            nombre: '', 
            ocupacion: 'Esclavo',
            detalles: {
                fechaContratacion: '',
                telefono: '',
                email: '',
                direccion: ''
            }
        });
        setShowAddModal(false);
    };

    const handleDeleteEmployee = (id) => {
        setEmployees(prev => prev.filter(employee => employee.id !== id));
    };

    const handleShowDetails = (employee) => {
        setSelectedEmployee(employee);
        setShowDetailModal(true);
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
                        {employees.map((employee) => (
                            <tr 
                                key={employee.id} 
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleShowDetails(employee)}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{employee.nombre}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{employee.ocupacion.toLowerCase()}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteEmployee(employee.id);
                                        }} 
                                        className="text-red-600 hover:text-red-900 mr-3"
                                    >
                                        Eliminar
                                    </button>
                                    <button 
                                        className="text-blue-600 hover:text-blue-900"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <button 
                onClick={() => setShowAddModal(true)} 
                className="bg-[#27AE60] hover:bg-[#277347] text-white font-bold py-2 px-4 rounded flex items-center transition-colors"
            >
                <span className="mr-2">+</span> Agregar Empleado
            </button>
            
            {/* Modal para agregar nuevo empleado */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Empleado</h2>
                            
                            <form onSubmit={handleAddEmployee}>
                                <div className="mb-4">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                    <input 
                                        type="text" 
                                        id="nombre" 
                                        name="nombre" 
                                        value={newEmployee.nombre} 
                                        onChange={handleInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                        required
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="ocupacion" className="block text-sm font-medium text-gray-700 mb-1">Ocupación</label>
                                    <select 
                                        id="ocupacion" 
                                        name="ocupacion"
                                        value={newEmployee.ocupacion} 
                                        onChange={handleInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="Esclavo">Esclavo</option>
                                        <option value="Jefe">Jefe</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="fechaContratacion" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Contratación</label>
                                    <input 
                                        type="date" 
                                        id="fechaContratacion" 
                                        name="fechaContratacion" 
                                        value={newEmployee.detalles.fechaContratacion} 
                                        onChange={handleDetailInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                    <input 
                                        type="tel" 
                                        id="telefono" 
                                        name="telefono" 
                                        value={newEmployee.detalles.telefono} 
                                        onChange={handleDetailInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={newEmployee.detalles.email} 
                                        onChange={handleDetailInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="direccion" className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                                    <input 
                                        type="text" 
                                        id="direccion" 
                                        name="direccion" 
                                        value={newEmployee.detalles.direccion} 
                                        onChange={handleDetailInputChange} 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" 
                                    />
                                </div>
                                
                                <div className="flex justify-end space-x-3">
                                    <button 
                                        type="button" 
                                        onClick={() => setShowAddModal(false)} 
                                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                                    >
                                        Cancelar
                                    </button>
                                    <button 
                                        type="submit" 
                                        className="px-4 py-2 bg-[#27AE60] text-white rounded-md hover:bg-[#277347] transition-colors"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal para ver detalles del empleado */}
            {showDetailModal && selectedEmployee && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold">{selectedEmployee.nombre}</h2>
                                    <p className="text-sm text-gray-500 capitalize">{selectedEmployee.ocupacion.toLowerCase()}</p>
                                </div>
                                <button 
                                    onClick={() => setShowDetailModal(false)} 
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Fecha de Contratación</h3>
                                    <p className="text-sm text-gray-900">{selectedEmployee.detalles.fechaContratacion || 'No especificada'}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Teléfono</h3>
                                    <p className="text-sm text-gray-900">{selectedEmployee.detalles.telefono || 'No especificado'}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                    <p className="text-sm text-gray-900">{selectedEmployee.detalles.email || 'No especificado'}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Dirección</h3>
                                    <p className="text-sm text-gray-900">{selectedEmployee.detalles.direccion || 'No especificada'}</p>
                                </div>
                            </div>
                            
                            <div className="mt-6 flex justify-end">
                                <button 
                                    onClick={() => setShowDetailModal(false)} 
                                    className="px-4 py-2 bg-[#27AE60] text-white rounded-md hover:bg-[#277347] transition-colors"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeesManagement;