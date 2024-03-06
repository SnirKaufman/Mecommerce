import express from "express";
import "dotenv/config";
import connectDB from "./db/connect";
import { v2 as cloudinary } from "cloudinary";

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const start = async () => {
  try {
    await connectDB(process.env.DB_URL || "");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
