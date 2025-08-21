import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Search,
  Users,
  Target,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Eye,
  UserCheck,
  Building,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExecutiveSearch() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const searchProcess = [
    {
      step: 1,
      title: "Client Briefing & Strategy",
      description:
        "Deep-dive into role requirements, company culture, and success metrics",
      icon: Target,
      duration: "Week 1",
    },
    {
      step: 2,
      title: "Market Research & Mapping",
      description:
        "Comprehensive talent landscape analysis and prospect identification",
      icon: Search,
      duration: "Week 2-3",
    },
    {
      step: 3,
      title: "Discreet Approach & Assessment",
      description: "Confidential outreach and multi-layered evaluation process",
      icon: Shield,
      duration: "Week 4-6",
    },
    {
      step: 4,
      title: "Presentation & Selection",
      description:
        "Curated shortlist with detailed profiles and recommendations",
      icon: UserCheck,
      duration: "Week 7-8",
    },
  ];

  const placements = [
    {
      role: "Chief Executive Officer",
      industry: "Renewable Energy",
      challenge: "Turnaround leadership for struggling solar manufacturer",
      outcome:
        "Successfully recruited CEO who delivered 200% revenue growth in 18 months",
    },
    {
      role: "Chief Technology Officer",
      industry: "Fintech",
      challenge: "Digital transformation expertise for traditional banking",
      outcome:
        "Placed tech leader who launched 3 successful digital products, acquired 2M+ users",
    },
    {
      role: "Chief Operating Officer",
      industry: "Healthcare",
      challenge: "Scale operations across 15 cities while maintaining quality",
      outcome:
        "Recruited COO who streamlined operations, reduced costs by 30%, improved patient satisfaction by 40%",
    },
  ];

  const whyItWorks = [
    {
      title: "Absolute Confidentiality",
      description:
        "Discreet processes protecting both client and candidate reputations",
      icon: Shield,
      color: "blue",
    },
    {
      title: "Perfect Culture Fit",
      description:
        "Deep cultural assessment ensuring leadership alignment with organizational values",
      icon: Users,
      color: "green",
    },
    {
      title: "Domain Expertise",
      description:
        "Industry-specific knowledge enabling precise evaluation of technical and strategic capabilities",
      icon: Award,
      color: "purple",
    },
  ];

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
            
            
            <nav className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</Link>
              <ServiceDropdown currentPath={location.pathname} />
              <Link to="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</Link>
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
              <Link to="/" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
              <Link to="/services" className="text-gray-900 bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/industries" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/get-quote" className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={["/images/img.jpg", "/images/ind.webp"]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Top-Tier Leadership for a Changing World
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We identify, assess, and attract CXO-level talent using discreet,
              research-driven executive search strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Our Search Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Our Search Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              A systematic 4-step approach that ensures precision,
              confidentiality, and successful executive placements
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-red-500 hidden lg:block"></div>

            <div className="space-y-12 lg:space-y-24">
              {searchProcess.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} animate-on-scroll`}
                  >
                    <div
                      className={`lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}
                    >
                      <Card className="professional-card">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <Badge variant="secondary" className="mb-2">
                                {step.duration}
                              </Badge>
                              <h3 className="text-xl font-bold text-gray-900">
                                Step {step.step}: {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-gray-700">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    <div className="lg:w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Recent Executive Placements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Successful C-level placements across diverse industries
              demonstrating our executive search expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {placements.map((placement, index) => (
              <Card key={index} className="professional-card animate-on-scroll">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {placement.role}
                    </h3>
                    <Badge variant="secondary">{placement.industry}</Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-700 text-sm">
                        {placement.challenge}
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Outcome:
                      </h4>
                      <p className="text-green-800 text-sm">
                        {placement.outcome}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Why Our Executive Search Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Three pillars that make our executive search process uniquely
              effective
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyItWorks.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll text-center"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-20 h-20 rounded-full bg-${feature.color}-100 flex items-center justify-center mx-auto mb-6`}
                    >
                      <Icon className={`h-10 w-10 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Next Executive Leader?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let our executive search specialists help you identify and attract
              top-tier leadership talent for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Start Executive Search
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Schedule Consultation
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
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50 animate-bounce"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
