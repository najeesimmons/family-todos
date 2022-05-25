import { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";
import StatusChangeButton from "../UI/StatusChangeButton";


const TodoItem = (props) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    console.log(`${isComplete}`);
  }, [isComplete]);

  const handleStatusChange = () => {
    setIsComplete(!isComplete);
  };

  return (
    <div>
      <div className={styles["item-container"]}>
        <div>
          <p className={styles.text}>{props.text}</p>
        </div>
        <div className={styles.icons}> 
          <StatusChangeButton green icon='check' handleStatusChange={handleStatusChange} />
          <StatusChangeButton green={false} icon='close' id={props.id} onDeleteTodos={props.onDeleteTodos} />
          {/* {RenderCircle({className:styles['green-icon']})} */}
          {/* <AiFillCheckCircle onClick={handleOnChange} />
          <AiFillCloseCircle /> */}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
