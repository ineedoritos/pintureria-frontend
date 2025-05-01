// src/routes/adminRoutes.jsx
import EmployeesManagement from "../components/EmployeesManagement";
import ColorManagement from "../components/ColorManagement";
import Layout from "../components/Layout";
import ProtectedRoute from "../guards/ProtectedRoute";
import { ROUTES, ROLES } from "../constants";

export const adminRoutes = [
  {
    path: ROUTES.ADMIN_EMPLOYEES,
    element: (
      <ProtectedRoute
        roles={[ROLES.ADMIN]}
        element={
          <Layout>
            <EmployeesManagement />
          </Layout>
        }
      />
    ),
  },
  {
    path: ROUTES.ADMIN_COLORS,
    element: (
      <ProtectedRoute
        roles={[ROLES.ADMIN]}
        element={
          <Layout>
            <ColorManagement />
          </Layout>
        }
      />
    ),
  },
];
