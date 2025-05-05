import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import ProductDetail from "../components/Product";
import Layout from "../components/Layout";
import ProtectedRoute from "../guards/ProtectedRoute"; // Asegúrate de importarlo
import { ROUTES, ROLES } from "../constants"; // Importamos ROLES también
import Sidebar from "../components/Sidebar";

export const publicRoutes = [
  {
    path: ROUTES.HOME,
    element: <App />,
  },

  {
    path: "/test",
    element: <Sidebar />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: (
      <ProtectedRoute
        roles={[ROLES.CLIENT]}
        element={
          <Layout>
            <Products />
          </Layout>
        }
      />
    ),
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: (
      <ProtectedRoute
        roles={[ROLES.CLIENT]}
        element={
          <Layout>
            <ProductDetail />
          </Layout>
        }
      />
    ),
  },
];
