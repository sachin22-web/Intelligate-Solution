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
  Map,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Award,
  Eye,
  Building,
  BarChart3,
  PieChart,
  LineChart,
  Globe,
  UserCheck,
  FileText,
  Lightbulb,
  Zap,
  Search,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TalentMapping() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const benefits = [
    {
      title: "Strategic Workforce Planning",
      description:
        "Make informed decisions about hiring, expansion, and talent development",
      icon: Target,
      color: "blue",
    },
    {
      title: "Competitive Intelligence",
      description:
        "Understand your position in the talent market relative to competitors",
      icon: Eye,
      color: "purple",
    },
    {
      title: "Cost Optimization",
      description: "Optimize compensation packages based on real market data",
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Risk Mitigation",
      description:
        "Identify potential talent gaps before they impact your business",
      icon: Award,
      color: "orange",
    },
  ];

  const useCases = [
    {
      title: "Market Expansion",
      description: "Planning to enter a new geography or market segment",
      scenario: "A fintech company expanding from Mumbai to Bangalore",
      insights: [
        "Available tech talent pool size",
        "Salary benchmarks for key roles",
        "Competition intensity analysis",
        "Best sourcing channels identified",
      ],
      outcome:
        "Successful expansion with 40% faster hiring and 15% lower costs",
      icon: Globe,
    },
    {
      title: "Leadership Planning",
      description: "Succession planning and leadership development strategy",
      scenario: "Manufacturing company preparing for C-suite transitions",
      insights: [
        "Executive talent availability",
        "Leadership compensation trends",
        "Skill gap analysis",
        "Retention risk assessment",
      ],
      outcome:
        "Smooth leadership transition with internal promotions and external hires",
      icon: Users,
    },
    {
      title: "Retention Strategy",
      description: "Understanding flight risk and retention opportunities",
      scenario: "IT services company facing high attrition",
      insights: [
        "Market movement patterns",
        "Compensation gap analysis",
        "Competitor hiring trends",
        "Exit interview insights",
      ],
      outcome: "25% reduction in attrition through targeted retention programs",
      icon: UserCheck,
    },
  ];

  const reportFeatures = [
    {
      feature: "Talent Availability Heatmap",
      description:
        "Visual representation of talent density across locations and industries",
      icon: Map,
    },
    {
      feature: "Salary Benchmarking",
      description: "Comprehensive compensation analysis for all role levels",
      icon: BarChart3,
    },
    {
      feature: "Competitor Analysis",
      description:
        "Detailed insights into competitor hiring patterns and strategies",
      icon: Building,
    },
    {
      feature: "Market Trends",
      description: "Emerging skill demands and future talent requirements",
      icon: TrendingUp,
    },
    {
      feature: "Sourcing Strategy",
      description: "Recommended channels and approaches for talent acquisition",
      icon: Search,
    },
    {
      feature: "Risk Assessment",
      description:
        "Identification of potential talent gaps and mitigation strategies",
      icon: Award,
    },
  ];

  const metrics = [
    { label: "Markets Analyzed", value: "50+", icon: Globe },
    { label: "Companies Mapped", value: "500+", icon: Building },
    { label: "Roles Benchmarked", value: "1000+", icon: Users },
    { label: "Data Points", value: "10K+", icon: BarChart3 },
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
              Visualize the Talent Landscape Before You Hire
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We create strategic talent maps with insights on availability,
              salary benchmarks, and competitor movements.
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

      {/* How Talent Mapping Helps You Win */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              How Talent Mapping Helps You Win
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Strategic insights that transform how you approach talent
              acquisition and workforce planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll text-center hover:shadow-xl transition-all duration-300"
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
                    <p className="text-gray-700 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Strategic Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Real-world applications of talent mapping across different
              business scenarios
            </p>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll"
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {useCase.title}
                            </h3>
                            <p className="text-gray-600">
                              {useCase.description}
                            </p>
                          </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">
                            Scenario:
                          </h4>
                          <p className="text-blue-800 text-sm">
                            {useCase.scenario}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Key Insights Delivered:
                        </h4>
                        <div className="space-y-3">
                          {useCase.insights.map((insight, insightIndex) => (
                            <div
                              key={insightIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {insight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Business Outcome
                        </h4>
                        <p className="text-green-800 font-medium">
                          {useCase.outcome}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample Report Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              What's Inside Our Talent Maps
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Comprehensive analysis across multiple dimensions to give you
              complete market visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.feature}
                        </h3>
                        <p className="text-gray-700 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Sample Report CTA */}
          <div className="mt-16 text-center animate-on-scroll">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  See a Sample Report
                </h3>
                <p className="text-gray-700 mb-6">
                  Get a glimpse of our detailed talent mapping reports with
                  anonymized data and insights
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Request Sample Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Map Your Talent Landscape?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Get strategic insights that will transform your hiring approach
              and competitive positioning in the talent market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Get Talent Mapping Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Schedule Strategy Session
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
