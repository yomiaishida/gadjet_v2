import Fastify from "fastify";
import dotenv from "dotenv";
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
  reply.send("Hello World!!!");
});

const start = async () => {
  try {
    const port = process.env.PORT || 5000;
    await fastify.listen({ port: port });
    console.log(
      chalk.yellow.underline.bold(
        `Server running on port ${fastify.server.address().port}`
      )
    );
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
