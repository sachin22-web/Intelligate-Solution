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
  Clock,
  IndianRupee,
  Filter,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ApplicationModal from "@/components/ApplicationModal";
import ResumeSubmitModal from "@/components/ResumeSubmitModal";
import HeroSlider from "@/components/HeroSlider";
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

export default function Openings() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [jobOpenings, setJobOpenings] = useState<Job[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const filteredJobs =
    selectedFilter === "All"
      ? jobOpenings
      : jobOpenings.filter(
          (job) =>
            job.industry?.trim().toLowerCase() ===
            selectedFilter.trim().toLowerCase(),
        );

  // Fetch jobs and categories from MongoDB
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch jobs
        const jobsResponse = await fetch("/api/jobs");
        if (jobsResponse.ok) {
          const jobs = await jobsResponse.json();
          setJobOpenings(jobs);
        } else {
          setError("Failed to load job openings");
        }

        // Fetch categories
        const categoriesResponse = await fetch("/api/categories");
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }
      } catch (err) {
        setError("Network error. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleApplyNow = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const formatDate = (date: Date | string) => {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) return "Unknown"; // 👈 Handle invalid dates
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - parsedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "1 day ago";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 14) return "1 week ago";
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
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
  console.log("🎯 Total jobs:", jobOpenings);
  console.log("🎯 Filtered jobs:", filteredJobs);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Slider */}
      <section className="relative text-white">
        <HeroSlider
          images={["images/current1.avif", "images/current.jpg"]}
          height="h-[500px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-on-scroll">
              Explore Open Positions
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-on-scroll">
              We're hiring across India for multiple industries
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">
                Filter by Industry:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("All")}
                className={`${
                  selectedFilter === "All"
                    ? "bg-blue-900 text-white"
                    : "text-gray-600 hover:text-blue-900"
                }`}
              >
                All
              </Button>
              {categories
                .filter((cat) => cat.isActive)
                .map((category) => (
                  <Button
                    key={category._id}
                    variant={
                      selectedFilter === category.name ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedFilter(category.name)}
                    className={`${
                      selectedFilter === category.name
                        ? "bg-blue-900 text-white"
                        : "text-gray-600 hover:text-blue-900"
                    }`}
                  >
                    {category.name}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {loading
                  ? "Loading..."
                  : `${filteredJobs.length} Open Position${filteredJobs.length !== 1 ? "s" : ""} Available`}
              </h2>
              <p className="text-gray-600">
                Find your next career opportunity with leading companies across
                India
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button
                onClick={() => setIsResumeModalOpen(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold text-lg"
                size="lg"
              >
                <Upload className="h-5 w-5" />
                Submit Your Resume
              </Button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="animate-pulse">
                  <CardHeader className="pb-4">
                    <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-16 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => {
                console.log("🔍 Rendering job card:", job.title);
                return (
                  <Card
                    key={job._id.toString()}
                    className="border border-gray-800 bg-white text-black rounded-lg p-4 shadow-md"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {job.industry}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {formatDate(job.postedDate)}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span className="text-sm">{job.experience}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <IndianRupee className="h-4 w-4" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-gray-700 mb-4">
                        {job.description}
                      </CardDescription>
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">
                          Key Skills:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {Array.isArray(job.skills) &&
                          job.skills.length > 0 ? (
                            job.skills.map((skill, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs"
                              >
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-xs text-gray-400 italic">
                              No skills listed
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          className="flex-1 bg-blue-900 hover:bg-blue-800 text-white"
                          onClick={() => handleApplyNow(job)}
                        >
                          Apply Now
                        </Button>
                        <Button variant="outline" size="sm" className="px-3">
                          <MessageCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {!loading && filteredJobs.length === 0 && !error && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No positions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filter or check back later for new
                opportunities.
              </p>
              <Button
                onClick={() => setSelectedFilter("All")}
                variant="outline"
              >
                View All Positions
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Send us your resume and we'll keep you informed about new
              opportunities that match your profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3"
                >
                  Submit Your Resume
                </Button>
              </Link>
              <a
                href="https://wa.me/919971019767"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with Recruiter
                </Button>
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

      {/* Application Modal */}
      {selectedJob && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedJob(null);
          }}
          jobTitle={selectedJob.title}
          jobId={selectedJob._id}
        />
      )}

      {/* Resume Submit Modal */}
      <ResumeSubmitModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
