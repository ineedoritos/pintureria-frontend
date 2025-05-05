// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./context/AuthContext"; // 👈 Importa el nuevo AuthProvider

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

);
