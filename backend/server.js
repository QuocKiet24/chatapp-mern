import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./src/lib/db.js";
import { app, server } from "./src/lib/socketio.js";

//routes
import authRoute from "./src/routes/auth.route.js";
import messageRoute from "./src/routes/message.route.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
