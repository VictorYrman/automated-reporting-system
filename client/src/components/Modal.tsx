import "../assets/styles/scss/modal.scss";
import AuthForm from "./AuthForm";
import Close from "../assets/images/icons/close.svg";
import { useModal } from "../contexts/ModalContext";

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  const { close }: { close: () => void } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="container modal__container">
        <button type="button" onClick={close} className="modal__btn">
          <img src={Close} alt="Close Icon" className="modal__img" />
        </button>
        <h2 className="modal__title">Вход в систему</h2>
        <AuthForm onSuccess={close} />
      </div>
    </div>
  );
};

export default Modal;
