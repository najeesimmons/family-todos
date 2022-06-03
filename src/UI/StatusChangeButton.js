import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "../components/TodoItem/TodoItem.module.css";

const StatusChangeButton = (props) => {
  const isCheck = props.icon === "check";
  const isClose = props.icon === "close";
  let className = props.green ? styles["green-icon"] : styles["red-icon"];

  const confirmDelete = () => {
    props.confirmDelete()
  }

  const deleteHandler = () => {
    props.onDeleteTodos(props.id);
  }

  return (
    <div className={className}>
      {isCheck && <AiFillCheckCircle onClick={props.handleStatusChange} />}
      {isClose && <AiFillCloseCircle onClick={confirmDelete}  />}
    </div>
  );
};

export default StatusChangeButton;
