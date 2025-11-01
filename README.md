Intelligate Solution

Live: https://intelligatesolution.com

A full-stack web application for corporate services & portfolio showcase. Built with a modern React + Vite frontend and a robust Node.js/Express + MongoDB backend. This repository is structured as a simple mono-repo with separate client and server workspaces.
<img width="1910" height="895" alt="image" src="https://github.com/user-attachments/assets/19b3ff77-a3c7-467b-816e-0beba2bd237d" />

✨ Highlights

Fast, SPA-style frontend with Vite

Secure, token-based admin auth for CMS-like editing

Modular API with validation and clean controllers

Image uploads, portfolio/projects, services, contact enquiries

Ready for production behind Nginx + PM2

🧱 Tech Stack

Frontend: React, Vite, TypeScript (TailwindCSS if present)

Backend: Node.js, Express, TypeScript, Mongoose (MongoDB)

Auth: JSON Web Tokens (JWT)

Uploads & Validation: Multer, Zod

Email: Nodemailer

Dev Tooling: tsx, concurrently, eslint (if present)

Exact dependencies are listed in each package.json.

📁 Repository Structure
Intelligate-Solution-main/
  client/
    ... (React + Vite app)
  server/
    config/
    middleware/
    models/
    routes/
    utils/
    ... (Express + MongoDB app)
  shared/
    api.ts


The tree above is truncated for readability.

🔑 Features

Modern React + Vite frontend with clean component structure.

TypeScript across the codebase for safer development (client and/or server).

Node.js + Express backend with modular route handlers.

MongoDB via Mongoose for data persistence.

JWT-based Admin authentication & protected admin APIs.

Image/file uploads using Multer (e.g., for project thumbnails).

Zod-based validation for safer request payloads.

Contact/Enquiry API with email notifications (Nodemailer).

Production-ready configs: CORS, environment variables, and build scripts.
<img width="1913" height="906" alt="image" src="https://github.com/user-attachments/assets/c7d1c613-8fd0-438d-9e86-f60cb39b9afd" />

⚙️ Local Development
1) Prerequisites

Node.js: v20.19+

MongoDB: Atlas connection string or local instance

Package manager: npm or pnpm

2) Clone & Install
git clone <your-repo-url>.git
cd Intelligate-Solution-main

# install root (if it has root package.json)
npm install || true

# install client & server
cd client && npm install && cd ..
cd server && npm install && cd ..

3) Environment Variables

Create a .env inside /server with values like:

PORT=8080
NODE_ENV=development

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/intelligate
JWT_SECRET=replace_me_with_a_strong_secret

# Email (optional)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=no-reply@example.com
SMTP_PASS=yourpassword
SMTP_FROM="Intelligate Solution <no-reply@example.com>"

<img width="1909" height="922" alt="image" src="https://github.com/user-attachments/assets/7aa97b17-39f8-484b-86d5-732e1d3ca193" />

Create a .env inside /client (if the app expects it) with:

VITE_API_BASE_URL=http://localhost:8080


If you see runtime errors like “JWT_SECRET missing” or DB connection failures, confirm the .env keys match what the code reads.

4) Run in Dev

From root (preferred if there’s a combined script):

npm run dev


Or run separately:

# Terminal A
cd server
npm run dev

# Terminal B
cd client
npm run dev


By default, Vite runs at http://localhost:5173
 and the API at http://localhost:8080
 (or as configured).

5) Build & Start (Prod)
# Client
cd client
npm run build

# Server
cd ../server
npm run build
npm start

🔌 API Reference (Quick Glimpse)

Explore /server/routes/* and the server entry for full details.

Auth, Services, Portfolio/Projects, Contact/Enquiry, Admin-protected endpoints (JWT)

Typical patterns:

POST /api/admin/login

GET /api/services

POST /api/services (admin)

GET /api/projects

POST /api/projects (admin, with image upload)

POST /api/enquiry

etc.

🧪 Useful Scripts

Root scripts

(If present in root package.json)

Client scripts

dev → vite

build → vite build

preview → vite preview

Server scripts

dev → tsx watch index.ts

build → tsc

start → node dist/index.js

(Script names may vary slightly based on your repo; check package.json.)

🚀 Deployment Notes (Nginx + PM2)

Build artifacts

cd client && npm run build
cd ../server && npm run build


Serve backend with PM2

pm2 start dist/index.js --name intelligate-api
pm2 save && pm2 startup


Reverse proxy with Nginx (example)

server {
  listen 443 ssl http2;
  server_name intelligatesolution.com;

  # SSL config ...

  # Frontend (if served as static files)
  root /var/www/intelligate/client/dist;
  index index.html;

  location /api/ {
    proxy_pass http://127.0.0.1:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }

  location / {
    try_files $uri /index.html;
  }
}


You can also serve the frontend via the Node server if that’s built in.

🛠 Troubleshooting

MongoDB “bad auth” / connect fails: Double-check MONGODB_URI, IP whitelist, and user credentials.

JWT_SECRET missing: Ensure server .env contains a strong JWT_SECRET.

Cannot find module dist/index.js: Run npm run build in /server before npm start. Ensure PM2 points to the built file path.

CORS errors in browser: Confirm the API sets proper CORS and that VITE_API_BASE_URL matches the deployed API origin.

Node version mismatch: Use Node 20.19+ to avoid Vite/Undici issues.

👤 Maintainers

Intelligate Solution — https://intelligatesolution.com

If you fork/extend this project, please keep a reference to the original URL.

📄 License

This codebase is currently private and intended for Intelligate Solution’s use. Contact the maintainers for licensing inquiries.
