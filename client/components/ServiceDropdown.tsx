import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const services = [
  { title: "Industry Expertise Hiring", path: "/services/industry-expertise" },
  { title: "Executive Search", path: "/services/executive-search" },
  { title: "Greenfield / Start-Up Hiring", path: "/services/startup-hiring" },
  { title: "RPO (Recruitment Process Outsourcing)", path: "/services/rpo" },
  { title: "Talent Mapping", path: "/services/talent-mapping" },
  { title: "Competitor Analysis", path: "/services/competitor-analysis" },
  { title: "Diversity Hiring", path: "/services/diversity-hiring" },
];

interface ServiceDropdownProps {
  currentPath?: string;
  isMobile?: boolean;
}

export default function ServiceDropdown({
  currentPath,
  isMobile = false,
}: ServiceDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = currentPath?.startsWith("/services");

  if (isMobile) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between w-full font-medium transition-colors ${
            isActive ? "text-blue-900" : "text-gray-700 hover:text-blue-900"
          }`}
        >
          Services
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isOpen ? "max-h-96 mt-2" : "max-h-0"
          }`}
        >
          <div className="pl-4 space-y-1">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="block py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1 font-medium transition-colors ${
          isActive
            ? "text-gray-900 hover:text-blue-900"
            : "text-gray-700 hover:text-blue-900"
        }`}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 z-50 ${
          isOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-2"
        }`}
      >
        <div className="py-2">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors border-b border-gray-100 last:border-b-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium">{service.title}</div>
            </Link>
          ))}
        </div>

        {/* View All Services Link */}
        {/* <div className="border-t border-gray-200 p-2">
          <Link
            to="/services"
            className="block px-2 py-2 text-sm font-medium text-blue-900 hover:bg-blue-50 rounded transition-colors text-center"
            onClick={() => setIsOpen(false)}
          >
            View All Services →
          </Link>
        </div> */}
      </div>
    </div>
  );
}
