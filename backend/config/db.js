import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB Atlas...");

    await mongoose.connect(
      "mongodb+srv://skinndoc:Nni6ztaadmJwq5U3@cluster1.fgyobig.mongodb.net/skin_doctor",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB Atlas Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
