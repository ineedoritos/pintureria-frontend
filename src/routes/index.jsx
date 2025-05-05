import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import { employeeRoutes } from "./employeeRoutes";
import { adminRoutes } from "./adminRoutes";
import { NotFound } from "../pages/notFound";

const router = createBrowserRouter([
  ...publicRoutes,
  ...employeeRoutes,
  ...adminRoutes,

  {
    path: "*",
    element: <NotFound />,  
  }
]);

export default router;