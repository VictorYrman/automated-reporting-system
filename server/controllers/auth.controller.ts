import { createHash } from "crypto";
import dotenv from "dotenv";
import { access } from "fs";

dotenv.config();

export const loginHandler = async (request: any, reply: any) => {
  try {
    const { email, password, rememberMe } = request.body;

    console.log(email, password, rememberMe);

    const user = (
      await request.server.pg.query(`SELECT * FROM users WHERE email = $1`, [
        email,
      ])
    ).rows[0];

    if (!user)
      return reply.code(404).send({ message: "Вы ввели неправильный email!" });

    const passwordValid =
      createHash("sha256").update(password).digest("hex").toLowerCase() ===
      user.password;

    if (!passwordValid)
      return reply.code(401).send({ message: "Вы ввели неправильный пароль!" });

    console.log(user);

    const accessToken = await request.server.jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "15m",
      }
    );

    const refreshToken = await request.server.jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.SECRET_REFRESH_TOKEN,
      {
        expiresIn: rememberMe ? "15d" : "1d",
      }
    );

    reply.setCookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "none",
      maxAge: rememberMe ? 15 * 24 * 60 * 60 * 1000 : 1 * 24 * 60 * 60 * 1000,
    });

    reply
      .code(200)
      .send({ accessToken: accessToken, email: user.email, role: user.role });
  } catch (error) {
    console.error(error);
    reply.code(500).send({ message: "Возникла ошибка на сервере!" });
  }
};

export const logoutHandler = async (request: any, reply: any) => {
  try {
    reply.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "None",
      path: "/",
    });

    reply.code(200).send({ message: "Вы успешно вышли из системы!" });
  } catch (error) {
    console.error(error);
    reply.code(500).send({
      message: "Возникла ошибка на сервере!",
    });
  }
};

export const refreshHandler = async (request: any, reply: any) => {
  try {
    const token = request.cookies.refreshToken;

    if (!token) {
      return reply.code(401).send({ message: "Нет refresh токена!" });
    }

    const payload = await request.server.jwt.verify(
      token,
      process.env.SECRET_REFRESH_TOKEN
    );

    const newAccessToken = await request.server.jwt.sign(
      {
        id: payload.id,
        email: payload.email,
        role: payload.role,
      },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "15m",
      }
    );

    reply.code(200).send({
      accessToken: newAccessToken,
      email: payload.email,
      role: payload.role,
    });
  } catch (error) {
    console.error(error);
    reply.code(500).send({
      message: "Возникла ошибка на сервере!",
    });
  }
};
