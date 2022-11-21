import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";

import authRoutes from "./routes/auth.routes";
import specialRoutes from './routes/special.routes'

//initialization
const app = express();

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.use(authRoutes);
app.use(specialRoutes)

export default app;
