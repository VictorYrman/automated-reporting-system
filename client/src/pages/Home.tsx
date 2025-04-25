import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";
import "../assets/styles/scss/home.scss";

const Home = () => {
  const { isAuth }: { isAuth: boolean } = useAuth();
  const { open }: { open: () => void } = useModal();
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <div className="container home__container">
        <h1 className="home__title">
          Система{" "}
          <span className="text-secondary">мониторинга преподавательской</span>{" "}
          деятельности
        </h1>
        <p className="fw-light home__paragraph">
          Автоматизированная платформа для учета и анализа научно-педагогической
          работы преподавателей, формирования рейтингов и генерации отчётности
          для кафедр и деканатов
        </p>
        {isAuth ? (
          <button
            onClick={() => navigate("/table")}
            type="button"
            className="btn btn--secondary fw-semibold home__btn"
          >
            Продолжить
          </button>
        ) : (
          <button
            onClick={open}
            type="button"
            className="btn btn--secondary fw-semibold home__btn"
          >
            Далее
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
