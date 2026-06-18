import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/auth/Login";
import DesignSystemPlayground from "../pages/DesignSystemPlayground";
import ContribuablesPage from "../pages/contribuables/ContribuablesPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { index: true, element: <Dashboard /> },
      { path: "test", element: <DesignSystemPlayground /> },
      { path: "/stat", element: <Dashboard /> },
      { path: "/contribuables", element: <ContribuablesPage />}
    ]
  }
]);