import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./TodoInput.module.css";

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setisValid] = useState(true);

  const handleInputChange = (event) => {
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    props.onAddTodos(enteredValue);
    setEnteredValue("");
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
        <label>New Task</label>
        <input onChange={handleInputChange} value={enteredValue}></input>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoInput;
