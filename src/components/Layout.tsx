import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow w-11/12 max-w-[1100px] mx-auto py-2 flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
