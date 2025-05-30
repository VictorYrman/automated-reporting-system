import { FastifyReply, FastifyRequest } from "fastify";

export const authenticate = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.code(401).send({ message: "Невалидный токен" });
  }
};
