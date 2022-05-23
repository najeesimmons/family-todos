const TodoItem = (props) => {
  return (
    // <h4>{props.text}</h4>
    <div>
      <p>{props.text}</p>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
