import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative p-1.5 sm:p-2 bg-gradient-to-br from-blue-900 to-red-600 rounded-lg sm:rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fffd6997b070949e7808ca68d4da19889?format=webp&width=800"
                    alt="Intelligate Solutions Logo"
                    className="h-6 w-6 sm:h-8 sm:w-8 filter brightness-0 invert"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">Intelligate Solutions</span>
                  <span className="text-xs text-red-600 font-medium tracking-wider hidden sm:block">A GATEWAY OF INTELLIGENCE</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</Link>
              <Link to="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</Link>
            </nav>

            <div className="flex items-center gap-2">
              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919971019767"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors text-sm sm:text-base"
              >
                <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden">WA</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/industries"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                to="/openings"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Current Openings
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl text-gray-900">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-600">{description}</p>
              <p className="text-gray-500">
                This page is currently under development. Please continue prompting to have us fill in the content for this section.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ArrowLeft size={16} />
                    Back to Home
                  </Button>
                </Link>
                <a 
                  href="https://wa.me/919971019767" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                    <MessageCircle size={16} />
                    Contact Us
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

            {/* Company Info */}
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fffd6997b070949e7808ca68d4da19889?format=webp&width=800"
                    alt="Intelligate Solutions Logo"
                    className="h-6 w-6 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-xl font-bold">Intelligate Solutions</h3>
              </div>
              <p className="text-gray-300 mb-4">A Gateway of Intelligence - Delivering future-ready talent for India's most dynamic industries.</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/intelligatesolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
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
                <a
                  href="https://www.linkedin.com/company/intelligate-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4 text-red-400">Quick Links</h4>
              <nav className="space-y-2">
                <Link to="/" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">About Us</Link>
                <Link to="/services" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Services</Link>
                <Link to="/industries" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Industries</Link>
                <Link to="/openings" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Current Openings</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4 text-red-400">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white cursor-pointer transition-colors">Executive Search</li>
                <li className="hover:text-white cursor-pointer transition-colors">Strategic Leadership Hiring</li>
                <li className="hover:text-white cursor-pointer transition-colors">Lateral & Bulk Hiring</li>
                <li className="hover:text-white cursor-pointer transition-colors">Campus Placements</li>
                <li className="hover:text-white cursor-pointer transition-colors">Industry Training</li>
                <li className="hover:text-white cursor-pointer transition-colors">Diversity Sourcing</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-on-scroll">
              <h4 className="text-lg font-semibold mb-4 text-red-400">Contact Us</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Rohtak Office</p>
                    <p className="text-sm">155/29 Ram Gopal Colony, Delhi Road</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Noida Office</p>
                    <p className="text-sm">D-80, Sector 2</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-400" />
                  <span className="text-sm">9650923366 / 9971019767</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-400" />
                  <span className="text-sm">admin@intelligatesolution.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-300">© 2025 Intelligate Solutions. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919971019767" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
