import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;