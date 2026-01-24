const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDatabase");
    console.log(`MongoDB connected to ${mongoose.connection.name}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    console.error("Mongoose connection error:", err);
  });
};

module.exports = connectDB;
