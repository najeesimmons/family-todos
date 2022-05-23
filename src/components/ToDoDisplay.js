import TodoItem from "./TodoItem";

const TodoDisplay = (props) => {
  console.log(props.todos);

  return (
    <div>
      <h3>Current Todos</h3>
      <ul>
        {props.todos.map((item) => (
          <TodoItem key={item.id} id={item.id} text={item.text} />
  
        ))}
      </ul>
    </div>
  );
};

export default TodoDisplay;
