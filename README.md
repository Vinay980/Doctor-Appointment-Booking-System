# 🏥 Doctor Appointment Booking System

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application for managing doctor appointments. This system enables patients to book appointments, doctors to manage availability, and admins to oversee all operations — complete with role-based dashboards, real-time validation, and secure authentication.

## 🔗 Live Demo

👉 [Live Site](https://doctor-registration-qvhdx00bj-vinay980s-projects.vercel.app)

---

## 🚀 Features

- 🔐 **Authentication & Role-Based Access** (Admin, Doctor, Patient)
- 🧾 **Book & Manage Appointments**
- 📋 **Doctor Registration & Schedule**
- 📊 **Admin Dashboard**
- ⚙️ **RESTful API Integration**
- ✅ **Real-Time Validations**
- 📱 **Fully Responsive UI** (Tailwind CSS)

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (Authentication)

**Other Tools:**
- GitHub
- Vercel (Frontend Deployment)
- MongoDB Atlas (Cloud DB)
- Postman (API Testing)

---

## 📁 Folder Structure

Doctor-Appointment-Booking-System/
├── frontend/ # React Frontend
├── backend/ # Express + MongoDB Backend
└── README.md
---

## ⚙️ Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vinay980/Doctor-Appointment-Booking-System.git
   cd Doctor-Appointment-Booking-System

2. **Install dependencies**
**Frontend**
cd frontend
npm install

**Backend**
cd ../backend
npm install

3. **Setup environment variables**
Create a .env file in the backend/ directory:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4. **Start development servers**
Start Backend
cd backend
npm start

Start Frontend
cd frontend
npm run dev
