import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Plus,
  Edit,
  Trash2,
  LogOut,
  Briefcase,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  Eye,
  RefreshCw,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
  status: string;
  postedDate: Date;
}

interface JobFormData {
  title: string;
  location: string;
  experience: string;
  industry: string;
  salary: string;
  type: string;
  description: string;
  skills: string;
}

interface Category {
  _id: string;
  name: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
}

export default function AdminDashboard() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryDescription, setNewCategoryDescription] = useState("");
  const [formData, setFormData] = useState<JobFormData>({
    title: "",
    location: "",
    experience: "",
    industry: "",
    salary: "",
    type: "Full-time",
    description: "",
    skills: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [isApplicationsModalOpen, setIsApplicationsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Get industry options from database categories
  const industryOptions = categories
    .filter((cat) => cat.isActive)
    .map((cat) => cat.name);

  const jobTypeOptions = [
    "Full-time",
    "Part-time",
    "Contract",
    "Freelance",
    "Remote",
    "Hybrid",
    "Internship",
  ];

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Fetch jobs, applications and categories
  useEffect(() => {
    const fetchData = async () => {
      await fetchJobs();

      // Add a small delay before fetching applications
      setTimeout(() => {
        fetchApplications();
      }, 500);

      setTimeout(() => {
        fetchCategories();
      }, 1000);
    };

    fetchData();
  }, []);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      console.warn("No admin token found");
      navigate("/admin/login");
      return {};
    }
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs", {
        headers: getAuthHeaders(),
      });
      if (response.ok) {
        const jobsData = await response.json();
        setJobs(jobsData);
      } else if (response.status === 401) {
        navigate("/admin/login");
      } else {
        setError(
          `Failed to fetch jobs: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("Network error: Unable to connect to server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchApplications = async () => {
    setApplicationsLoading(true);
    try {
      const headers = getAuthHeaders();
      if (!Object.keys(headers).length) return; // No token available

      const response = await fetch("/api/applications", {
        headers,
      });
      if (response.ok) {
        const appsData = await response.json();
        setApplications(appsData);
        console.log(`Loaded ${appsData.length} applications`);
      } else if (response.status === 401) {
        console.warn("Unauthorized access to applications");
        navigate("/admin/login");
      } else {
        console.error(
          `Failed to fetch applications: ${response.status} ${response.statusText}`,
        );
      }
    } catch (err) {
      console.error("Network error fetching applications:", err);
    } finally {
      setApplicationsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      if (response.ok) {
        const categoriesData = await response.json();
        setCategories(categoriesData);
      }
    } catch (err) {
      console.error("Failed to fetch categories");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const jobData = {
        ...formData,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill),
      };

      const url = editingJob ? `/api/jobs/${editingJob._id}` : "/api/jobs";
      const method = editingJob ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: getAuthHeaders(),
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setIsModalOpen(false);
        setEditingJob(null);
        setFormData({
          title: "",
          location: "",
          experience: "",
          industry: "",
          salary: "",
          type: "Full-time",
          description: "",
          skills: "",
        });
        fetchJobs();
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        const result = await response.json();
        setError(result.error || "Failed to save job");
        setSubmitStatus("error");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setSubmitStatus("error");
    }
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      location: job.location,
      experience: job.experience,
      industry: job.industry,
      salary: job.salary,
      type: job.type,
      description: job.description,
      skills: job.skills.join(", "),
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (jobId: string) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        const response = await fetch(`/api/jobs/${jobId}`, {
          method: "DELETE",
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          fetchJobs();
        } else {
          setError("Failed to delete job");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      }
    }
  };

  const openNewJobModal = () => {
    setEditingJob(null);
    setFormData({
      title: "",
      location: "",
      experience: "",
      industry: "",
      salary: "",
      type: "Full-time",
      description: "",
      skills: "",
    });
    setIsModalOpen(true);
  };

  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;

    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          name: newCategoryName.trim(),
          description: newCategoryDescription.trim(),
        }),
      });

      if (response.ok) {
        setNewCategoryName("");
        setNewCategoryDescription("");
        setIsCategoryModalOpen(false);
        fetchCategories();
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        const result = await response.json();
        setError(result.error || "Failed to create category");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  const handleDeleteCategory = async (categoryId: string) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await fetch(`/api/categories/${categoryId}`, {
          method: "DELETE",
          headers: getAuthHeaders(),
        });

        if (response.ok) {
          fetchCategories();
          setSubmitStatus("success");
          setTimeout(() => setSubmitStatus("idle"), 3000);
        } else {
          const result = await response.json();
          setError(result.error || "Failed to delete category");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-900">
              Intelligate Solutions - Admin Dashboard
            </h1>
            <Button onClick={handleLogout} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mb-6 flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
            <CheckCircle className="h-4 w-4" />
            <p>Job saved successfully!</p>
          </div>
        )}

        {error && (
          <div className="mb-6 flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-4 w-4" />
            <p>{error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{jobs.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Applications
              </CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={fetchApplications}
                  disabled={applicationsLoading}
                  className="h-6 w-6 p-0"
                >
                  <RefreshCw
                    className={`h-3 w-3 ${applicationsLoading ? "animate-spin" : ""}`}
                  />
                </Button>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{applications.length}</div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 w-full"
                onClick={() => setIsApplicationsModalOpen(true)}
              >
                <Eye className="h-4 w-4 mr-2" />
                View All Applicants
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {jobs.filter((job) => job.status === "active").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Overview */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>
                  Latest job applications received
                </CardDescription>
              </div>
              <Button
                onClick={() => setIsApplicationsModalOpen(true)}
                variant="outline"
                className="bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
              >
                <FileText className="h-4 w-4 mr-2" />
                View All Applications ({applications.length})
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Applied On</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.slice(0, 5).map((app) => (
                    <TableRow key={app._id}>
                      <TableCell className="font-medium">
                        {app.fullName}
                      </TableCell>
                      <TableCell>{app.job?.title || "N/A"}</TableCell>
                      <TableCell>{app.email}</TableCell>
                      <TableCell>{app.phone}</TableCell>
                      <TableCell>
                        {new Date(app.submittedAt).toLocaleDateString("en-IN")}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            app.status === "pending" ? "secondary" : "default"
                          }
                        >
                          {app.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {applications.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-8 text-gray-500"
                      >
                        No applications received yet
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Categories Management */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Job Categories</CardTitle>
                <CardDescription>
                  Manage job categories and industries
                </CardDescription>
              </div>
              <Button
                onClick={() => setIsCategoryModalOpen(true)}
                className="bg-green-600 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="border rounded-lg p-4 flex justify-between items-start"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {category.name}
                    </h4>
                    {category.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteCategory(category._id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              {categories.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No categories found. Create your first category!
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Jobs Management */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Job Openings</CardTitle>
                <CardDescription>Manage all job postings</CardDescription>
              </div>
              <Button
                onClick={openNewJobModal}
                className="bg-blue-900 hover:bg-blue-800"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add New Job
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Industry</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job._id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{job.industry}</TableCell>
                      <TableCell>{job.experience}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            job.status === "active" ? "default" : "secondary"
                          }
                        >
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(job)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(job._id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {jobs.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={6}
                        className="text-center py-8 text-gray-500"
                      >
                        No jobs found. Create your first job posting!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Form Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingJob ? "Edit Job" : "Add New Job"}</DialogTitle>
            <DialogDescription>Fill in the job details below</DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Job Title *</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior Software Engineer"
                />
              </div>
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Noida"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="experience">Experience *</Label>
                <Input
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g. 3-5 Years"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry *</Label>
                <Select
                  value={formData.industry}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, industry: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industryOptions.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary">Salary *</Label>
                <Input
                  id="salary"
                  name="salary"
                  required
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="e.g. 8-12 LPA"
                />
              </div>
              <div>
                <Label htmlFor="type">Job Type *</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, type: value }))
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select job type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypeOptions.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="description">Job Description *</Label>
              <Textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                className="min-h-24"
                placeholder="Enter detailed job description..."
              />
            </div>

            <div>
              <Label htmlFor="skills">Skills (comma-separated)</Label>
              <Input
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="e.g. React, Node.js, MongoDB"
              />
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-900 hover:bg-blue-800">
                {editingJob ? "Update Job" : "Create Job"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Category Form Modal */}
      <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
            <DialogDescription>
              Create a new job category/industry
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="categoryName">Category Name *</Label>
              <Input
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="e.g. Information Technology"
                required
              />
            </div>

            <div>
              <Label htmlFor="categoryDescription">Description</Label>
              <Textarea
                id="categoryDescription"
                value={newCategoryDescription}
                onChange={(e) => setNewCategoryDescription(e.target.value)}
                placeholder="Brief description of this category"
                className="min-h-16"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setIsCategoryModalOpen(false);
                setNewCategoryName("");
                setNewCategoryDescription("");
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateCategory}
              className="bg-green-600 hover:bg-green-700"
              disabled={!newCategoryName.trim()}
            >
              Create Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Applications View Modal */}
      <Dialog
        open={isApplicationsModalOpen}
        onOpenChange={setIsApplicationsModalOpen}
      >
        <DialogContent className="sm:max-w-[1000px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>All Job Applications</DialogTitle>
            <DialogDescription>
              Complete list of candidates who have applied for positions
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {applications.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate Name</TableHead>
                      <TableHead>Position Applied</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Applied On</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app._id}>
                        <TableCell className="font-medium">
                          {app.fullName}
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium">
                              {app.job?.title || "N/A"}
                            </div>
                            <div className="text-sm text-gray-500">
                              {app.job?.industry || ""}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${app.email}`}
                            className="text-blue-600 hover:underline"
                          >
                            {app.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <a
                            href={`tel:${app.phone}`}
                            className="text-blue-600 hover:underline"
                          >
                            {app.phone}
                          </a>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div>
                              {new Date(app.submittedAt).toLocaleDateString(
                                "en-IN",
                              )}
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(app.submittedAt).toLocaleTimeString(
                                "en-IN",
                                {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                },
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              app.status === "pending" ? "secondary" : "default"
                            }
                          >
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{app.job?.location || "N/A"}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Applications Yet
                </h3>
                <p className="text-gray-500">
                  When candidates apply for your job postings, they will appear
                  here.
                </p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsApplicationsModalOpen(false)}
            >
              Close
            </Button>
            {applications.length > 0 && (
              <Button
                type="button"
                className="bg-blue-900 hover:bg-blue-800"
                onClick={() => {
                  const csvContent =
                    "data:text/csv;charset=utf-8," +
                    "Name,Position,Email,Phone,Applied On,Status,Location\n" +
                    applications
                      .map(
                        (app) =>
                          `"${app.fullName}","${app.job?.title || "N/A"}","${app.email}","${app.phone}","${new Date(app.submittedAt).toLocaleDateString("en-IN")}","${app.status}","${app.job?.location || "N/A"}"`,
                      )
                      .join("\n");
                  const encodedUri = encodeURI(csvContent);
                  const link = document.createElement("a");
                  link.setAttribute("href", encodedUri);
                  link.setAttribute("download", "job_applications.csv");
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CSV
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
