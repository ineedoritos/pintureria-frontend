import EmployeesManagement from "../components/EmployeesManagement";
import ColorManagement from "../components/ColorManagement";
import Layout from "../components/Layout";
import ProtectedRoute from "../guards/ProtectedRoute";
import { ROUTES, ROLES } from "../constants"; // Importamos las constantes

export const adminRoutes = [
  {
    path: ROUTES.ADMIN_EMPLOYEES,
    element: (
      <ProtectedRoute roles={[ROLES.ADMIN]}>
        <Layout><EmployeesManagement /></Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.ADMIN_COLORS,
    element: (
      <ProtectedRoute roles={[ROLES.ADMIN]}>
        <Layout><ColorManagement /></Layout>
      </ProtectedRoute>
    ),
  },
];
