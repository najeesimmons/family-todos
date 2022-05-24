import { useEffect, useState } from "react";

const TodoItem = (props) => {

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    console.log(`${isChecked}`)
  }, [isChecked])

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <div>
      <p>{props.text}</p>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange}></input>
      <h5>Test:Above checkbox is {isChecked ? "checked" : "un-checked"}.</h5>
    </div>
  );
};

export default TodoItem;
