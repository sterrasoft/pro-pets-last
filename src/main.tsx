import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home.tsx";
import { About } from "./pages/About.tsx";
import { AuthLayout } from "./layouts/AuthLayout.tsx";
import { Login } from "./pages/Auth/Login.tsx";
import { Register } from "./pages/Auth/Register.tsx";
import { DashboardHome } from "./pages/Dashboard/DashboardHome.tsx";
import { DashboardLost } from "./pages/Dashboard/DashboardLost.tsx";
import { DashboardFind } from "./pages/Dashboard/DashboardFind.tsx";
import { ProtectedRoute } from "./pages/ProtectedRoute.tsx";

const isAuthenticated = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      { index: true, Component: App },
      {
        path: "dashboard",
        children: [
          { index: true, Component: DashboardHome },
          { path: "lost", Component: DashboardLost },
          { path: "find", Component: DashboardFind },
        ],
      },
    ],
  },
  { path: "home", Component: Home },
  { path: "login", Component: Login },
  { path: "register", Component: Register },
  { index: true, path: "about", Component: About },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
