# Intelligate Solutions Job Board System

A complete job board and admin management system integrated with MongoDB Atlas.

## Features

### 🎯 **Job Board (/openings)**
- Fetches job listings from MongoDB collection: `job_openings`
- Industry-based filtering
- Responsive job cards with detailed information
- "Apply Now" functionality with modal form

### 📝 **Application System**
- Responsive modal form with file upload
- Form validation and error handling
- Resume upload (PDF/DOC/DOCX, max 5MB)
- Base64 encoding for file storage
- Applications saved to `job_applications` collection

### 🔒 **Admin Panel (/admin)**
- Secure login system
- Job management dashboard
- CRUD operations for job postings
- Applications overview
- Responsive design with modern UI

## Database Structure

### Collections:

#### `job_openings`
```javascript
{
  _id: ObjectId,
  title: String,
  location: String,
  experience: String,
  industry: String,
  salary: String,
  type: String,
  description: String,
  skills: Array<String>,
  status: String, // "active" | "inactive"
  postedDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

#### `job_applications`
```javascript
{
  _id: ObjectId,
  jobId: ObjectId, // Reference to job_openings
  fullName: String,
  email: String,
  phone: String,
  resume: String, // Base64 encoded file
  status: String, // "pending" | "reviewed" | "rejected"
  submittedAt: Date,
  createdAt: Date
}
```

## API Endpoints

### Public Endpoints:
- `GET /api/jobs` - Get all active job openings
- `GET /api/jobs/:id` - Get single job by ID
- `POST /api/applications` - Submit job application

### Admin Endpoints (Require Authentication):
- `POST /api/admin/login` - Admin login
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job
- `GET /api/applications` - Get all applications with job details

## Admin Credentials
- **Username:** admin
- **Password:** intelligate2025

## Usage Instructions

### For Candidates:
1. Visit `/openings` to view available positions
2. Filter jobs by industry using the filter buttons
3. Click "Apply Now" on any job card
4. Fill out the application form with personal details
5. Upload resume (PDF/DOC/DOCX format, max 5MB)
6. Submit application

### For Administrators:
1. Visit `/admin/login` and login with credentials
2. Access the admin dashboard at `/admin`
3. View job statistics and manage openings
4. Add new jobs using the "Add New Job" button
5. Edit existing jobs using the edit icon
6. Delete jobs using the delete icon
7. Monitor applications from the dashboard

## Database Setup

The database is automatically seeded with sample job data when the seeder script runs:

```bash
cd server && npx tsx seedData.ts
```

This creates:
- 6 sample job openings across different industries
- Proper database indexes for performance
- Collection structure setup

## Technical Features

### Frontend:
- ✅ React with TypeScript
- ✅ Responsive design (mobile-friendly)
- ✅ Form validation and error handling
- ✅ File upload with type/size validation
- ✅ Loading states and animations
- ✅ Modern UI with Tailwind CSS and shadcn/ui

### Backend:
- ✅ Express.js API with TypeScript
- ✅ MongoDB integration with proper error handling
- ✅ File upload handling (base64 encoding)
- ✅ Authentication middleware
- ✅ RESTful API design
- ✅ Input validation and sanitization

### Security:
- ✅ Admin authentication with tokens
- ✅ Protected admin routes
- ✅ File type validation
- ✅ Request size limits
- ✅ Input sanitization

## Deployment Notes

1. **Environment Variables**: MongoDB URI is currently hardcoded. In production, use environment variables:
   ```
   MONGODB_URI=mongodb+srv://ai:Ai123@cluster0.fwwaouj.mongodb.net/
   ```

2. **File Storage**: Currently using base64 encoding. For production, consider:
   - AWS S3 for file storage
   - Cloudinary for image processing
   - File size limits and virus scanning

3. **Authentication**: Current auth is basic. For production, implement:
   - JWT tokens with proper expiration
   - Password hashing (bcrypt)
   - Rate limiting
   - Session management

4. **Email Notifications**: Add email functionality for:
   - Application confirmations
   - Admin notifications
   - Status updates

## Future Enhancements

- [ ] Email notifications for applications
- [ ] Advanced search and filtering
- [ ] Candidate dashboard
- [ ] Application status tracking
- [ ] Interview scheduling
- [ ] Resume parsing and keyword matching
- [ ] Analytics and reporting
- [ ] Bulk operations for admin
- [ ] Role-based access control
