import { RequestHandler } from "express";
import nodemailer from "nodemailer";

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

interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  resume?: {
    filename: string;
    content: string;
    size: number;
  };
}

export const sendContactEmail: RequestHandler = async (req, res) => {
  try {
    const { fullName, email, phone, message, resume }: ContactFormData =
      req.body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({
        error: "Full name, email, and message are required",
      });
    }

    // Email content for admin
    const isResumeSubmission = !!resume;
    const emailSubject = isResumeSubmission
      ? `Resume Submission from ${fullName}`
      : `New Contact Form Submission from ${fullName}`;

    const adminEmailContent = `
      <h2>${isResumeSubmission ? "New Resume Submission" : "New Contact Form Submission"} - Intelligate Solutions</h2>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h3 style="color: #1e40af; margin-bottom: 20px;">${isResumeSubmission ? "Candidate Details:" : "Contact Details:"}</h3>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone || "Not provided"}</td>
            </tr>
            ${
              resume
                ? `
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Resume:</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                📎 ${resume.filename} (${(resume.size / 1024 / 1024).toFixed(2)} MB)
              </td>
            </tr>
            `
                : ""
            }
          </table>

          <h3 style="color: #1e40af; margin-top: 30px; margin-bottom: 15px;">${isResumeSubmission ? "Cover Message:" : "Message:"}</h3>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e40af;">
            ${message.replace(/\n/g, "<br>")}
          </div>

          ${
            isResumeSubmission
              ? `
          <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 4px; border-left: 4px solid #16a34a;">
            <p style="margin: 0; font-size: 14px; color: #16a34a;">
              <strong>📄 Resume attached to this email</strong><br>
              Please download the attachment to view the candidate's complete profile.
            </p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding: 15px; background-color: #dbeafe; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>📅 Received:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>
        </div>
      </div>
    `;

    // Email content for user (auto-reply)
    const userEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Intelligate Solutions</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">A Gateway of Intelligence</p>
        </div>
        
        <div style="padding: 30px; background-color: #f8f9fa;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Thank you for contacting us!</h2>
          
          <p>Dear ${fullName},</p>
          
          <p>We have received your message and appreciate you taking the time to reach out to us. Our team will review your inquiry and get back to you within 24 hours.</p>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
            <h3 style="color: #dc2626; margin-top: 0;">Your Message:</h3>
            <p style="margin-bottom: 0; color: #374151;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul style="color: #374151;">
            <li>Call us at: <strong>+91 9650923366</strong> or <strong>+91 9971019767</strong></li>
            <li>WhatsApp us at: <strong>+91 9971019767</strong></li>
            <li>Visit our website: <strong>intelligatesolution.com</strong></li>
          </ul>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
            <h3 style="color: #1e40af; margin-top: 0;">Our Offices:</h3>
            <p style="margin-bottom: 10px;"><strong>Rohtak (Regd. Office):</strong><br>155/29 Ram Gopal Colony, Delhi Road, Rohtak – 124001 (Haryana)</p>
            <p style="margin-bottom: 0;"><strong>Noida (Corporate Office):</strong><br>D-80, Sector 2, Noida – 201301 (Uttar Pradesh)</p>
          </div>
        </div>
        
        <div style="background-color: #374151; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">© 2025 Intelligate Solutions. All rights reserved.</p>
        </div>
      </div>
    `;

    // Prepare email options
    const emailOptions: any = {
      from: '"Intelligate Solutions Website" <admin@intelligatesolution.com>',
      to: "admin@intelligatesolution.com",
      subject: emailSubject,
      html: adminEmailContent,
    };

    // Add resume attachment if present
    if (resume) {
      const base64Data = resume.content.split(",")[1]; // Remove data:type;base64, prefix
      emailOptions.attachments = [
        {
          filename: resume.filename,
          content: base64Data,
          encoding: "base64",
        },
      ];
    }

    // Send email to admin
    await transporter.sendMail(emailOptions);

    // Send auto-reply to user
    const userSubject = isResumeSubmission
      ? "Thank you for submitting your resume - Intelligate Solutions"
      : "Thank you for contacting Intelligate Solutions";

    const userMessage = isResumeSubmission
      ? "Thank you for submitting your resume! We have received your profile and will review it carefully. Our HR team will contact you if your qualifications match our current openings."
      : "Your message has been sent successfully. We'll get back to you soon!";

    await transporter.sendMail({
      from: '"Intelligate Solutions" <admin@intelligatesolution.com>',
      to: email,
      subject: userSubject,
      html: userEmailContent,
    });

    res.json({
      success: true,
      message: userMessage,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error:
        "Unable to send your message at the moment. Please contact us directly at +91 9971019767 or try again later.",
    });
  }
};
