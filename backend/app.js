
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import menuRouter from "./routes/menuRoute.js";
import reservationRouter from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:5173",
    ].filter(Boolean),
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Backend health check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Newa Ghasa backend is running!",
  });
});

// API routes
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/menu", menuRouter);

// Error handling
app.use(errorMiddleware);

export default app;
