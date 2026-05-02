# Bachat Bazaar - One Dollar Store Pakistan

A production-ready, full-stack e-commerce platform built with Node.js, Express, MongoDB, and Vanilla JS.

## Features
- **Modern UI**: Stunning, premium design with Tailwind CSS and Plus Jakarta Sans.
- **Auth System**: Secure JWT-based authentication (Login/Register).
- **Product Management**: Full CRUD for products, category filtering, and search.
- **Cart System**: Persistent client-side cart with real-time updates.
- **Order Management**: Checkout flow with shipping details and order tracking.
- **Admin Dashboard**: Real-time business statistics (Revenue, Orders, Users) and full catalog management.

## Tech Stack
- **Frontend**: HTML5, Vanilla JavaScript, Tailwind CSS.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (Mongoose ODM).
- **Auth**: JSON Web Tokens (JWT), Bcrypt.js.

## Setup Instructions

### 1. Prerequisites
- Node.js (v14+)
- MongoDB (Running locally or on Atlas)

### 2. Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bachat-bazaar
JWT_SECRET=your_super_secret_key_123
```

### 4. Seed Initial Data
Populate the database with trending products:
```bash
node seed.js
```

### 5. Start the Server
```bash
npm run dev
```
The app will be available at `http://localhost:5000`.

## Admin Access
To access the admin dashboard:
1. Register a new user at `http://localhost:5000/auth.html`.
2. Manually change the `role` to `'admin'` in the MongoDB `users` collection for that user.
3. Login and navigate to `http://localhost:5000/admin.html`.

## Project Structure
- `server/`: Backend logic (models, routes, controllers).
- `public/`: Frontend assets (HTML, CSS, JS).
- `public/assets/js/app.js`: Central frontend service for API and state management.
- `seed.js`: Database initialization script.
- `server.js`: Main entry point.

---
Built with ❤️ for Bachat Bazaar Pakistan.
