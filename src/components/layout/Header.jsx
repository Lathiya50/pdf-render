import { MoveLeftIcon, MenuIcon, X } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const routes = [
  {
    href: "dashboard",
    label: "Vendor Details",
  },
  {
    href: "invoice-details",
    label: "Invoice Details",
  },
  {
    href: "comments",
    label: "Comments",
  },
];

const Header = () => {
  const { logout, user } = useAuth();
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-2">
              <MoveLeftIcon size={"20"} className="text-gray-900" />
              <h2 className="text-lg font-semibold text-gray-900">
                Create New Invoice
              </h2>
            </div>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-50" />
              ) : (
                <MenuIcon size={24} className="text-gray-50" />
              )}
            </button>
          </div>

          {/* Navigation and User Info */}
          <div
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row w-full md:w-auto items-start md:items-center justify-between gap-4 md:gap-8 mt-4 md:mt-0`}
          >
            {/* Menu List */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
              {routes.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.label}
                  className="relative cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span
                    className={`${
                      pathname.includes(item.href)
                        ? "text-blue-500"
                        : "text-gray-600"
                    } hover:text-blue-600 transition-colors`}
                  >
                    {item.label}
                  </span>
                  {pathname.includes(item.href) && (
                    <div className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-blue-400"></div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* User Info and Logout */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
              <span className="text-gray-600">Welcome, {user?.username}</span>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors w-full md:w-auto"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
