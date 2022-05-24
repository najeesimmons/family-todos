import { useEffect, useState } from "react";
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log(`${isChecked}`);
  }, [isChecked]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className={styles['itemcontainer']}>
        <p>{props.text}</p>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
        ></input>
      </div>
      <h5>Test:Above checkbox is {isChecked ? "checked" : "un-checked"}.</h5>
    </div>
  );
};

export default TodoItem;
