import { useState } from "react";
import Button from "../UI/Button";
import Card from "./Card/Card";


const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value);
    console.log(enteredValue);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onAddTodos(enteredValue);
    setEnteredValue("");
  };
  return (
    <div>
      <Card>
        <h2>Add New Task</h2>
        <form onSubmit={handleFormSubmit}>
          <input onChange={handleInputChange} value={enteredValue}></input>
          <Button/>
        </form>
      </Card>
    </div>
  );
};

export default TodoInput;
