import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";

dotenv.config();

// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chat-app';

// MongoDB connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the process if connection fails
  });

//deployment code
if(process.env.Node === "production"){
  const dirPath = path.resolve();
  app.use(express.static(".Frontend/dist","index.html"));
  app.get("*",(req,res)=>{
      res.SendFile(path.resolve(dirpath,"./Frontend/dist", "index.html"));
  })
}


// Routes setup
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
