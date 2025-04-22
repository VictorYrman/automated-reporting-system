import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/scss/home.scss";
import Modal from "../components/Modal";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { isAuth } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="btn btn--secondary fw-semibold home__btn"
          >
            Далее
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
