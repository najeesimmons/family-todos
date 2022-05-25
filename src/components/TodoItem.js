import { useEffect, useState } from "react";
import styles from './TodoItem.module.css';
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle} from 'react-icons/ai'

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
      <div className={styles.itemcontainer}>
        <p className={styles.title}>{props.text}</p>
        <AiFillCheckCircle />
        <AiFillCloseCircle />
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
