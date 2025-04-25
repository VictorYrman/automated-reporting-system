import fastifyPostgres from "@fastify/postgres";
import dotenv from "dotenv";
import { FastifyInstance } from "fastify";
import { PoolClient } from "pg";

dotenv.config();

const postgresConfig = {
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
};

export const setupDatabase = async (server: FastifyInstance): Promise<void> => {
  try {
    await server.register(fastifyPostgres, postgresConfig);

    const client: PoolClient = await server.pg.connect();
    await client.release();
  } catch (error) {
    console.error(error);
  }
};
