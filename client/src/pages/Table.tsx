import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/scss/table.scss";
import Modal from "../components/Modal";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const role = location.state?.role;

  if (!role) {
    return (
      <>
        <div className="container table__container">
          <h2 className="table__title">
            Работа с <span className="text-secondary">таблицами</span> системы
          </h2>
          <p className="fw-light table__paragraph">
            Чтобы получить доступ к этой странице, войдите в аккаунт нажава на
            кнопку <span className="fw-semibold">"Войти"</span> в заголовке или
            на кнопку <span className="fw-semibold">"Получить доступ"</span>{" "}
            нижe
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn btn--secondary fw-semibold table__btn"
          >
            Получить доступ
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>
    );
  }

  return (
    <div className="container">
      <h2>Работа с таблицами системы</h2>
      {role === "Преподаватель" && (
        <p className="table__paragraph">Преподаватель</p>
      )}
      {role === "Заведующий кафедрой" && (
        <p className="table__paragraph">Заведующий кафедрой</p>
      )}
      {role === "Проректор" && <p className="table__paragraph">Проректор</p>}
      {role === "Ректор" && <p className="table__paragraph">Ректор</p>}
    </div>
  );
};

export default Table;
