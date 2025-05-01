import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import { employeeRoutes } from "./employeeRoutes";
import { adminRoutes } from "./adminRoutes";

const router = createBrowserRouter([
  ...publicRoutes,
  ...employeeRoutes,
  ...adminRoutes,
]);

export default router;