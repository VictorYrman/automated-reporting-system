export const authenticate = async (request: any, reply: any) => {
  try {
    await request.jwtVerify();
  } catch (error) {
    reply.code(401).send({ message: "Невалидный токен" });
  }
};
