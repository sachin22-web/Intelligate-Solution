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
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Award,
  Eye,
  Building,
  Heart,
  Globe,
  UserCheck,
  FileText,
  Shield,
  Zap,
  Search,
  Activity,
  Briefcase,
  Star,
  Lightbulb,
  BarChart3,
  PieChart,
  Users2,
  Handshake,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DiversityHiring() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const whyDiversityMatters = [
    {
      title: "Enhanced Innovation",
      description:
        "Diverse teams generate 19% higher revenue from innovation through varied perspectives and problem-solving approaches",
      icon: Lightbulb,
      color: "purple",
      stat: "+19% Revenue",
    },
    {
      title: "Better Decision Making",
      description:
        "Organizations with diverse leadership make better business decisions 87% of the time compared to homogeneous teams",
      icon: Target,
      color: "blue",
      stat: "87% Better Decisions",
    },
    {
      title: "Improved Performance",
      description:
        "Companies in top quartile for diversity are 35% more likely to outperform industry median financial returns",
      icon: TrendingUp,
      color: "green",
      stat: "+35% Performance",
    },
    {
      title: "Enhanced Reputation",
      description:
        "70% of job seekers consider diversity when evaluating companies, improving employer brand and talent attraction",
      icon: Award,
      color: "orange",
      stat: "70% Candidate Preference",
    },
  ];

  const sourcingChannels = [
    {
      channel: "Professional Women's Networks",
      description:
        "Partner with women-focused professional organizations and industry groups",
      examples: [
        "Women in Tech",
        "Women Who Code",
        "Lean In Circles",
        "Industry-specific women's associations",
      ],
      icon: Users2,
    },
    {
      channel: "Diversity-Focused Job Boards",
      description:
        "Utilize specialized platforms that reach underrepresented talent pools",
      examples: [
        "DiversityJobs",
        "PowerToFly",
        "HireDiversity",
        "Inclusion-focused LinkedIn groups",
      ],
      icon: Search,
    },
    {
      channel: "HBCU & Minority-Serving Institutions",
      description:
        "Build relationships with universities that serve diverse student populations",
      examples: [
        "Campus recruitment programs",
        "Internship partnerships",
        "Alumni networks",
        "Faculty connections",
      ],
      icon: Building,
    },
    {
      channel: "Community Organizations",
      description:
        "Connect with local and national organizations supporting diverse professionals",
      examples: [
        "LGBTQ+ professional groups",
        "Veteran organizations",
        "Disability advocacy groups",
        "Cultural associations",
      ],
      icon: Heart,
    },
    {
      channel: "Employee Referral Programs",
      description:
        "Leverage diverse employees' networks to expand candidate reach",
      examples: [
        "Structured referral incentives",
        "Diversity-focused referral campaigns",
        "ERG partnerships",
        "Mentor networks",
      ],
      icon: Handshake,
    },
    {
      channel: "Social Impact Partnerships",
      description:
        "Collaborate with organizations focused on diversity and inclusion in the workplace",
      examples: [
        "Coding bootcamps",
        "Skills training programs",
        "Return-to-work initiatives",
        "Career transition support",
      ],
      icon: Star,
    },
  ];

  const assessmentFramework = [
    {
      stage: "Job Description Optimization",
      description:
        "Remove bias-inducing language and emphasize inclusive company culture",
      practices: [
        "Gender-neutral language screening",
        "Inclusive benefits highlighting",
        "Diverse representation in imagery",
        "Clear diversity commitment statements",
      ],
      icon: FileText,
    },
    {
      stage: "Structured Interview Process",
      description:
        "Standardized evaluation criteria to minimize unconscious bias",
      practices: [
        "Behavioral interview questions",
        "Diverse interview panel composition",
        "Scoring rubrics for consistency",
        "Bias awareness training for interviewers",
      ],
      icon: UserCheck,
    },
    {
      stage: "Skills-Based Assessment",
      description:
        "Focus on competencies and capabilities rather than background or pedigree",
      practices: [
        "Anonymous technical assessments",
        "Portfolio-based evaluations",
        "Practical work simulations",
        "Multiple assessment format options",
      ],
      icon: Award,
    },
    {
      stage: "Decision Review Process",
      description:
        "Multi-level review to ensure fair and unbiased final selections",
      practices: [
        "Hiring committee reviews",
        "Bias checkpoint discussions",
        "Data-driven decision tracking",
        "Feedback loop implementation",
      ],
      icon: Eye,
    },
  ];

  const successMetrics = [
    {
      metric: "Representation Improvement",
      description: "Track diversity metrics across all levels and departments",
      kpis: [
        "Gender representation",
        "Ethnic diversity",
        "Age diversity",
        "LGBTQ+ inclusion",
      ],
      icon: PieChart,
    },
    {
      metric: "Hiring Pipeline Health",
      description: "Monitor diversity at each stage of the recruitment process",
      kpis: [
        "Application diversity",
        "Interview conversion rates",
        "Offer acceptance rates",
        "Time-to-hire parity",
      ],
      icon: BarChart3,
    },
    {
      metric: "Employee Experience",
      description: "Measure satisfaction and retention among diverse hires",
      kpis: [
        "Engagement scores",
        "Retention rates",
        "Promotion rates",
        "Internal mobility",
      ],
      icon: Users,
    },
    {
      metric: "Business Impact",
      description: "Connect diversity initiatives to business outcomes",
      kpis: [
        "Innovation metrics",
        "Customer satisfaction",
        "Market expansion",
        "Revenue growth",
      ],
      icon: TrendingUp,
    },
  ];

  const caseStudies = [
    {
      company: "Technology Startup",
      challenge:
        "Male-dominated engineering team lacking diverse perspectives in product development",
      solution:
        "Implemented targeted sourcing through women's coding bootcamps and diverse university partnerships",
      outcome:
        "Achieved 40% women representation in engineering within 12 months, leading to more inclusive product features",
      impact:
        "20% increase in female user engagement and 2 patent applications for accessibility features",
    },
    {
      company: "Financial Services Firm",
      challenge:
        "Leadership team lacked diversity, impacting decision-making and market understanding",
      solution:
        "Executive search focused on diverse leadership talent with structured bias-free assessment process",
      outcome:
        "Appointed 3 diverse C-level executives, transformed leadership composition and strategic approach",
      impact:
        "Expanded into 2 new market segments and improved employee satisfaction scores by 35%",
    },
    {
      company: "Manufacturing Company",
      challenge:
        "Aging workforce with limited diversity in technical roles affecting innovation capacity",
      solution:
        "Multi-channel diversity sourcing including veteran programs and community college partnerships",
      outcome:
        "Increased workforce diversity by 50% while maintaining technical excellence standards",
      impact:
        "Launched 3 innovative product lines and reduced workplace incidents by 25%",
    },
  ];

  const metrics = [
    { label: "Diverse Hires Placed", value: "1000+", icon: Users },
    { label: "Client Diversity Improvement", value: "45%", icon: TrendingUp },
    { label: "Inclusive Assessment Success", value: "95%", icon: Award },
    { label: "Retention Rate", value: "88%", icon: Heart },
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
              Building Inclusive Workplaces Through Smart Hiring
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We help organizations embed diversity in their talent pipeline
              through intentional sourcing and unbiased screening.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-900 mb-2">
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

      {/* Why Diversity Matters */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Why Diversity Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Data-driven insights showing the tangible business benefits of
              diverse and inclusive workplaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDiversityMatters.map((benefit, index) => {
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
                    <p className="text-gray-700 text-sm mb-4">
                      {benefit.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className={`bg-${benefit.color}-100 text-${benefit.color}-800 font-bold`}
                    >
                      {benefit.stat}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEI Sourcing Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              DEI Sourcing Channels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Strategic partnerships and platforms to reach diverse talent pools
              across all industries and experience levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sourcingChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {channel.channel}
                        </h3>
                        <p className="text-gray-700 mb-4 text-sm">
                          {channel.description}
                        </p>
                        <div className="space-y-2">
                          {channel.examples.map((example, exampleIndex) => (
                            <div
                              key={exampleIndex}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-sm text-gray-700">
                                {example}
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

      {/* Inclusive Assessment Framework */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Inclusive Assessment Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Systematic approach to remove bias and ensure fair evaluation
              throughout the hiring process
            </p>
          </div>

          <div className="space-y-8">
            {assessmentFramework.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll"
                >
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {stage.stage}
                          </h3>
                          <p className="text-gray-700">{stage.description}</p>
                        </div>
                      </div>

                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Best Practices:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {stage.practices.map((practice, practiceIndex) => (
                            <div
                              key={practiceIndex}
                              className="flex items-center gap-3"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span className="text-gray-700">{practice}</span>
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

      {/* Success Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Diversity Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Real transformations achieved through strategic diversity hiring
              initiatives
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="professional-card animate-on-scroll">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {study.company}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-700 text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-600" />
                        Solution
                      </h4>
                      <p className="text-gray-700 text-sm">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-blue-600" />
                        Outcome
                      </h4>
                      <p className="text-gray-700 text-sm">{study.outcome}</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        Business Impact
                      </h4>
                      <p className="text-green-800 text-sm font-medium">
                        {study.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Measuring Diversity Success
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Comprehensive metrics framework to track progress and demonstrate
              ROI of diversity initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {metric.metric}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4">
                      {metric.description}
                    </p>
                    <div className="space-y-2">
                      {metric.kpis.map((kpi, kpiIndex) => (
                        <Badge
                          key={kpiIndex}
                          variant="outline"
                          className="text-xs mr-1 mb-1"
                        >
                          {kpi}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build a More Inclusive Workforce?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Partner with us to create meaningful diversity initiatives that
              drive both inclusion and business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-purple-900 hover:bg-gray-100"
                >
                  Start Diversity Initiative
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-900"
                >
                  Schedule DEI Consultation
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
