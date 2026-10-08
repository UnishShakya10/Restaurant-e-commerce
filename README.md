# Restaurant-Web-Application

A full-stack restaurant web application built with the MERN stack.

## Features
- Responsive UI with hamburger menu and smooth scroll navigation
- Dynamic content rendering from REST API
- Reservation form with backend integration
- Mobile responsive design

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Mantine UI
- Lucide React
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Running the project locally

1. In `backend`, copy `config/config.env.example` to `config/config.env` and set `MONGO_URI`, `PORT`, and `FRONTEND_URL`.
2. In `frontend`, copy `.env.example` to `.env` if the API is not running at the default URL.
3. Install dependencies in both folders with `npm install`.
4. In `backend`, run `npm run seed:menu` once to load or update the menu items in MongoDB.
5. Start the backend with `npm run dev` and the frontend with `npm run dev` in separate terminals.

The menu catalog is stored in `backend/data/menuSeed.json` and loaded into MongoDB with `npm run seed:menu`. The backend serves the database menu at `GET /api/v1/menu`. Reservation requests store selected dishes as snapshots of their database name, course, and price.
