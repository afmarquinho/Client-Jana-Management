import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow w-11/12 max-w-7x1 self-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
