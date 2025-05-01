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
      <ProtectedRoute roles={[ROLES.EMPLOYEE, ROLES.ADMIN]}>
        <Layout><PaintManagement /></Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.ADMIN_CARDS,
    element: (
      <ProtectedRoute roles={[ROLES.EMPLOYEE, ROLES.ADMIN]}>
        <Layout><CardsManagement /></Layout>
      </ProtectedRoute>
    ),
  },
];
