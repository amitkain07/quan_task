import express from "express";
import dotenv from "dotenv";
import connect from "./db/connect.js";
import notFound from "./middleware/notFound.js";

import cors from "cors";
import user from "./routes/user.js";
import getall from "./routes/getAll.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.json("task apis");
});

app.use(user);
app.use(getall);

app.use(notFound);


const PORT = process.env.PORT || 4000;

const Start = async () => {
  try {
    await connect(process.env.uri);
    console.log(" Connected to DB!");
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

Start();
