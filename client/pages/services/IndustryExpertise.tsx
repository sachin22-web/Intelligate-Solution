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
  Car,
  Cpu,
  Zap,
  Pill,
  Home,
  Truck,
  Factory,
  Building,
  Award,
  Users,
  Target,
  CheckCircle,
  Search,
  GraduationCap,
  Users2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function IndustryExpertise() {
  const companies = [
    { name: "Wipro", color: "blue" },
    { name: "Teleperformance", color: "green" },
    { name: "Telus", color: "orange" },
    { name: "Concentrix", color: "purple" },
    { name: "Cognizant Technology Solutions", color: "red" },
    { name: "Aisin Automotive", color: "yellow" },
    { name: "Toyota Group", color: "gray" },
    { name: "FCC Clutch", color: "indigo" },
    { name: "Satyam Auto Components", color: "blue" },
    { name: "Agratas Energy Storage Solutions", color: "green" },
    { name: "Tata Enterprises", color: "orange" },
    { name: "Krishna Group (Krishna Maruti Limited & SKH)", color: "purple" },
  ];

  const successStories = [
    {
      industry: "Automotive",
      role: "VP - Manufacturing Operations",
      challenge: "Electric Vehicle transition expertise needed",
      solution:
        "Placed seasoned leader with 15+ years EV experience from Tesla supplier ecosystem",
      impact: "40% faster production ramp-up, reduced quality issues by 60%",
    },
    {
      industry: "Pharmaceuticals",
      role: "Head of Regulatory Affairs",
      challenge: "Complex USFDA compliance requirements",
      solution:
        "Recruited expert with direct USFDA inspection experience across 3 countries",
      impact: "Zero compliance violations, 25% faster drug approval timeline",
    },
    {
      industry: "ITES",
      role: "Chief Technology Officer",
      challenge: "Digital transformation in legacy systems",
      solution:
        "Identified CTO with proven track record in cloud migration at scale",
      impact: "50% infrastructure cost reduction, 3x faster deployment cycles",
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

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={["/images/img.jpg", "/images/ind.webp"]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Domain-Focused Hiring, Delivered with Precision
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto animate-on-scroll">
              We understand the nuances of each industry, enabling us to deliver
              talent that drives impact. From Automotive to Pharmaceuticals, our
              specialists recruit with domain precision.
            </p>
          </div>
        </div>
      </section>

      {/* Industries We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Our Trusted Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              We are proud to serve leading companies across multiple
              industries, delivering exceptional talent solutions that drive
              business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => {
              return (
                <Card
                  key={index}
                  className="professional-card animate-on-scroll hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-full bg-${company.color}-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Building
                        className={`h-8 w-8 text-${company.color}-600`}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {company.name}
                    </h3>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Core Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-900 mb-4 float-animation" />
                <CardTitle className="text-xl">Executive Search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Premium talent acquisition for C-suite and senior leadership
                  positions across industries. We identify and attract top-tier
                  executives who drive organizational success.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Target className="h-12 w-12 text-red-600 mb-4 float-animation" />
                <CardTitle className="text-xl">
                  Strategic Leadership Hiring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Specialized recruitment for strategic roles that shape
                  business direction. We find leaders who align with your vision
                  and drive transformational change.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Lateral Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Strategic mid-level recruitment for experienced professionals
                  looking to advance their careers while filling critical skill
                  gaps in your organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Building className="h-12 w-12 text-purple-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Bulk Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Large-scale recruitment solutions for rapid expansion or
                  project-based requirements. Efficient processes ensuring
                  quality at scale.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-orange-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Campus Placement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Fresh talent sourcing from premier institutions. We help you
                  build strong relationships with top colleges and identify
                  promising graduates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="professional-card animate-on-scroll">
              <CardHeader>
                <Users2 className="h-12 w-12 text-teal-600 mb-4 float-animation" />
                <CardTitle className="text-xl">Diversity Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  Building inclusive teams through targeted diversity
                  recruitment. We help create balanced workforces that drive
                  innovation and growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Training Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F006b1d80f49744f8a88951a12aeaff7a%2F0e6778a20c8e4b48b262fa9e73efbb9f?format=webp&width=800"
                alt="Training and Development"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Research & Training Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We work closely with stakeholders to analyze job descriptions
                and find perfect fits. Our comprehensive approach ensures we
                understand both technical requirements and cultural alignment.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We also run specialized training sessions across premier
                colleges in Dehradun, Rohtak, Kanpur, and Lucknow, developing
                talent that meets industry standards and expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">
                    Detailed JD analysis and stakeholder consultation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">
                    Customized training programs across multiple cities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-800 font-medium">
                    Industry-aligned skill development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-on-scroll">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll">
              Industry-specific placement cases that demonstrate our expertise
              and impact
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <Card key={index} className="professional-card animate-on-scroll">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {story.industry}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {story.role}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Successful Placement</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Challenge:
                      </h4>
                      <p className="text-gray-700 text-sm mb-4">
                        {story.challenge}
                      </p>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Solution:
                      </h4>
                      <p className="text-gray-700 text-sm">{story.solution}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">
                        Impact:
                      </h4>
                      <p className="text-green-800 text-sm font-medium">
                        {story.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Experts For Your Sector?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Let our industry specialists help you identify and attract the
              right talent for your specific domain needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-quote">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-900 hover:bg-gray-100"
                >
                  Get Industry-Specific Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Discuss Your Requirements
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
