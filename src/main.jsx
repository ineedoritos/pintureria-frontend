import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./components/Products";
import "./index.css";
import Layout from "./components/Layout";
import ProductDetail from "./components/Product";
import Login from './components/Login';
import Register from './components/Register';
import PaintManagement from "./components/PaintManagement";
import EmployeesManagement from "./components/EmployeesManagement";
import ColorManagement from "./components/ColorManagement";
import CardsManagement from "./components/CardsManagement";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/products",
        element: <Layout><Products /></Layout>,
    },
    {
        path: "/products/:id",
        element: <Layout><ProductDetail /></Layout>,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/admin/paints',
        element: <Layout><PaintManagement/></Layout>
    },
    {
        path: '/admin/employees',
        element: <Layout><EmployeesManagement/></Layout>
    },
    {
        path: '/admin/colors',
        element: <Layout><ColorManagement/></Layout>
    },
    {
        path: '/admin/cards',
        element: <Layout><CardsManagement/></Layout>
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);