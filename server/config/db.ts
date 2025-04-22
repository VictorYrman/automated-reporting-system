import fastifyPostgres from "@fastify/postgres";
import dotenv from "dotenv";

dotenv.config();

const postgresConfig = {
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
};

export const setupDatabase = async (server: any) => {
  await server.register(fastifyPostgres, postgresConfig);
};
