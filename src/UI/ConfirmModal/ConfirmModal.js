import style from "./ConfirmModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import ReactDOM from "react-dom";

const ConfirmModal = (props) => {
  const finalDelete = () => {
    props.onDeleteTodos(props.id);
  };

  const confirmDelete = () => {
    props.confirmDelete()
  }

const Backdrop = () => {
  return <div className={style.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>Confirm Deletion</h2>
      </header>
      <div className={style.content}>
        Are you sure you want to delete this item?
      </div>
      <footer className={style.actions}>
        <Button onClick={finalDelete} id={props.id} red>
          Yes
        </Button>
        <Button onClick={confirmDelete} green>
          No
        </Button>
      </footer>
    </Card>
  );
};


  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ConfirmModal;
