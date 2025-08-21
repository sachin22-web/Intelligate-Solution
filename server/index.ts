import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import {
  getJobOpenings,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
  submitApplication,
  getApplications,
  adminLogin,
  verifyAdmin,
  getCategories,
  createCategory,
  deleteCategory,
} from "./routes/jobs";
import { sendContactEmail } from "./routes/email";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: "10mb" })); // Increase limit for file uploads
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Job Management API Routes
  app.get("/api/jobs", getJobOpenings);
  app.get("/api/jobs/:id", getJobById);
  app.post("/api/jobs", verifyAdmin, createJob);
  app.put("/api/jobs/:id", verifyAdmin, updateJob);
  app.delete("/api/jobs/:id", verifyAdmin, deleteJob);

  // Job Application Routes
  app.post("/api/applications", submitApplication);
  app.get("/api/applications", verifyAdmin, getApplications);

  // Contact Form Route
  app.post("/api/contact", sendContactEmail);

  // Admin Authentication
  app.post("/api/admin/login", adminLogin);

  // Category Management Routes
  app.get("/api/categories", getCategories);
  app.post("/api/categories", verifyAdmin, createCategory);
  app.delete("/api/categories/:id", verifyAdmin, deleteCategory);

  return app;
}
