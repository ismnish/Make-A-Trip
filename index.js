import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/booking.js";
import subscriberRouter from "./routes/subscribers.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// c path = require('path')
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//---------Deployment------------

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*',(req, res)=> res.sendFile(path.join(__dirname, '../frontend/build/index.html')));


// const __dirname1 = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "../frontend/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname1, "../frontend/build", "index.html"));
//   });
//   const indexPath = path.resolve(__dirname1, "../frontend/build", "index.html");
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is working");
//   });
// }
//---------Deployment------------

// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // Remove the deprecated options
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("MongoDB database connected");
  } catch (e) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/v1/auth/", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/subscriber", subscriberRouter);
app.listen(port, () => {
  connect();
  console.log("Server listening on port", port);
});
