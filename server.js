import express from "express";
import dotenv from "dotenv";
import connectDB from "./backend/database.js";
import authRoutes from "./backend/routes/authRoutes.js";

import contactRoutes from "./backend/routes/contactRoutes.js";
import projectRoutes from "./backend/routes/projectRoutes.js";
import qualificationRoutes from "./backend/routes/qualificationRoutes.js";
import userRoutes from "./backend/routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to My Portfolio application.",
  });
});

app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);
app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
