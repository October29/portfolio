import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Home from "../pages/Home";
import Branding from "../pages/Branding";

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
      }
    ]
  }
])

export default router;