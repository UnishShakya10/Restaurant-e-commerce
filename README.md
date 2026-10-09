# Newa Ghasa

A full-stack restaurant website and reservation application for **Newa Ghasa** in Kathmandu, Nepal. Built and maintained by [Unish Shakya](https://github.com/UnishShakya10).

**GitHub:** [UnishShakya10/Restaurant-e-commerce](https://github.com/UnishShakya10/Restaurant-e-commerce)

## Features

- Responsive, multi-page restaurant website
- Restaurant menu loaded from MongoDB
- Menu seeding with `npm run seed:menu`
- Reservation requests with guest count and optional dish selections
- Reservation and menu APIs built with Express and Mongoose

## Tech stack

- **Frontend:** React, Vite, React Router, Mantine, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose

## Run locally

### Requirements

- Node.js and npm
- A MongoDB connection string

### Configure environment

1. In `backend`, copy `config/config.env.example` to `config/config.env`.
2. Set `MONGO_URI`, `PORT`, and `FRONTEND_URL` in `backend/config/config.env`.
3. The app will also fall back to a local in-memory MongoDB instance if the configured database is unavailable, which makes local development easier.
4. The repository already includes a working `frontend/.env` pointing to the default backend URL.

Do not commit `backend/config/config.env` or any real credentials.

### Install and start

Open separate terminals for the backend and frontend:

```powershell
cd backend
npm install
npm run seed:menu
npm run dev
```

```powershell
cd frontend
npm install
npm run dev
```

The menu catalog is maintained in `backend/data/menuSeed.json` and seeded into MongoDB. The API exposes menu items at `GET /api/v1/menu`; reservations are submitted at `POST /api/v1/reservation/send`.

## Project owner

Created and maintained by [Unish Shakya](https://github.com/UnishShakya10). The source repository is [Restaurant-e-commerce](https://github.com/UnishShakya10/Restaurant-e-commerce).
