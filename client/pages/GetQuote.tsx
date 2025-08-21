import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  FileText,
  Users,
  Briefcase,
  Calculator,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import ServiceDropdown from "@/components/ServiceDropdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetQuote() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    serviceType: "",
    requirements: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: `SERVICE QUOTE REQUEST

Company: ${formData.company}
Industry: ${formData.industry}
Service Type: ${formData.serviceType}
Budget Range: ${formData.budget}
Timeline: ${formData.timeline}

Requirements:
${formData.requirements}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          industry: "",
          serviceType: "",
          requirements: "",
          budget: "",
          timeline: "",
        });
        setSubmitStatus("success");

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <Link to="/industries" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Industries</Link>
              <Link to="/openings" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Current Openings</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Contact</Link>
              <Link to="/get-quote" className="text-gray-900 hover:text-blue-900 font-medium transition-colors">Get Quote</Link>
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
                className="text-gray-900 bg-gray-50 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </header> */}

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={["images/ser.jpeg", "images/img.jpg"]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Get a Custom Quote
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-on-scroll">
              Tell us about your hiring needs and get a personalized proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Request Your Quote
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              Fill out this form with your requirements and we'll provide you
              with a detailed proposal within 24 hours.
            </p>
          </div>

          <Card className="shadow-xl animate-on-scroll">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                <Calculator className="h-8 w-8 text-blue-900" />
                Quote Request Form
              </CardTitle>
              <CardDescription>
                Please provide as much detail as possible to help us create an
                accurate quote for your needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("industry", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="automotive">Automotive</SelectItem>
                        <SelectItem value="ites-bpo">ITES & BPO</SelectItem>
                        <SelectItem value="pharmaceuticals">
                          Pharmaceuticals
                        </SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="electrical">Electrical</SelectItem>
                        <SelectItem value="energy">Energy</SelectItem>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="serviceType">Service Type *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("serviceType", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="executive-search">
                          Executive Search
                        </SelectItem>
                        <SelectItem value="leadership-hiring">
                          Strategic Leadership Hiring
                        </SelectItem>
                        <SelectItem value="lateral-bulk">
                          Lateral & Bulk Hiring
                        </SelectItem>
                        <SelectItem value="campus-placements">
                          Campus Placements
                        </SelectItem>
                        <SelectItem value="industry-training">
                          Industry Training
                        </SelectItem>
                        <SelectItem value="diversity-sourcing">
                          Diversity Sourcing
                        </SelectItem>
                        <SelectItem value="multiple">
                          Multiple Services
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("budget", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1-lakh">
                          Under ₹1 Lakh
                        </SelectItem>
                        <SelectItem value="1-5-lakh">₹1 - 5 Lakhs</SelectItem>
                        <SelectItem value="5-10-lakh">₹5 - 10 Lakhs</SelectItem>
                        <SelectItem value="10-25-lakh">
                          ₹10 - 25 Lakhs
                        </SelectItem>
                        <SelectItem value="25-50-lakh">
                          ₹25 - 50 Lakhs
                        </SelectItem>
                        <SelectItem value="above-50-lakh">
                          Above ₹50 Lakhs
                        </SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeline">Timeline *</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange("timeline", value)
                      }
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">
                          Immediate (Within 1 week)
                        </SelectItem>
                        <SelectItem value="1-month">Within 1 Month</SelectItem>
                        <SelectItem value="1-3-months">1-3 Months</SelectItem>
                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                        <SelectItem value="6-months-plus">6+ Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Detailed Requirements *</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    required
                    value={formData.requirements}
                    onChange={handleInputChange}
                    className="mt-1 min-h-32"
                    placeholder="Please describe your specific requirements, number of positions, experience levels, skills needed, location preferences, and any other relevant details..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Request Quote
                    </div>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4">
                    <p className="text-green-800">
                      Thank you! Your quote request has been submitted
                      successfully. We'll get back to you within 24 hours with a
                      detailed proposal.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4">
                    <p className="text-red-800">
                      Sorry, there was an error submitting your request. Please
                      try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Why Choose Intelligate Solutions?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Experience the difference with our proven approach to recruitment
              and talent acquisition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="professional-card animate-on-scroll">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-blue-900 mx-auto mb-4" />
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Our experienced recruiters are MBAs and B.Tech professionals
                  with deep industry knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader className="text-center">
                <Briefcase className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Track record of successful placements across diverse
                  industries and experience levels.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader className="text-center">
                <FileText className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700">
                  Tailored recruitment strategies designed specifically for your
                  unique requirements.
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
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50 animate-bounce"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
