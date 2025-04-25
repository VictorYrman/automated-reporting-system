import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";
import "../assets/styles/scss/table.scss";

const Table = () => {
  const { open }: { open: () => void } = useModal();
  const { role, isAuth }: { role: string | null; isAuth: boolean } = useAuth();

  if (!isAuth) {
    return (
      <>
        <div className="container table__container">
          <h2 className="table__title">
            Работа с <span className="text-secondary">таблицами</span> системы
          </h2>
          <p className="fw-light table__paragraph">
            Чтобы получить доступ к этой странице, войдите в аккаунт, нажав на
            кнопку <span className="fw-semibold">"Войти"</span> в заголовке или
            на кнопку <span className="fw-semibold">"Получить доступ"</span>{" "}
            нижe
          </p>
          <button
            type="button"
            onClick={open}
            className="btn btn--secondary fw-semibold table__btn"
          >
            Получить доступ
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="container">
      {role === "Преподаватель" && (
        <h2 className="table__title">
          Работа с таблицами системы (
          <span className="text-secondary">Преподаватель</span>)
        </h2>
      )}
      {role === "Заведующий кафедрой" && (
        <h2 className="table__title">
          Работа с таблицами системы (
          <span className="text-secondary">Заведующий кафедрой</span>)
        </h2>
      )}
      {role === "Проректор" && (
        <h2 className="table__title">
          Работа с таблицами системы (
          <span className="text-secondary">Проректор</span>)
        </h2>
      )}
      {role === "Ректор" && (
        <h2 className="table__title">
          Работа с таблицами системы (
          <span className="text-secondary">Ректор</span>)
        </h2>
      )}
    </div>
  );
};

export default Table;
