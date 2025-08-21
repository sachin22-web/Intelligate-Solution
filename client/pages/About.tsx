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
  Eye,
  Heart,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
              <Link to="/about" className="text-gray-900 hover:text-blue-900 font-medium transition-colors">About Us</Link>
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
                className="text-gray-700 hover:bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-900 bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
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
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Banner with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={[
            // "https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F2f9213ee427a496d98636f69b62dc87a?format=webp&width=800",
            // "https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Ffda984e4a4c14678aacca680c004dc21?format=webp&width=800",
            // "https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F4c544a153f3d4f8ab328d65415496f5b?format=webp&width=800"

            "images/images1.webp",
            "images/images.webp",
            "images/abou.jpeg",
          ]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              About Intelligate Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-on-scroll">
              Trusted Recruitment Partner Since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F4c544a153f3d4f8ab328d65415496f5b?format=webp&width=800"
                alt="Intelligate Solutions Team"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015, Intelligate Solutions is a trusted HR
                consulting partner delivering talent across India's top
                industries. We specialize in middle & senior level hiring with
                expertise across multiple verticals.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to bridge the gap between exceptional talent and
                dynamic organizations, creating perfect matches that drive
                business success and career growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="text-lg px-6 py-3">
                  <Award className="w-5 h-5 mr-2" />
                  Since 2015
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-3">
                  <Building className="w-5 h-5 mr-2" />
                  PAN India
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-3">
                  <Users className="w-5 h-5 mr-2" />
                  60+ Years Experience
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="professional-card animate-on-scroll">
              <CardHeader className="text-center">
                <Target className="h-16 w-16 text-blue-900 mx-auto mb-4 float-animation" />
                <CardTitle className="text-2xl text-blue-900">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create perfect matches between clients & candidates by
                  understanding their goals, strengths, and aspirations while
                  maintaining the highest standards of professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader className="text-center">
                <Eye className="h-16 w-16 text-red-600 mx-auto mb-4 float-animation" />
                <CardTitle className="text-2xl text-red-600">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the preferred recruitment partner through ethics,
                  quality and value delivery, setting new benchmarks in talent
                  acquisition across India.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
              Why Choose Intelligate?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-on-scroll">
              <CheckCircle className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Domain Experience</h3>
              <p className="text-blue-100">
                60+ man-years of specialized industry experience across multiple
                verticals
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <Search className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Deep Understanding</h3>
              <p className="text-blue-100">
                Comprehensive knowledge of industry pain points and hiring
                challenges
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <Users2 className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proven Skills</h3>
              <p className="text-blue-100">
                Expert headhunting & referencing skills with proven track record
              </p>
            </div>

            <div className="text-center animate-on-scroll">
              <Award className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Process</h3>
              <p className="text-blue-100">
                Strong candidate screening and assessment methodology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Placement Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-8"
              style={{ fontSize: "36px" }}
            >
              Our Placement Process
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Every candidate at Intelli-gate is carefully filtered by our
                executives through a detailed assessment of their talent and
                skills. With 25+ years of industry experience, we deeply
                understand pain areas and talent gaps. We ensure that only the
                most suitable candidates are presented to the employer after a
                rigorous evaluation.
              </p>

              {/* Bulleted List */}
              <div className="text-left max-w-3xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      Strategic Leadership Hiring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      Executive Search
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      Diversity Sourcing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      Lateral Hiring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg font-medium text-gray-800">
                      Bulk Hiring
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-8"
              style={{ fontSize: "36px" }}
            >
              Our Vision
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our vision is multifaceted — to be the most trusted partner for
                both employers and job seekers, enabling career success and
                empowering businesses.
              </p>

              {/* Square Bulleted List */}
              <div className="text-left max-w-4xl mx-auto">
                <ul className="space-y-4 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">
                      ▪
                    </span>
                    <span className="text-lg text-gray-800">
                      Providing customer delight, offering reliable services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">
                      ▪
                    </span>
                    <span className="text-lg text-gray-800">
                      Providing a growth-oriented environment for employees to
                      fulfill aspirations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg mt-1">
                      ▪
                    </span>
                    <span className="text-lg text-gray-800">
                      Contributing to the well-being of society with integrity
                      and ethics.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-8"
              style={{ fontSize: "32px" }}
            >
              Why Choose Us?
            </h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                We blend decades of recruitment experience with innovation to
                deliver unmatched results.
              </p>

              {/* Simple Bulleted List */}
              <div className="text-left max-w-4xl mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      25+ years of experience in strategic hiring
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      Access to premium client networks across industries
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      Specialists for every domain: Automotive, Pharma, ITES &
                      more
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      Offices in Noida, Dehradun, and Rohtak
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fd2d1412ea22548db9193e995c28dd459?format=webp&width=800"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-6 animate-on-scroll">
              OUR TEAM
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto animate-on-scroll leading-relaxed">
              We have a team of multi-faceted consultants who are highly
              experienced and specialize in industry sector that they serve. Our
              experienced professionals strictly follow the tradition of knowing
              track of the changing needs of the clients so as to ensure maximum
              satisfaction in the era of ever changing scenario.
            </p>
          </div>

          <div className="mb-12 text-center animate-on-scroll">
            <p className="text-lg text-gray-700 mb-4">
              Our team do all the preliminary screening. We contact and
              interview candidates regarding their interest and suitability.
              Only after we are satisfied we send them to you for an interview.
            </p>
            <p className="text-xl font-semibold text-red-800 italic">
              Our entire faculty is either MBA or B-tech in their respective
              field.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - Experienced Team */}
            <div className="animate-on-scroll">
              <div className="bg-red-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Experienced and highly qualified team
                </h3>
                <p className="text-center text-lg">
                  of consultants with professional approach make up the
                  <span className="font-bold block mt-2">
                    core competitive team of Intelligate.
                  </span>
                </p>
              </div>
            </div>

            {/* Center - Logo/Brand */}
            <div className="animate-on-scroll flex flex-col items-center">
              <div className="bg-white rounded-full p-8 shadow-xl mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fffd6997b070949e7808ca68d4da19889?format=webp&width=800"
                  alt="Intelligate Solutions Logo"
                  className="h-20 w-20"
                />
              </div>
              <h3 className="text-3xl font-bold text-red-800 text-center">
                Intelligate Solutions
              </h3>
              <p className="text-gray-600 text-center mt-2">
                A Gateway of Intelligence
              </p>
            </div>

            {/* Right Side - Quality Features */}
            <div className="animate-on-scroll space-y-6">
              <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg text-center">Experienced</h4>
              </div>
              <div className="bg-gray-600 text-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-lg text-center">Qualified</h4>
              </div>
            </div>
          </div>

          {/* Team Member Profile */}
          <div className="mt-16 mb-16 animate-on-scroll">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-red-800 mb-12">
                Meet Our Team Leader
              </h3>
              <Card className="professional-card bg-white shadow-xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                      <div className="relative inline-block mb-6">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2Fd8ffe73c622a4aacb276db650e66ec54?format=webp&width=800"
                          alt="Team Leader"
                          className="w-48 h-48 rounded-full object-cover border-4 border-red-100 shadow-lg mx-auto md:mx-0"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-red-800 text-white p-3 rounded-full">
                          <Award className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">
                        Senior HR Consultant
                      </h4>
                      <p className="text-red-800 font-semibold mb-4 text-lg">
                        Team Leader & Principal Consultant
                      </p>
                      <div className="space-y-4 text-gray-700">
                        <p className="leading-relaxed">
                          "Leading our experienced team of HR consultants, I
                          bring over a decade of expertise in talent acquisition
                          and strategic workforce planning. Our mission is to
                          connect exceptional talent with outstanding
                          organizations."
                        </p>
                        <p className="leading-relaxed">
                          "With deep industry knowledge and a commitment to
                          excellence, we ensure that every placement is a
                          perfect match for both candidate and company. Our
                          personalized approach has resulted in successful
                          partnerships across multiple industry verticals."
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-6">
                        <Badge
                          variant="secondary"
                          className="bg-red-100 text-red-900 px-4 py-2"
                        >
                          MBA - HR
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-900 px-4 py-2"
                        >
                          10+ Years Experience
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-900 px-4 py-2"
                        >
                          Senior Consultant
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-on-scroll">
            <Card className="professional-card bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-red-800 mx-auto mb-4" />
                <h4 className="font-bold text-red-800 mb-2">
                  Multi-faceted Consultants
                </h4>
                <p className="text-gray-600 text-sm">
                  Highly experienced professionals specializing in their
                  respective industry sectors
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-blue-600 mb-2">
                  Client-Focused Approach
                </h4>
                <p className="text-gray-600 text-sm">
                  Following tradition of understanding changing client needs for
                  maximum satisfaction
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-green-600 mb-2">
                  Educational Excellence
                </h4>
                <p className="text-gray-600 text-sm">
                  Entire faculty comprises MBA and B.Tech professionals in their
                  respective fields
                </p>
              </CardContent>
            </Card>
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
