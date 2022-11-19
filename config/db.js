const { config } = require("dotenv");
const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;
// console.log(MONGO_URI);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
