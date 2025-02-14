import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <main className="w-full px-4 py-8 ">
        <Outlet />
      </main>
    </div>
  );
  x;
};

export default Layout;
