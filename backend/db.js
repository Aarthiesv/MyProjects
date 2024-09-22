const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://saarthibca1998:practice@cluster0.vnfzw.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
