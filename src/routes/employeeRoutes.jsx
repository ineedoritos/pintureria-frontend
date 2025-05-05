// src/routes/employeeRoutes.jsx
import PaintManagement from "../components/PaintManagement";
import CardsManagement from "../components/CardsManagement";
import Layout from "../components/Layout";
import ProtectedRoute from "../guards/ProtectedRoute";
import { ROUTES, ROLES } from "../constants";  // Importamos las constantes

export const employeeRoutes = [
  {
    path: ROUTES.ADMIN_PAINTS,
    element: (
      <ProtectedRoute roles={[ROLES.EMPLOYEE, ROLES.ADMIN]} element={<Layout><PaintManagement /></Layout>}/>
        
      
    ),
  },
  {
    path: ROUTES.ADMIN_CARDS,
    element: (
      <ProtectedRoute roles={[ROLES.EMPLOYEE, ROLES.ADMIN]} element={<Layout><CardsManagement /></Layout>}/>
        
   
    ),
  },
];
