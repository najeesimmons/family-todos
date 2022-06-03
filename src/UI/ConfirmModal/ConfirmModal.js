import style from "./ConfirmModal.module.css";
import Card from "../Card/Card";

const ConfirmModal = (props) => {
  const finalDelete = () => {
    props.onDeleteTodos(props.id);
  };
  return (
    <div>
      <div className={style.backdrop} onClick={props.confirmDelete}>
        <Card className={style.modal}>
          <header className={style.header}>
            <h2>Confirm Deletion</h2>
          </header>
          <div className={style.content}>
            Are you sure you want to delete this item?
          </div>
          <footer className={style.actions}>
            <button onClick={finalDelete} id={props.id}>
              Yes
            </button>
            <button onClick={props.confirmDelete}>No</button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmModal;
