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
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ServiceDropdown from "@/components/ServiceDropdown";
import GetQuoteModal from "@/components/GetQuoteModal";
import HomepageModal from "@/components/HomepageModal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
interface Job {
  _id: string;
  title: string;
  location: string;
  experience: string;
  industry: string;
  salary: string;
  type: string;
  description: string;
  skills: string[];
  postedDate: Date;
  status: string;
}

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [latestJobs, setLatestJobs] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHomepageModalOpen, setIsHomepageModalOpen] = useState(false);
  const location = useLocation();

  // Fetch latest jobs
  useEffect(() => {
    const fetchLatestJobs = async () => {
      try {
        setLoadingJobs(true);
        const response = await fetch("/api/jobs");
        if (response.ok) {
          const jobs = await response.json();
          setLatestJobs(jobs.slice(0, 3)); // Get only first 3 jobs
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchLatestJobs();
  }, []);

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Show homepage modal after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHomepageModalOpen(true);
    }, 2000); // Show modal after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // 4 slides
    }, 4000); // every 4 sec

    return () => clearInterval(interval);
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
                    src="/images/Logo.png"
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
              <Link to="/" className="text-gray-900 hover:text-blue-900 font-medium transition-colors">Home</Link>
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
              <Link
                to="/"
                className="text-gray-900 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
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
      </header> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Animated Background Slider */}
        <div className="hero-slider">
          {[
            "/images/current.jpg",
            "/images/images.webp",
            "/images/ser.jpeg",
            "https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F4c544a153f3d4f8ab328d65415496f5b?format=webp&width=800",
          ].map((img, i) => (
            <div
              key={i}
              className={`slide ${activeIndex === i ? "active" : ""}`}
              style={{
                backgroundImage: `url('${img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="particles">
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
            <span className="particle"></span>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="hero-content">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 text-white">
              A Gateway of{" "}
              <span className="font-black tracking-wider">INTELLIGENCE</span>
            </h1>
            <div className="animate-fade-in-up animation-delay-600 opacity-0">
              <Button
                size="lg"
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xl px-16 py-6 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Opportunities
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Who We Are
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="text-left space-y-6 mb-8">
                <p className="text-lg text-gray-700">
                  Intelligate Solutions is established for imparting Manpower
                  Recruitment to Automotive, Engineering & IT sector on Pan
                  India basis. We are emerging as the leading recruitment brand
                  nationally for our clients.
                </p>
                <p className="text-lg text-gray-700">
                  We are in the business of effectively understanding manpower
                  requirements, procuring the candidate with the desired profile
                  and building trusting relationships. With our industry
                  expertise, we understand that company's today require more
                  than a skilled candidate; they reach for employees who are
                  productive, exhibit a positive attitude and have the ability
                  to become a member of their team.
                </p>
                <p className="text-lg text-gray-700">
                  Apart from traditional practices to source candidates, we also
                  incorporate innovative means to procure right professionals.
                  Our experts leverage the power of technology-based recruitment
                  and focus on online media to make sure that our clients
                  receive the most suitable candidates for their organization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  About Intelligate Solutions
                </h3>
                <div className="text-left space-y-4">
                  <p className="text-lg text-gray-700">
                    Intelligate Solution is a Leading HR consulting company with
                    persistent zeal to provide best effective recruitment
                    solutions. Intelligate Solutions was founded in 2015. Over
                    the years, we have established ourselves as a recognized
                    recruitment brand. We are the preferred recruitment partners
                    for clients and a trusted consultant for professionals at
                    Pan India Basis.
                  </p>
                  <p className="text-lg text-gray-700">
                    Intelligate Solutions's roots in consultancy enable us to
                    bring a unique approach to recruitment. Our focus has been
                    on Middle and Senior Management talent needs. We recruit
                    across various industry segments for multinational
                    corporations as well as leading business houses.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center gap-8 flex-wrap">
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  60+ man-years of industry experience
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-2">
                  PAN India Presence
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Companies Section */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-gray-600">
              We've partnered with industry leaders across various sectors
            </p>
          </div>

          <div className="relative">
            <div className="company-logos-scroll">
              <div className="logos-track">
                {/* First set of logos */}
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Wipro
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Teleperformance
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Telus
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Concentrix
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Cognizant
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Aisin Automotive
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Toyota Group
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      FCC Clutch
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Satyam Auto
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Agratas Energy
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Tata Enterprises
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Krishna Group
                    </div>
                  </div>
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Wipro
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Teleperformance
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Telus
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Concentrix
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Cognizant
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Aisin Automotive
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Toyota Group
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      FCC Clutch
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Satyam Auto
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Agratas Energy
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Tata Enterprises
                    </div>
                  </div>
                </div>
                <div className="logo-item">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-12 w-auto mx-auto flex items-center justify-center text-lg font-bold text-gray-700">
                      Krishna Group
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Goal
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                "Our Goal is to create a perfect match between our clients and
                the candidates by understanding and pairing their needs and
                strengths…."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strength Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Strength
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                Excellent networking, in depth knowledge of the Automobile
                industry and expertise in understanding the various requirements
                of the different verticals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>

            <div className="max-w-5xl mx-auto mb-12">
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "Hide not your talents. They for use were made. What's a sundial
                in the shade?"
                <footer className="text-lg font-medium text-gray-900 mt-2">
                  — Benjamin Franklin
                </footer>
              </blockquote>

              <div className="bg-white p-8 rounded-lg shadow-sm text-left">
                <p className="text-lg text-gray-700 mb-4">
                  Every single person who walks into the doors of Intelli-gate
                  is a possible recruit. What requires is careful counselling
                  and identification of area of interest. At Intelli-gate, we
                  offer our services to help organizations and job seekers to
                  find each other.
                </p>
                <p className="text-lg text-gray-700">
                  We believe in continuous learning with great sense of
                  responsibility and team bonding. So if you are interested to
                  take up new challenges with continuous growth, we are here to
                  help you!
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Service Descriptions */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white shadow-lg animate-on-scroll card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A deserving candidate can only be identified when recruiter
                  has got in depth knowledge of the industry as well as the
                  domain. A careful study of JD along with respective stake
                  holder is the key for successful identification of the
                  resource. We have got more than 25 man-years of experience in
                  the field of Automobile industry which gives us edge over all
                  the others.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg animate-on-scroll card-hover">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We have tied up with several professional and non-professional
                  colleges in Dehra Dun, Lucknow, Rohtak and Kanpur region which
                  can cater the demand of most competent staffing. Training
                  sessions are executed in such a manner that students identify
                  their interests and skills and strive for a carrier of their
                  choice.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg animate-on-scroll">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Placement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Every candidate at Intelli-gate is carefully filtered by our
                  executives by assessment of their talent and skills. We being
                  in the industry for 25 years have comprehensive knowledge of
                  its pain areas. Therefore every talent is judged in all
                  spreads and after full satisfaction only a suitable candidate
                  is brought into the notice of Employer.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Strategic Leadership Hiring
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Executive Search
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Diversity Sourcing
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Lateral Hiring
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">
                      Bulk Hiring
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-900 mb-4 float-animation" />
                <CardTitle>Executive Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Premium talent acquisition for senior leadership positions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle>Strategic Leadership Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  C-suite and director-level recruitment solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle>Lateral & Bulk Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Volume recruitment for operational excellence
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle>Campus Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fresh talent sourcing from premier institutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle>Industry Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Skill development and capability enhancement
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users2 className="h-12 w-12 text-blue-900 mb-4" />
                <CardTitle>Diversity Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building inclusive and diverse teams
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Industries We Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Cpu className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">ITES & BPO</h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Car className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">Automotive</h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Building className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">
                Engineering & Manufacturing
              </h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">
                Electrical & Electronics
              </h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Zap className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">Energy</h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Pill className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">Pharmaceuticals</h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Home className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">Real Estate</h3>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Truck className="h-16 w-16 text-blue-900 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">Tyre Industry</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Intelligate?
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    More than 60 man years of experience in the field of
                    Automobile, Pharmaceuticals, FMCG, ITES and BPO industry.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    Completely aware of the pain areas of the industry (bottle
                    neck, hiring quality etc.)
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    Excellent in Mapping, Headhunting and Referencing Skills.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    Rich experience to find passive job seeker.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    We believe in working towards reducing clutter and
                    streamlining the manpower requirements of Companies.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">
                    We try to find out the right people, at the right time, well
                    before the commencement of training batches and at the right
                    price because we understand that today companies require not
                    only skilled candidate but at the same time productive,
                    exhibit a positive attitude and a team player.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <blockquote className="text-xl italic text-red-600 font-medium">
                "Whoever wants to reach a distant goal must take small steps."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Process Parameter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process Parameters
            </h2>
            <p className="text-lg text-gray-600">
              Ensuring efficiency, quality, and performance at every step of
              hiring.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            {/* Funnel Visualization */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Funnel Structure */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Top - Qualified */}
                  <div className="bg-green-100 text-green-800 px-8 py-3 rounded-full font-semibold text-lg">
                    QUALIFIED
                  </div>

                  {/* Funnel Shape */}
                  <div className="relative">
                    <svg
                      width="200"
                      height="120"
                      viewBox="0 0 200 120"
                      className="overflow-visible"
                    >
                      <path
                        d="M 20 0 L 180 0 L 120 80 L 80 80 Z"
                        fill="#f3f4f6"
                        stroke="#d1d5db"
                        strokeWidth="2"
                      />
                    </svg>

                    {/* Process Parameter Box */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center shadow-lg">
                        PROCESS
                        <br />
                        PARAMETER
                      </div>
                    </div>
                  </div>

                  {/* Bottom - Professional */}
                  <div className="bg-red-100 text-red-800 px-8 py-3 rounded-full font-semibold text-lg">
                    PROFESSIONAL
                  </div>
                </div>
              </div>
            </div>

            {/* Parameter Boxes */}
            <div className="flex flex-col space-y-4 w-full max-w-xs">
              <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Quality
              </div>
              <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Cost
              </div>
              <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Quantity
              </div>
              <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Cycle Time
              </div>
              <div className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-center font-bold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                Continual Process
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <p className="text-lg text-gray-700 mb-6">
                We have a team of multifaceted consultants who are highly
                experienced and specialize in industry sector that they serve.
                Our experienced professionals strictly follow the tradition of
                keeping track of the changing needs of the clients so as to
                ensure maximum satisfaction, in this area of ever changing
                scenario.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Our team do all the preliminary screening. We contact and
                interview candidates regarding their interest and suitability.
                Only after we are satisfied we send them to you for an
                interview.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Team Qualifications
                  </h3>
                  <p className="text-gray-700">
                    Our entire faculty is either MBA or B-tech in their
                    respective field.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-red-900 mb-4">
                    Professional Approach
                  </h3>
                  <p className="text-gray-700">
                    Experienced and highly qualified team of consultants with
                    professional approach make up the ever competitive team of
                    Intelli-gate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-xl mb-8 leading-relaxed">
                Intelligate Solutions vision is multifaceted, generally aiming
                to be the preferred partner for both employers and job seekers,
                facilitating successful career paths and talent acquisition. We
                are committed to serve the society by adding value to the
                customers, team members and the community at large in terms of:
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Excellence
                  </h3>
                  <p className="text-blue-100">
                    Providing customer delight, offering reliable services.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Employee Growth
                  </h3>
                  <p className="text-blue-100">
                    Providing an environment, conducive to the development,
                    growth and satisfaction of employees while fulfilling their
                    aspirations.
                  </p>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-4">
                    Social Responsibility
                  </h3>
                  <p className="text-blue-100">
                    Contributing to the well being of the society and conducting
                    ourselves as a responsible corporate citizen, known for
                    integrity and ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              {loadingJobs
                ? "Loading latest opportunities..."
                : `${latestJobs.length} positions available across leading companies`}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {loadingJobs ? (
              // Loading skeleton
              [...Array(3)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))
            ) : latestJobs.length > 0 ? (
              // Real job data
              latestJobs.map((job) => (
                <Card
                  key={job._id}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>
                      {job.industry} • {job.location} • {job.experience}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        ₹{job.salary}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {job.type}
                      </Badge>
                    </div>
                    <Link to="/openings">
                      <Button className="w-full">Apply Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))
            ) : (
              // No jobs available
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No current openings available. Please check back later.
                </p>
              </div>
            )}
          </div>

          <div className="text-center">
            <Link to="/openings">
              <Button variant="outline" size="lg">
                View All Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Connect With Us
            </h2>
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
                <p className="text-gray-600">
                  155/29 Ram Gopal Colony, Delhi Road
                </p>
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
              <a
                href="mailto:akhil.kaushik@intelligatesolution.com"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
                <Mail className="h-5 w-5" />
                akhil.kaushik@intelligatesolution.com
              </a>
              <a
                href="mailto:admin@intelligatesolution.com"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
                <Mail className="h-5 w-5" />
                admin@intelligatesolution.com
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:9650923366"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
                <Phone className="h-5 w-5" />
                9650923366
              </a>
              <a
                href="tel:9971019767"
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700"
              >
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

      {/* Get Quote Modal */}
      <GetQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Homepage Welcome Modal */}
      <HomepageModal
        isOpen={isHomepageModalOpen}
        onClose={() => setIsHomepageModalOpen(false)}
      />
    </div>
  );
}
