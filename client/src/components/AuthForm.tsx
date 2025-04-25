import { useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const AuthForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { login }: { login: (token: string, role: string) => void } = useAuth();
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const submitHandler = async (data: FormData) => {
    const response = await axios.post(
      "http://localhost:9999/login",
      {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { accessToken, role } = response.data;
    login(accessToken, role);

    onSuccess?.();
    navigate("/table");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="auth__form">
      <div className="input-wrapper">
        <label htmlFor="email" className="auth__label">
          E-mail:
        </label>
        <div>
          <input
            {...register("email", {
              required: "Введите E-mail",
              pattern: {
                value: /(@bstu.by)$/,
                message: "Некорректная почта (something@bstu.by)",
              },
            })}
            type="email"
            placeholder="Введите E-mail"
            className="input auth__input"
            id="email"
          />
          {errors.email && (
            <p className="auth__error">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password" className="auth__label">
          Пароль:
        </label>
        <div>
          <input
            {...register("password", {
              required: "Введите пароль",
              pattern: {
                value:
                  /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{10,}$/,
                message: "Некорректный пароль",
              },
            })}
            type="password"
            placeholder="Введите пароль"
            className="input auth__input"
            id="password"
          />
          {errors.password && (
            <p className="auth__error">{errors.password.message}</p>
          )}
        </div>
      </div>
      <div className="auth__footer">
        <div className="auth__footer__input-wrapper">
          <input {...register("rememberMe")} type="checkbox" id="rememberMe" />
          <label className="auth__label" htmlFor="rememberMe">
            Запомнить меня
          </label>
        </div>
        <button
          type="submit"
          className="btn btn--secondary fw-semibold auth__btn"
        >
          Войти
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
