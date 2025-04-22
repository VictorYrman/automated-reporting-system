import { NavLink } from "react-router-dom";
import "../assets/styles/scss/nav.scss";

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__item">
          <NavLink to="/" className="fw-semibold header__link">
            Главная
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="/table" className="fw-semibold header__link">
            Таблицы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
