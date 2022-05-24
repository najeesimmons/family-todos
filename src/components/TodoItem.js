const TodoItem = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <input type="checkbox"></input>
    </div>
  );
};

export default TodoItem;
