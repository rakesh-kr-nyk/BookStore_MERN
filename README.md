# ✨ BookStore - MERN Stack Project

Welcome to **BookStore**, a **MERN stack** application that allows users to browse, purchase, and download free or paid books. This project is built using **MongoDB, Express.js, React.js, and Node.js**.

## 🌟 Features

### **Frontend (React.js + Vite)**
- 💡 Modern and **responsive UI** using Tailwind CSS
- 📚 **Book Listing** with categories (Free & Paid)
- 🔍 **Search & Filter** books
- 👀 View detailed **book descriptions**
- 🛍️ Add to **cart & checkout** (for paid books)
- 🌜 **Dark Mode** support

### **Backend (Node.js + Express.js + MongoDB)**
- 🔄 **REST API** to manage books and users
- 🛠️ Secure **User Authentication** (JWT-based login/signup)
- 📂 **MongoDB Database** for book storage
- 📏 Secure **file storage for PDFs**
- 📧 **Email Notifications** for book purchases

### **Admin Panel (Optional)**
- 📖 **Add, Update & Delete Books**
- 📊 Track **book sales & user activity**

## 💪 Tech Stack

| Technology  | Purpose  |
|-------------|---------|
| **React.js (Vite)** | Frontend UI |
| **Tailwind CSS** | Styling |
| **Node.js & Express.js** | Backend API |
| **MongoDB & Mongoose** | Database |
| **JWT Authentication** | User login/signup |
| **Cloud Storage (Cloudinary or Firebase)** | Store PDFs & images |
| **Redux Toolkit (Optional)** | State management |

## 📂 Folder Structure

```
BookStore/
│── backend/        # Node.js & Express API
│   ├── models/     # Database schemas
│   ├── routes/     # API routes (books, users)
│   ├── controllers/ # Business logic
│   ├── config/     # Database & auth configs
│── frontend/       # React.js + Vite App
│   ├── src/
