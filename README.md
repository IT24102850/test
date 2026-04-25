# MERN Item Manager Starter Project

This project contains separate frontend (React) and backend (Node.js/Express) applications for managing items with MongoDB.

## Folder Structure
- `backend/` — Node.js/Express API server
- `frontend/` — React client app

## Setup Instructions

### 1. Backend Setup
1. Go to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and set your MongoDB Atlas connection string:
   ```sh
   cp .env.example .env
   # Edit .env and set MONGODB_URI
   ```
4. Start the backend server:
   ```sh
   npm run dev
   # or
   npm start
   ```

### 2. Frontend Setup
1. Open a new terminal and go to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. (Optional) Copy `.env.example` to `.env` and set the API URL if needed.
4. Start the React app:
   ```sh
   npm start
   ```

### 3. Usage
- Open [http://localhost:3000](http://localhost:3000) in your browser.
- You can add, edit, and delete items. All data is stored in your MongoDB database.

---

## Deployment
- Deploy the backend to Railway, Render, or similar.
- Deploy the frontend to Netlify, Vercel, or similar.
- Update API URLs in the frontend `.env` after deployment.

---

**Good luck with your lab test!**
