import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";
import Branding from "../pages/Branding";
import Illustration from "../pages/Illustration";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/branding',
        element: <Branding />
      },
      {
        path: '/Ilustracion',
        element: <Illustration />
      }
    ]
  }
])

export default router;