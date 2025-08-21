import { RequestHandler } from "express";
import { MongoClient, ObjectId } from "mongodb";
import nodemailer from "nodemailer";

const MONGODB_URI = "mongodb+srv://ai:Ai123@cluster0.fwwaouj.mongodb.net/";
const DB_NAME = "intelligate_jobs";

let client: MongoClient;

async function connectToMongoDB() {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client.db(DB_NAME);
}

// Email configuration - Outlook SMTP for admin@intelligatesolution.com
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: "admin@intelligatesolution.com",
    pass: "qnztrxfqhpxgrlff",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Get all job openings
export const getJobOpenings: RequestHandler = async (req, res) => {
  try {
    console.log("Fetching job openings from MongoDB...");
    const db = await connectToMongoDB();
    const jobs = await db
      .collection("job_openings")
      .find({ status: "active" })
      .toArray();
    console.log(`Found ${jobs.length} active jobs`);
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching job openings:", error);
    res.status(500).json({ error: "Failed to fetch job openings" });
  }
};

// Get single job by ID
export const getJobById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await connectToMongoDB();
    const job = await db
      .collection("job_openings")
      .findOne({ _id: new ObjectId(id) });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (error) {
    console.error("Error fetching job:", error);
    res.status(500).json({ error: "Failed to fetch job" });
  }
};

// Create new job (Admin only)
export const createJob: RequestHandler = async (req, res) => {
  try {
    const {
      title,
      location,
      experience,
      industry,
      salary,
      type,
      description,
      skills,
    } = req.body;

    const newJob = {
      title,
      location,
      experience,
      industry,
      salary,
      type,
      description,
      skills: skills || [],
      status: "active",
      postedDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const db = await connectToMongoDB();
    const result = await db.collection("job_openings").insertOne(newJob);

    res.status(201).json({
      success: true,
      jobId: result.insertedId,
      message: "Job created successfully",
    });
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ error: "Failed to create job" });
  }
};

// Update job (Admin only)
export const updateJob: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body, updatedAt: new Date() };

    const db = await connectToMongoDB();
    const result = await db
      .collection("job_openings")
      .updateOne({ _id: new ObjectId(id) }, { $set: updateData });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ success: true, message: "Job updated successfully" });
  } catch (error) {
    console.error("Error updating job:", error);
    res.status(500).json({ error: "Failed to update job" });
  }
};

// Delete job (Admin only)
export const deleteJob: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const db = await connectToMongoDB();
    const result = await db
      .collection("job_openings")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
};

// Submit job application
export const submitApplication: RequestHandler = async (req, res) => {
  try {
    const { jobId, fullName, email, phone, resume } = req.body;

    const db = await connectToMongoDB();

    // Get job details
    const job = await db
      .collection("job_openings")
      .findOne({ _id: new ObjectId(jobId) });
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    const application = {
      jobId: new ObjectId(jobId), // Convert to ObjectId for proper lookup
      fullName,
      email,
      phone,
      resume, // base64 encoded file
      status: "pending",
      submittedAt: new Date(),
      createdAt: new Date(),
    };

    const result = await db
      .collection("job_applications")
      .insertOne(application);

    // Send email notification to admin
    const base64Data = resume.split(",")[1]; // Remove data:type;base64, prefix
    const fileExtension = resume.includes("pdf") ? "pdf" : "doc";
    const filename = `${fullName.replace(/\s+/g, "_")}_Resume.${fileExtension}`;

    const emailSubject = `New Job Application: ${job.title} - ${fullName}`;

    const adminEmailContent = `
      <h2>New Job Application - Intelligate Solutions</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-bottom: 20px;">Job Application Details:</h3>

          <div style="background-color: #dbeafe; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
            <h4 style="color: #1e40af; margin: 0;">Position Applied For:</h4>
            <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold;">${job.title}</p>
            <p style="margin: 5px 0 0 0; color: #666;">📍 ${job.location} | 💼 ${job.industry} | 💰 ${job.salary}</p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Full Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Resume:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                ���� ${filename} (Attached)
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Applied On:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 4px; border-left: 4px solid #16a34a;">
            <p style="margin: 0; font-size: 14px; color: #16a34a;">
              <strong>📄 Resume attached to this email</strong><br>
              Please download the attachment to view the candidate's complete profile.
            </p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 4px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; font-size: 14px; color: #856404;">
              <strong>📋 Next Steps:</strong><br>
              1. Review the attached resume<br>
              2. Contact candidate if shortlisted<br>
              3. Update application status in admin dashboard
            </p>
          </div>
        </div>
      </div>
    `;

    // Send email to admin
    try {
      await transporter.sendMail({
        from: '"Intelligate Solutions Jobs" <admin@intelligatesolution.com>',
        to: "admin@intelligatesolution.com",
        subject: emailSubject,
        html: adminEmailContent,
        attachments: [
          {
            filename: filename,
            content: base64Data,
            encoding: "base64",
          },
        ],
      });
      console.log("Admin email sent successfully");
    } catch (emailError) {
      console.error("Failed to send admin email:", emailError);
      // Continue with application submission even if email fails
    }

    // Send confirmation email to candidate
    const candidateEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Intelligate Solutions</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">A Gateway of Intelligence</p>
        </div>

        <div style="padding: 30px; background-color: #f8f9fa;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Application Received Successfully!</h2>

          <p>Dear ${fullName},</p>

          <p>Thank you for applying for the <strong>${job.title}</strong> position at Intelligate Solutions. We have successfully received your application and resume.</p>

          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #16a34a;">
            <h3 style="color: #16a34a; margin-top: 0;">Application Details:</h3>
            <p><strong>Position:</strong> ${job.title}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Industry:</strong> ${job.industry}</p>
            <p><strong>Application Date:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What Happens Next?</h3>
            <ul style="color: #374151; margin-bottom: 0;">
              <li>Our HR team will review your application within 2-3 business days</li>
              <li>If your profile matches our requirements, we'll contact you for the next steps</li>
              <li>You can also call us at <strong>+91 9971019767</strong> for any queries</li>
            </ul>
          </div>

          <p>We appreciate your interest in joining our team!</p>

          <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Contact Us:</h3>
            <p style="margin-bottom: 10px;"><strong>Phone:</strong> +91 9650923366 / +91 9971019767</p>
            <p style="margin-bottom: 10px;"><strong>Email:</strong> admin@intelligatesolution.com</p>
            <p style="margin-bottom: 0;"><strong>WhatsApp:</strong> +91 9971019767</p>
          </div>
        </div>

        <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">© 2025 Intelligate Solutions. All rights reserved.</p>
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: '"Intelligate Solutions" <admin@intelligatesolution.com>',
        to: email,
        subject: `Application Received - ${job.title} at Intelligate Solutions`,
        html: candidateEmailContent,
      });
      console.log("Candidate email sent successfully");
    } catch (emailError) {
      console.error("Failed to send candidate email:", emailError);
      // Continue with application submission even if email fails
    }

    res.status(201).json({
      success: true,
      applicationId: result.insertedId,
      message:
        "Application submitted successfully! You will receive a confirmation email shortly.",
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
};

// Get all applications (Admin only)
export const getApplications: RequestHandler = async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const applications = await db
      .collection("job_applications")
      .aggregate([
        {
          $lookup: {
            from: "job_openings",
            localField: "jobId",
            foreignField: "_id",
            as: "job",
          },
        },
        {
          $unwind: "$job",
        },
        {
          $sort: { submittedAt: -1 },
        },
      ])
      .toArray();

    res.json(applications);
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};

// Admin authentication
export const adminLogin: RequestHandler = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Simple authentication - in production, use proper hashing
    if (username === "admin" && password === "intelligate2025") {
      // Generate a simple session token
      const token = Buffer.from(`${username}:${Date.now()}`).toString("base64");
      res.json({
        success: true,
        token,
        message: "Login successful",
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Login failed" });
  }
};

// Middleware to verify admin token
export const verifyAdmin: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  const token = authHeader.substring(7);

  try {
    // Simple token verification - in production, use JWT
    const decoded = Buffer.from(token, "base64").toString();
    if (decoded.includes("admin:")) {
      next();
    } else {
      res.status(401).json({ error: "Invalid token" });
    }
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Get all categories
export const getCategories: RequestHandler = async (req, res) => {
  try {
    const db = await connectToMongoDB();
    const categories = await db
      .collection("job_categories")
      .find({})
      .sort({ name: 1 })
      .toArray();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

// Create new category (Admin only)
export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }

    const db = await connectToMongoDB();

    // Check if category already exists
    const existingCategory = await db.collection("job_categories").findOne({
      name: { $regex: new RegExp(`^${name}$`, "i") },
    });

    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }

    const newCategory = {
      name: name.trim(),
      description: description?.trim() || "",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("job_categories").insertOne(newCategory);

    res.status(201).json({
      success: true,
      categoryId: result.insertedId,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Failed to create category" });
  }
};

// Delete category (Admin only)
export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const db = await connectToMongoDB();

    // Check if any jobs are using this category
    const jobsUsingCategory = await db.collection("job_openings").findOne({
      industry: await db
        .collection("job_categories")
        .findOne({ _id: new ObjectId(id) })
        .then((cat) => cat?.name),
    });

    if (jobsUsingCategory) {
      return res
        .status(400)
        .json({ error: "Cannot delete category that is being used by jobs" });
    }

    const result = await db
      .collection("job_categories")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ error: "Failed to delete category" });
  }
};
