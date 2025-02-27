import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import LoginPage from "./app/login/page..tsx";
import TestNav from "./latihan/testNav.tsx";
import Base from "./latihan/baseData.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/chart",
    element: <Base />,
  },
  {
    path: "/tesnav",
    element: <TestNav />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
