import {
  loginHandler,
  logoutHandler,
  refreshHandler,
} from "../controllers/auth.controller.js";

export const loginOptions = {
  schema: {
    body: {
      type: "object",
      required: ["email", "password"],
      properties: {
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 10, maxLength: 20 },
        rememberMe: { type: "boolean" },
      },
      //   additionalProperties: false,
    },
    response: {
      200: {
        type: "object",
        properties: {
          accessToken: { type: "string" },
          email: { type: "string" },
          role: { type: "string" },
        },
      },
      401: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      404: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: loginHandler,
};

export const logoutOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: logoutHandler,
};

export const refreshOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          accessToken: { type: "string" },
          email: { type: "string" },
          role: { type: "string" },
        },
      },
      401: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
      500: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: refreshHandler,
};
