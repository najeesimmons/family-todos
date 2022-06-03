import style from "./ConfirmModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

const ConfirmModal = (props) => {
  const finalDelete = () => {
    props.onDeleteTodos(props.id);
  };

  return (
    <div>
      <div className={style.backdrop}>
        <Card className={style.modal}>
          <header className={style.header}>
            <h2>Confirm Deletion</h2>
          </header>
          <div className={style.content}>
            Are you sure you want to delete this item?
          </div>
          <footer className={style.actions}>
            <Button onClick={finalDelete} id={props.id} green={false}>
              Yes
            </Button>
            <Button onClick={props.confirmDelete} green>
              No
            </Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmModal;
