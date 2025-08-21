import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ServiceDropdown from "@/components/ServiceDropdown";

export default function PlacementVision() {
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
              <ServiceDropdown currentPath="/placement-vision" />
              <Link to="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</Link>
              <Link to="/get-quote" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Get Quote</Link>
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
              <div className="px-3 py-2">
                <ServiceDropdown currentPath="/placement-vision" />
              </div>
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
              <Link
                to="/get-quote"
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="bg-gradient-to-r from-blue-900 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement & Vision</h1>
          <p className="text-xl text-blue-100">Our comprehensive approach to talent acquisition and organizational growth</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 1. Placement Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontSize: '36px' }}>Our Placement Process</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Every candidate at Intelli-gate is carefully filtered by our executives through a detailed assessment of their talent and skills. With 25+ years of industry experience, we deeply understand pain areas and talent gaps. We ensure that only the most suitable candidates are presented to the employer after a rigorous evaluation.
              </p>
              
              {/* Bulleted List */}
              <div className="text-left max-w-3xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">Strategic Leadership Hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">Executive Search</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">Diversity Sourcing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">Lateral Hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">Bulk Hiring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Vision Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontSize: '36px' }}>Our Vision</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our vision is multifaceted — to be the most trusted partner for both employers and job seekers, enabling career success and empowering businesses.
              </p>
              
              {/* Square Bulleted List */}
              <div className="text-left max-w-4xl mx-auto">
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">▪</span>
                    <span className="text-lg text-gray-800">Providing customer delight, offering reliable services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">▪</span>
                    <span className="text-lg text-gray-800">Providing a growth-oriented environment for employees to fulfill aspirations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">▪</span>
                    <span className="text-lg text-gray-800">Contributing to the well-being of society with integrity and ethics.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontSize: '32px' }}>Why Choose Us?</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                We blend decades of recruitment experience with innovation to deliver unmatched results.
              </p>
              
              {/* Simple Bulleted List */}
              <div className="text-left max-w-4xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">25+ years of experience in strategic hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Access to premium client networks across industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Specialists for every domain: Automotive, Pharma, ITES & more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">Offices in Noida, Dehradun, and Rohtak</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Rohtak (Regd. Office)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">155/29 Ram Gopal Colony, Delhi Road</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Noida (Corporate Office)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">D-80, Sector 2</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:akhil.kaushik@intelligatesolution.com" className="flex items-center gap-2 text-blue-900 hover:text-blue-700">
                <Mail className="h-5 w-5" />
                akhil.kaushik@intelligatesolution.com
              </a>
              <a href="mailto:admin@intelligatesolution.com" className="flex items-center gap-2 text-blue-900 hover:text-blue-700">
                <Mail className="h-5 w-5" />
                admin@intelligatesolution.com
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:9650923366" className="flex items-center gap-2 text-blue-900 hover:text-blue-700">
                <Phone className="h-5 w-5" />
                9650923366
              </a>
              <a href="tel:9971019767" className="flex items-center gap-2 text-blue-900 hover:text-blue-700">
                <Phone className="h-5 w-5" />
                9971019767
              </a>
            </div>
            
            <div className="pt-4">
              <a 
                href="https://wa.me/919971019767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp: 9971019767
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <nav className="space-y-3">
                <Link to="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Home</Link>
                <Link to="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Company Profile</Link>
                <Link to="/about" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Life @ Intelligate</Link>
                <Link to="/" className="block text-gray-300 hover:text-orange-400 transition-colors text-sm">Disclaimer</Link>
              </nav>
            </div>

            {/* Enquiry Details */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Enquiry details</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-orange-400 font-semibold">Corporate enquiry:</span>
                  <a href="mailto:admin@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                   admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Corporate communication:</span>
                  <a href="mailto:akhil.kaushik@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    akhil.kaushik@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Join Us:</span>
                  <a href="mailto:admin@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    admin@intelligatesolution.com
                  </a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">Opportunity with premium clients:</span>
                  <a href="mailto:akhil.kaushik@intelligatesolution.com" className="block text-gray-300 hover:text-white transition-colors">
                    akhil.kaushik@intelligatesolution.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Contact us</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-orange-400 font-semibold block mb-1">Contact no:</span>
                  <a href="tel:+917042923666" className="text-gray-300 hover:text-white transition-colors">+91 9650923366/
+91 9971019767</a>
                </div>
                <div>
                  <span className="text-orange-400 font-semibold block mb-1">Address:</span>
                   <div>
                    <p className="font-medium">Noida Office :</p>
                    <p className="text-sm">   D-80, Sector 2</p>
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
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/akhil-kaushik-7928471b?originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
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
                <p className="text-gray-400">© Intelligate HR 2024 | All Rights Reserved</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
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
