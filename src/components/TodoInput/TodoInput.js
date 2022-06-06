import { useState, useRef } from "react";
import Button from "../../UI/Button/Button";
import styles from "./TodoInput.module.css";

const TodoInput = (props) => {
  const todoInputField = useRef();

  const [isValid, setisValid] = useState(true);

  const handleFormSubmit = (event) => {
    const enteredTodo = todoInputField.current.value;
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      setisValid(false);
      return;
    }
    setisValid(true)
    props.onAddTodos(enteredTodo);
    todoInputField.current.value = "";
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>New Task</label>
        <input id="todo" ref={todoInputField}></input>
      </div>
      <Button type="submit" green>
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
