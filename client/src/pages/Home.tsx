import { useState } from "react";
import "../assets/styles/scss/home.scss";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="btn btn--secondary fw-semibold home__btn"
        >
          Далее
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Home;
