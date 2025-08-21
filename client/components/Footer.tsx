import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Quick Links */}
          <div className="animate-on-scroll">
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Company Profile
              </Link>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Life @ Intelligate
              </Link>
              <Link
                to="/"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Disclaimer
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="animate-on-scroll">
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <nav className="space-y-3">
              <Link
                to="/services/executive-search"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Executive Search
              </Link>
              <Link
                to="/services/rpo"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                RPO Services
              </Link>
              <Link
                to="/services/diversity-hiring"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Diversity Hiring
              </Link>
              <Link
                to="/services/startup-hiring"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Startup Hiring
              </Link>
              <Link
                to="/services/talent-mapping"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Talent Mapping
              </Link>
              <Link
                to="/services/competitor-analysis"
                className="block text-gray-300 hover:text-orange-400 transition-colors text-sm"
              >
                Competitor Analysis
              </Link>
            </nav>
          </div>

          {/* Enquiry Details */}
          <div className="animate-on-scroll">
            <h4 className="text-xl font-bold mb-6 text-white">
              Enquiry details
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-orange-400 font-semibold">
                  Corporate enquiry:
                </span>
                <a
                  href="mailto:admin@intelligatesolution.com"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  admin@intelligatesolution.com
                </a>
              </div>
              <div>
                <span className="text-orange-400 font-semibold">
                  Corporate communication:
                </span>
                <a
                  href="mailto:akhil.kaushik@intelligatesolution.com"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  akhil.kaushik@intelligatesolution.com
                </a>
              </div>
              <div>
                <span className="text-orange-400 font-semibold">Join Us:</span>
                <a
                  href="mailto:admin@intelligatesolution.com"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  admin@intelligatesolution.com
                </a>
              </div>
              <div>
                <span className="text-orange-400 font-semibold">
                  Opportunity with premium clients:
                </span>
                <a
                  href="mailto:akhil.kaushik@intelligatesolution.com"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  akhil.kaushik@intelligatesolution.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="animate-on-scroll">
            <h4 className="text-xl font-bold mb-6 text-white">Contact us</h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-orange-400 font-semibold block mb-1">
                  Contact no:
                </span>
                <a
                  href="tel:+917042923666"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 9650923366/ +91 9971019767
                </a>
              </div>
              <div>
                <span className="text-orange-400 font-semibold block mb-1">
                  Address:
                </span>
                <div>
                  <p className="font-medium">Noida Office :</p>
                  <p className="text-sm"> D-80, Sector 2</p>
                </div>
                <div>
                  <p className="font-medium">Rohtak Office :</p>
                  <p className="text-sm">155/29 Ram Gopal Colony, Delhi Road</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/Intelligate.Solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/akhil-kaushik-7928471b?originalSubdomain=in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/919971019767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © Intelligate HR 2024 | All Rights Reserved
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
