import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";

import authRoutes from "./routes/auth.routes";

//initialization
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(authRoutes);

export default app;
