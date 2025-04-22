import { NavLink } from "react-router-dom";
import SadSmiley from "../assets/images/icons/smiley-sad.svg";
import "../assets/styles/scss/not-found.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container not-found__container">
        <picture>
          <source
            width="200"
            height="200"
            srcSet={SadSmiley}
            media="(max-width: 450px)"
          />
          <source
            width="250"
            height="250"
            srcSet={SadSmiley}
            media="(max-width: 768px)"
          />
          <img
            width="300"
            height="300"
            src={SadSmiley}
            alt="Грустный смайлик"
            className="not-found__image"
          />
        </picture>
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Страница не найдена</h2>
        <p className="not-found__description fw-light">
          Страница, которую вы ищете, не существует или произошла другая ошибка.
          Вернитесь назад или перейдите на{" "}
          <NavLink to="/" className="not-found__link text-secondary">
            automated-system.bstu.by
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default NotFound;
