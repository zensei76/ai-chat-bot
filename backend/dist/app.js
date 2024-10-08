import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.FRONTEND_URL2],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Use Morgan only in development
if (process.env.NODE_ENV !== 'production') {
    app.use(morgan("dev"));
}
// Routes
app.use("/api/v1", appRouter);
export default app;
//# sourceMappingURL=app.js.map