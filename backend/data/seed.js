import mongoose from "mongoose";
import connectDB from "../config/db.js";
import SkinIssue from "../models/SkinIssue.js";

connectDB();

const seedData = [
  {
    name: "eczema",
    keywords: ["itch", "red", "patch", "dry skin"],
    condition: "Eczema or Dermatitis",
    doctors: [
      {
        name: "Dr. Mouma Barik",
        specialization: "Dermatologist",
        experience: "12 years",
        hospital: "Apollo Hospital",
        location: "Kolkata",
        contact: "9876543210",
        rating: 4.5
      },
      {
        name: "Dr. Avilasa Maji",
        specialization: "Skin Specialist",
        experience: "8 years",
        hospital: "Fortis Clinic",
        location: "Delhi",
        contact: "9123456789",
        rating: 4.2
      },
      {
        name: "Dr. Ashmi Saha",
        specialization: "Skin Specialist",
        experience: "8 years",
        hospital: "Fortis Clinic",
        location: "Delhi",
        contact: "9123456789",
        rating: 4.0
      }
    ]
  },
  {
    name: "acne",
    keywords: ["pimple", "acne", "oily", "breakout"],
    condition: "Acne (Pimples)",
    doctors: [
      {
        name: "Dr. Somparna Gantait",
        specialization: "Cosmetic Dermatologist",
        experience: "10 years",
        hospital: "KIMS Hospital",
        location: "Bangalore",
        contact: "9822334455",
        rating: 4.3
      },
      {
        name: "Dr. Rima Kar",
        specialization: "Cosmetic Dermatologist",
        experience: "10 years",
        hospital: "KIMS Hospital",
        location: "Bangalore",
        contact: "9822334455",
        rating: 4.1
      }
    ]
  }
];


const importData = async () => {
  try {
    await SkinIssue.deleteMany();
    await SkinIssue.insertMany(seedData);
    console.log("Data Seeded");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();
