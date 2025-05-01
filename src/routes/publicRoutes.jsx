import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import Products from "../components/Products";
import ProductDetail from "../components/Product";
import Layout from "../components/Layout";
import { ROUTES } from "../constants"; 

export const publicRoutes = [
  {
    path: ROUTES.HOME,  
    element: <App />,
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
    element: <Layout><Products /></Layout>,
  },
  {
    path: ROUTES.PRODUCT_DETAIL,
    element: <Layout><ProductDetail /></Layout>,
  },
];
