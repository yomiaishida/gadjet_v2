import mongoose from "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(chalk.cyan.bold(`MongoDB Connected: ${conn.connection.host}`));
  } catch (error) {
    console.error(chalk.red.bold(`Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;
