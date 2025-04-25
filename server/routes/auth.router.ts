import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  loginOptions,
  logoutOptions,
  refreshOptions,
} from "../schemas/auth.schema.js";

export const authRouter = (
  server: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) => {
  server.post("/login", loginOptions);
  server.post("/logout", logoutOptions);
  server.get("/refresh", refreshOptions);

  done();
};
