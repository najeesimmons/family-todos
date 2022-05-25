import { useEffect, useState } from "react";
import styles from "./TodoItem.module.css";
import CheckButton from "../UI/CheckButton";


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
          <CheckButton green icon='check' handleStatusChange={handleStatusChange} />
          <CheckButton green={false} icon='close' />
          {/* {RenderCircle({className:styles['green-icon']})} */}
          {/* <AiFillCheckCircle onClick={handleOnChange} />
          <AiFillCloseCircle /> */}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
