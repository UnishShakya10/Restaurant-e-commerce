import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorMiddleware } from "./error/error.js";
import menuRouter from "./routes/menuRoute.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservation', reservationRouter);
app.use('/api/v1/menu', menuRouter);

app.use(errorMiddleware);

export default app;