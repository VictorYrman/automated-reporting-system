import "../assets/styles/scss/modal.scss";
import AuthForm from "./AuthForm";
import Close from "../assets/images/icons/close.svg";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="container modal__container">
        <button type="button" onClick={onClose} className="modal__btn">
          <img src={Close} alt="Close Icon" className="modal__img" />
        </button>
        <h2 className="modal__title">Вход в систему</h2>
        <AuthForm onSuccess={onClose} />
      </div>
    </div>
  );
};

export default Modal;
