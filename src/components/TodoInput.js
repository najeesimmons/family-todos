import { useState } from "react";
import Button from "../UI/Button";

const TodoInput = (props) => {

  const [enteredValue, setEnteredValue] = useState("")

  const handleInputChange = (event) => {
      setEnteredValue(event.target.value)
      console.log(enteredValue)
  }
  const handleFormSubmit = event => {
      event.preventDefault()
      props.onAddTodos(enteredValue)
      setEnteredValue('')
  }
  return (
    <div>
      <h2>New Task</h2>
      <form onSubmit={handleFormSubmit}>
          <input onChange={handleInputChange} ></input>
          <Button />
      </form>
    </div>
  );
};

export default TodoInput;
