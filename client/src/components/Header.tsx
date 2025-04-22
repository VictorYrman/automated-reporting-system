import Nav from "./Nav";
import Modal from "./Modal";
import "../assets/styles/scss/header.scss";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "../assets/images/icons/logo.svg";
import LogoPrimary from "../assets/images/icons/logo-primary.svg";
import BurgerMenu from "../assets/images/icons/burger-menu.svg";
import ArrowRightDark from "../assets/images/icons/arrow-right-dark.svg";
import axios from "axios";

const Header = () => {
  const { isAuth, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);

  const menuHandler = () => {
    menuRef.current?.classList.remove("burger-menu--closed");
    menuRef.current?.classList.add("burger-menu--opened");

    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Node)) return;

      if (
        menuRef.current?.contains(event.target) ||
        burgerButtonRef.current?.contains(event.target)
      ) {
        return;
      }

      menuRef.current?.classList.remove("burger-menu--opened");
      menuRef.current?.classList.add("burger-menu--closed");
    });
  };

  const linkHandler = () => {
    menuRef.current?.classList.remove("burger-menu--opened");
    menuRef.current?.classList.add("burger-menu--closed");
  };

  const logoutHandler = async () => {
    await axios.post("http://localhost:9999/logout", {
      withCredentials: true,
    });
    logout();
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo-nav">
            <NavLink to="/">
              <img
                src={Logo}
                alt="Логотип БрГТУ"
                className="logo header__logo"
              />
            </NavLink>
            <Nav />
          </div>

          <div className="header__buttons">
            {isAuth ? (
              <button
                onClick={logoutHandler}
                type="button"
                className="btn btn--secondary fw-semibold header__btn"
              >
                Выйти
              </button>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="btn btn--secondary fw-semibold header__btn"
              >
                Войти
              </button>
            )}

            <button
              ref={burgerButtonRef}
              onClick={menuHandler}
              type="button"
              className="header__burger"
            >
              <img src={BurgerMenu} alt="Иконка бургер-меню" />
            </button>
          </div>
        </div>
      </header>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div ref={menuRef} className={"burger-menu"}>
        <div className="burger-menu__logo-btn">
          <NavLink onClick={linkHandler} to="/">
            <img
              src={LogoPrimary}
              alt="Логотип БрГТУ в синем цвете"
              className="logo burger-menu__logo"
            />
          </NavLink>
          <button
            onClick={() => {
              menuRef.current?.classList.remove("burger-menu--opened");
              menuRef.current?.classList.add("burger-menu--closed");
            }}
            className="burger-menu__btn"
          >
            <img src={ArrowRightDark} alt="Стрелка вправо" />
          </button>
        </div>

        <div className="burger-menu__nav-btn">
          <nav className="burger-menu__nav">
            <ul className="burger-menu__list">
              <li className="burger-menu__item">
                <NavLink
                  onClick={linkHandler}
                  to="/"
                  className="fw-semibold burger-menu__link"
                >
                  Главная
                </NavLink>
              </li>
              <li className="burger-menu__item">
                <NavLink
                  onClick={linkHandler}
                  to="/table"
                  className="fw-semibold burger-menu__link"
                >
                  Таблицы
                </NavLink>
              </li>
            </ul>
          </nav>

          {isAuth ? (
            <button
              onClick={() => {
                logoutHandler();
                menuRef.current?.classList.remove("burger-menu--opened");
                menuRef.current?.classList.add("burger-menu--closed");
              }}
              className="btn btn--secondary fw-semibold"
            >
              Выйти
            </button>
          ) : (
            <button
              onClick={() => {
                setIsModalOpen(true);
                menuRef.current?.classList.remove("burger-menu--opened");
                menuRef.current?.classList.add("burger-menu--closed");
              }}
              className="btn btn--secondary fw-semibold"
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
