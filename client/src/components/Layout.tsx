import { Outlet } from "react-router-dom";
import { useModal } from "../contexts/ModalContext";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import "../assets/styles/scss/layout.scss";

const Layout = () => {
  const { isModalOpen }: { isModalOpen: boolean } = useModal();

  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} />
    </div>
  );
};

export default Layout;
