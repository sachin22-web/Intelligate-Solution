import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  Users2,
  Search,
  Building,
  Car,
  Cpu,
  Zap,
  Pill,
  Home,
  Truck,
  Factory,
  Monitor,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Industries() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
        
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
           
            <nav className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</Link>
       <ServiceDropdown currentPath={location.pathname} />
              <Link to="/industries" className="text-gray-900 hover:text-blue-900 font-medium transition-colors">Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</Link>
                            <Link to="/get-quote" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Get Quote</Link>

            </nav>
            
            <div className="flex items-center gap-2">
             
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
               <ServiceDropdown currentPath={location.pathname}  />
             </div>
             
              <Link 
                to="/industries" 
                className="text-gray-900 bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
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
      </header> */}

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={["images/img.jpg", "images/ind.webp"]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-on-scroll">
              Delivering talent across India's fastest-growing verticals
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Our Industry Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              With decades of experience across diverse sectors, we understand
              the unique talent requirements of each industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Monitor className="h-16 w-16 text-blue-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">ITES & BPO</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Leading provider of technology talent for India's IT services
                  and business process outsourcing sector
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Car className="h-16 w-16 text-red-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">Automotive</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Trusted partner in automotive leadership roles, from
                  manufacturing to electric vehicle innovation
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Factory className="h-16 w-16 text-green-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">
                  Engineering & Manufacturing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Expert recruitment for precision engineering and advanced
                  manufacturing operations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Zap className="h-16 w-16 text-yellow-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">
                  Electrical & Electronics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Specialized talent acquisition for electrical systems and
                  electronic component manufacturing
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Truck className="h-16 w-16 text-gray-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">Tyre Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Deep expertise in tire manufacturing and automotive rubber
                  product development
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Cog className="h-16 w-16 text-orange-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Renewable energy and traditional power sector talent solutions
                  for sustainable growth
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Pill className="h-16 w-16 text-purple-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">Pharmaceuticals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Healthcare and pharmaceutical industry recruitment from
                  research to commercial operations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <Building className="h-16 w-16 text-teal-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-xl">Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Property development and real estate management professionals
                  across residential and commercial sectors
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Industry Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Automotive Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Successfully placed 50+ senior executives in India's leading
                  automotive companies, including EV startups and traditional
                  manufacturers.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  25+ years automotive expertise
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">
                  Manufacturing Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Enabled rapid scaling for manufacturing units across India
                  with strategic talent acquisition and bulk hiring solutions.
                </p>
                <div className="text-sm text-green-600 font-medium">
                  500+ placements annually
                </div>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900">
                  IT & Tech Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Partnered with leading IT companies for digital transformation
                  initiatives and emerging technology implementations.
                </p>
                <div className="text-sm text-purple-600 font-medium">
                  Tech leadership focus
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Industry-Specific Talent?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Let our industry experts help you find the perfect candidates who
              understand your sector's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
                >
                  Discuss Your Needs
                </Button>
              </Link>
              <Link to="/openings">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                >
                  View Current Openings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
