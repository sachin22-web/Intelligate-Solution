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
  Settings,
  Users,
  Target,
  CheckCircle,
  Clock,
  DollarSign,
  Award,
  Zap,
  Building,
  TrendingDown,
  Shield,
  BarChart3,
  UserCheck,
  FileCheck,
  Headphones,
  Cog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RPO() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const benefits = [
    {
      title: "Faster Time-to-Hire",
      description:
        "Reduce hiring TAT by 40-60% with dedicated resources and streamlined processes",
      icon: Clock,
      color: "blue",
      metric: "40-60% faster",
    },
    {
      title: "Lower Cost per Hire",
      description:
        "Significantly reduce recruitment costs while maintaining quality standards",
      icon: TrendingDown,
      color: "green",
      metric: "30-50% cost reduction",
    },
    {
      title: "Managed Compliance",
      description:
        "Full compliance management with labor laws, background checks, and documentation",
      icon: Shield,
      color: "purple",
      metric: "100% compliant",
    },
    {
      title: "Scalable Solutions",
      description:
        "Scale up or down based on your hiring needs without infrastructure overhead",
      icon: BarChart3,
      color: "orange",
      metric: "Unlimited scalability",
    },
  ];

  const embeddedModel = [
    {
      component: "Dedicated Recruiters",
      description:
        "Experienced recruiters work exclusively for your organization",
      features: ["Industry expertise", "Cultural alignment", "Brand advocacy"],
      icon: Users,
    },
    {
      component: "Technology Integration",
      description:
        "Seamless integration with your existing HR systems and processes",
      features: ["ATS integration", "Real-time reporting", "Custom dashboards"],
      icon: Settings,
    },
    {
      component: "Process Optimization",
      description:
        "Continuous improvement of recruitment workflows and candidate experience",
      features: [
        "Standard operating procedures",
        "Quality metrics",
        "Feedback loops",
      ],
      icon: Cog,
    },
    {
      component: "Compliance Management",
      description: "End-to-end compliance handling from sourcing to onboarding",
      features: [
        "Background verification",
        "Document management",
        "Legal compliance",
      ],
      icon: FileCheck,
    },
  ];

  const customPlans = [
    {
      tier: "SME Plan",
      target: "Small & Medium Enterprises",
      volume: "5-20 hires/month",
      features: [
        "Dedicated Recruiter (Part-time)",
        "Basic ATS Integration",
        "Monthly Reporting",
        "Email & Phone Support",
        "Standard Compliance",
      ],
      highlight: "Cost-effective",
    },
    {
      tier: "Growth Plan",
      target: "Growing Companies",
      volume: "20-50 hires/month",
      features: [
        "2-3 Dedicated Recruiters",
        "Full ATS Integration",
        "Weekly Reporting & Analytics",
        "Priority Support",
        "Advanced Compliance",
        "Custom Workflows",
      ],
      highlight: "Most Popular",
    },
    {
      tier: "Enterprise Plan",
      target: "Large Enterprises",
      volume: "50+ hires/month",
      features: [
        "Full Recruitment Team",
        "Complete Tech Stack",
        "Real-time Dashboards",
        "24/7 Support",
        "Global Compliance",
        "Custom Solutions",
        "SLA Guarantees",
      ],
      highlight: "Full Service",
    },
  ];

  const metrics = [
    { label: "Average TAT Reduction", value: "50%", icon: Clock },
    { label: "Cost Savings", value: "40%", icon: DollarSign },
    { label: "Client Satisfaction", value: "95%", icon: Award },
    { label: "Compliance Rate", value: "100%", icon: Shield },
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
              Outsource Hiring. Retain Control.
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              Full-cycle hiring solutions embedded into your business with
              dedicated recruitment experts.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits of RPO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Benefits of RPO
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Transform your recruitment function with measurable improvements
              in speed, cost, and quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll text-center"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-${benefit.color}-100 flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`h-8 w-8 text-${benefit.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {benefit.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`bg-${benefit.color}-100 text-${benefit.color}-800`}
                    >
                      {benefit.metric}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embedded Recruiters Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Embedded Recruiters Model
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Our recruiters become an extension of your team, working
              exclusively for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {embeddedModel.map((component, index) => {
              const Icon = component.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {component.component}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {component.description}
                        </p>
                        <div className="space-y-2">
                          {component.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Custom Plans for Every Business
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              From SMEs to large enterprises, we have the right RPO solution for
              your scale and requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {customPlans.map((plan, index) => (
              <Card
                key={index}
                className={`professional-card animate-on-scroll relative ${plan.highlight === "Most Popular" ? "ring-2 ring-blue-500" : ""}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      {plan.highlight}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.tier}
                    </h3>
                    <p className="text-gray-600 mb-4">{plan.target}</p>
                    <div className="text-3xl font-bold text-blue-600">
                      {plan.volume}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      className="w-full"
                      variant={
                        plan.highlight === "Most Popular"
                          ? "default"
                          : "outline"
                      }
                    >
                      Get {plan.tier}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let's discuss how our RPO solutions can help you reduce costs,
              improve quality, and accelerate your hiring timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Get Custom RPO Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Schedule RPO Consultation
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
