import fastify, { FastifyInstance } from "fastify";
import dotenv from "dotenv";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { setupDatabase } from "./config/db.js";
import { authRouter } from "./routes/auth.router.js";

dotenv.config();

const server: FastifyInstance = fastify();
const PORT: number = Number(process.env.PORT);

server.register(fastifyCookie);
server.register(fastifyCors, {
  origin: true,
  credentials: true,
});
server.register(fastifyJwt, {
  secret: "supersecret",
});
server.register(authRouter);

const start = async (): Promise<void> => {
  try {
    await setupDatabase(server);
    console.info("Сервер успешно подключён к БД!");

    await server.listen({ port: PORT, host: "0.0.0.0" }, (error, address) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }

      console.info(`Сервер работает на ${address}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
