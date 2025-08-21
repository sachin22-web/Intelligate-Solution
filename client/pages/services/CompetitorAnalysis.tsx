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
  BarChart3,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Award,
  Eye,
  Building,
  PieChart,
  LineChart,
  Globe,
  UserCheck,
  FileText,
  Shield,
  Zap,
  Search,
  Activity,
  Briefcase,
  MapIcon,
  Clock,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CompetitorAnalysis() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const analysisAreas = [
    {
      title: "Headcount Analysis",
      description:
        "Track competitor team sizes, growth rates, and hiring velocity across departments",
      icon: Users,
      color: "blue",
      details: [
        "Team size trends",
        "Department-wise growth",
        "Hiring velocity metrics",
        "Org structure insights",
      ],
    },
    {
      title: "Role Analysis",
      description:
        "Understand what positions competitors are prioritizing and skill sets they're seeking",
      icon: Briefcase,
      color: "green",
      details: [
        "New role creations",
        "Priority positions",
        "Skill requirements",
        "Job level distribution",
      ],
    },
    {
      title: "Compensation Packages",
      description:
        "Comprehensive salary benchmarking and benefits analysis across competitor landscape",
      icon: DollarSign,
      color: "yellow",
      details: [
        "Salary ranges",
        "Bonus structures",
        "Stock options",
        "Benefits packages",
      ],
    },
    {
      title: "Geographic Footprint",
      description:
        "Map competitor presence, expansion plans, and location-based hiring strategies",
      icon: Globe,
      color: "purple",
      details: [
        "Office locations",
        "Remote policies",
        "Expansion plans",
        "Regional focus areas",
      ],
    },
  ];

  const insightExamples = [
    {
      category: "Hiring Velocity Intelligence",
      scenario: "Tech startup vs. established players",
      insight:
        "Competitor X increased engineering headcount by 40% in Q3, focusing on ML/AI roles with 25% salary premium",
      action:
        "Accelerate your AI hiring timeline and adjust compensation strategy to remain competitive",
      impact:
        "Secured 3 key AI engineers before competitor could approach them",
    },
    {
      category: "Compensation Strategy",
      scenario: "Financial services expansion",
      insight:
        "Top 3 competitors offering 30% higher base + equity packages for VP-level fintech roles in Bangalore",
      action:
        "Restructure compensation bands and introduce performance-based equity for senior roles",
      impact:
        "Reduced senior-level attrition by 50% and improved offer acceptance rates",
    },
    {
      category: "Market Positioning",
      scenario: "Pharmaceutical talent war",
      insight:
        "Competitors focusing on regulatory affairs talent with specific USFDA experience premium",
      action:
        "Develop targeted sourcing strategy for regulatory professionals with international experience",
      impact: "Built regulatory team 6 months ahead of expansion timeline",
    },
    {
      category: "Geographic Strategy",
      scenario: "Manufacturing expansion",
      insight:
        "Key competitor establishing R&D center in Pune, targeting automotive engineers from Germany",
      action:
        "Fast-track Pune office setup and create attractive relocation packages for European talent",
      impact:
        "Captured 40% of target talent pool before competitor's office launch",
    },
  ];

  const reportFeatures = [
    {
      feature: "Executive Summary Dashboard",
      description:
        "High-level insights with key findings and strategic recommendations",
      icon: BarChart3,
    },
    {
      feature: "Competitor Heat Map",
      description:
        "Visual representation of competitive intensity across roles and locations",
      icon: Activity,
    },
    {
      feature: "Salary Benchmark Charts",
      description: "Detailed compensation analysis with percentile breakdowns",
      icon: LineChart,
    },
    {
      feature: "Hiring Trend Analysis",
      description:
        "Time-series data showing competitor hiring patterns and forecasts",
      icon: TrendingUp,
    },
    {
      feature: "Talent Flow Mapping",
      description:
        "Movement patterns between competitors and talent acquisition strategies",
      icon: Users,
    },
    {
      feature: "Strategic Recommendations",
      description:
        "Actionable insights with prioritized next steps and timeline",
      icon: Target,
    },
  ];

  const ndaFeatures = [
    {
      title: "Data Security",
      description: "Bank-grade encryption and secure data handling protocols",
      icon: Shield,
    },
    {
      title: "Confidentiality Guarantees",
      description:
        "Strict NDAs with all research team members and data partners",
      icon: FileText,
    },
    {
      title: "Anonymous Reporting",
      description:
        "All insights delivered without revealing data collection methods",
      icon: Eye,
    },
    {
      title: "Selective Sharing",
      description:
        "You control who receives reports and at what level of detail",
      icon: UserCheck,
    },
  ];

  const metrics = [
    { label: "Companies Analyzed", value: "200+", icon: Building },
    { label: "Data Points Tracked", value: "50K+", icon: BarChart3 },
    { label: "Industries Covered", value: "25+", icon: Globe },
    { label: "Confidential Reports", value: "100%", icon: Shield },
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
              Know Who's Hiring – And How You Can Stay Ahead
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              Gain strategic advantage by understanding hiring patterns, skill
              sets, and compensation trends in your industry peers.
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

      {/* What We Analyze */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              What We Analyze
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Comprehensive competitor intelligence across four key dimensions
              to give you complete market visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {analysisAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-16 h-16 rounded-full bg-${area.color}-100 flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`h-8 w-8 text-${area.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {area.title}
                        </h3>
                        <p className="text-gray-700 mb-6">{area.description}</p>
                        <div className="space-y-2">
                          {area.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {detail}
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

      {/* Actionable Insight Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Actionable Insight Examples
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Real competitive intelligence scenarios showing how insights
              translate into strategic advantage
            </p>
          </div>

          <div className="space-y-8">
            {insightExamples.map((example, index) => (
              <Card key={index} className="professional-card animate-on-scroll">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {example.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Scenario
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {example.scenario}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-blue-600" />
                        Intelligence Gathered
                      </h4>
                      <p className="text-gray-700 text-sm">{example.insight}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-orange-600" />
                        Strategic Action
                      </h4>
                      <p className="text-gray-700 text-sm">{example.action}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Business Impact
                      </h4>
                      <p className="text-green-800 text-sm font-medium">
                        {example.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Comprehensive Analysis Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Detailed reports with visual analytics, comparison charts, and
              strategic recommendations
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
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.feature}
                      </h3>
                      <p className="text-gray-700 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NDA-Backed Reports */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              NDA-Backed Confidential Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Your competitive intelligence stays secure with industry-leading
              confidentiality protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ndaFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* NDA Assurance */}
          <div className="mt-16 text-center animate-on-scroll">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  100% Confidentiality Guaranteed
                </h3>
                <p className="text-gray-700 mb-6">
                  All competitive intelligence reports are protected under
                  strict NDAs. Your strategic insights remain confidential and
                  are never shared with competitors or third parties.
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  View Sample NDA
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
              Ready to Gain Competitive Intelligence?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Get confidential insights into your competitors' hiring strategies
              and stay ahead in the talent market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Request Competitor Analysis
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Schedule Confidential Brief
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
