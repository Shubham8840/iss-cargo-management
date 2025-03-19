//console.log("Hello, ISS Cargo Management!");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Enable CORS

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("ISS Cargo Management API is running!");
});
const placementRoutes = require("./routes/placementRoutes");
app.use("/api/placement", placementRoutes);
const searchRoutes = require("./routes/searchRoutes");
app.use("/api/search", searchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
