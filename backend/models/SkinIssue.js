import mongoose from "mongoose";

const skinIssueSchema = new mongoose.Schema({
  name: { type: String, required: true },       // eczema
  keywords: { type: [String], required: true }, // itch, red, patch
  condition: { type: String, required: true },  // Eczema or Dermatitis
  doctors: [
    {
      name: String,
      specialization: String,
      experience: String,
      hospital: String,
      location: String,
      contact: String,
      rating: Number
    }
  ]
});


export default mongoose.model("SkinIssue", skinIssueSchema);
