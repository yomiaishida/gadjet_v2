import Fastify from "fastify";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import chalk from "chalk";

dotenv.config();

connectDB();

const fastify = Fastify({
  logger: true,
});

// dotenv.config();

// console.log(process.env.MONGO_URI);

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});

const start = async () => {
  try {
    const port = process.env.PORT || 4000;
    await fastify.listen({ port: port });
    fastify.log.info(
      chalk.green(`Server running on port ${fastify.server.address().port}`)
    );
  } catch (err) {
    fastify.log.error(chalk.red(err));
    process.exit(1);
  }
};

start();
