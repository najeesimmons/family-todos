import { useState } from "react";
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";
import styles from "./TodoItem.module.css";
import StatusChangeButton from "../../UI/StatusChangeButton";

const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);
  const [confirming, setConfirming] = useState(false);

  const handleStatusChange = () => {
    setIsComplete((prevStatus) => !prevStatus);
  };

  const confirmDelete = () => {
    setConfirming((prevStatus) => !prevStatus);
  };


  return (
    <>
      {confirming && (
        <ConfirmModal
          onDeleteTodos={props.onDeleteTodos}
          id={props.id}
          confirmDelete={confirmDelete}
          
        />
      )}
      <div className={styles["item-container"]}>
        <div>
          <p className={`${styles.text} ${isComplete && styles.complete}`}>
            {props.text}
          </p>
        </div>
        <div className={styles.icons}>
          <StatusChangeButton
            green
            icon="check"
            handleStatusChange={handleStatusChange}
          />
          <StatusChangeButton
            green={false}
            icon="close"
            confirmDelete={confirmDelete}
          />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
