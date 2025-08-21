import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import ServiceDropdown from "./ServiceDropdown";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <img
                  src="/images/Logo.png"
                  alt="Intelligate Solutions Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl font-bold text-blue-900 leading-tight">
                  Intelligate Solutions
                </span>
                <span className="text-[10px] sm:text-xs text-red-600 font-medium tracking-wider hidden sm:block">
                  A GATEWAY OF INTELLIGENCE
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              About Us
            </Link>
            <ServiceDropdown currentPath={location.pathname} />
            <Link
              to="/industries"
              className={`font-medium transition-colors ${
                location.pathname === "/industries"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Industries
            </Link>
            <Link
              to="/openings"
              className={`font-medium transition-colors ${
                location.pathname === "/openings"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Current Openings
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/get-quote"
              className={`font-medium transition-colors ${
                location.pathname === "/get-quote"
                  ? "text-blue-900"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              Get Quote
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919971019767"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-2 sm:px-3 md:px-4 py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors text-xs sm:text-sm md:text-base"
            >
              <MessageCircle
                size={14}
                className="sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]"
              />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">WA</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/about"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <div className="px-3 py-2">
              <ServiceDropdown currentPath={location.pathname} isMobile />
            </div>
            <Link
              to="/industries"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/industries"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/openings"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/openings"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Current Openings
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/contact"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/get-quote"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === "/get-quote"
                  ? "text-blue-900 bg-blue-50"
                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
