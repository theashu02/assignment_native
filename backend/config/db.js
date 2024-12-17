const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ashu:ashu0512@cluster0.q5cwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black.bold.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
