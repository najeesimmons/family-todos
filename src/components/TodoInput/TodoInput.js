import { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./TodoInput.module.css";

const INITIAL_STATE = {
  error: false,
  value: "",
  errorMessage: "",
};

const TodoInput = (props) => {


  const [inputField, setInputField] = useState(INITIAL_STATE);

  const handleChange = (event) => {
    setInputField((prevState) => ({
      ...prevState,
      value: event.target.value,
    }));
    checkError(event.target.value);
  };

  const checkError = (value) => {
    if (value.trim().length > 0) {
      setInputField((prevState) => {
        return {
          ...prevState,
          error: false,
          errorMessage: "",
        };
      });
    } else {
      setInputField((prevState) => {
        return {
          ...prevState,
          error: true,
          errorMessage: "Task must be more than zero characters.",
        };
      });
    }
  };

  const handleFormSubmit = (event) => {
    const enteredTodo = inputField.value;
    event.preventDefault();
    if (enteredTodo.trim().length === 0) {
      setInputField((prevState) => {
        return {
          ...prevState,
          error: true,
          errorMessage: "Task must be more than zero characters.",
        };
      });
      return;
    }
    props.onAddTodos(enteredTodo);
    setInputField(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={`${styles["form-control"]} ${
          inputField.error && styles.invalid
        }`}
      >
        <label>New Task</label>
        <input id="todo" value={inputField.value} onChange={handleChange} />
        {inputField.error && <p>{inputField.errorMessage}</p>}
      </div>
      <Button type="submit" green >
        Add
      </Button>
    </form>
  );
};

export default TodoInput;
