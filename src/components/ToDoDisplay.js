import TodoItem from "./TodoItem";
import "./TodoDisplay.css";

const TodoDisplay = (props) => {
  return (
    <ul className="todo-list">
      {props.todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteTodos={props.onDeleteTodos}
        >
          
        </TodoItem>
      ))}
    </ul>
  );
};

export default TodoDisplay;
