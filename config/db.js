const mongoose = require('mongoose');
const { DATABASE_URL } = require('../utils/config')


const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;