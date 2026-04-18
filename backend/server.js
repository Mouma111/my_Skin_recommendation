import express from "express"; 
import cors from "cors"; 
import connectDB from "./config/db.js"; // import your db.js connection function 
import skinRoutes from "./routes/skinRoutes.js";
const app = express();
// Middleware 
app.use(cors()); 
app.use(express.json()); // very importan

// Routes 
app.use("/api/skin", skinRoutes);

// Connect to MongoDB 
connectDB(); // call the function from db.js

//Start server 
app.listen(5000, () => console.log("Server running on port 5000"));