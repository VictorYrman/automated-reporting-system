import { FastifyInstance } from "fastify";
import {
  loginOptions,
  logoutOptions,
  refreshOptions,
} from "../schemas/auth.schema.js";

export const authRouter = (
  server: FastifyInstance,
  options: any,
  done: any
) => {
  server.post("/login", loginOptions);
  server.post("/logout", logoutOptions);
  server.get("/refresh", refreshOptions);

  done();
};
