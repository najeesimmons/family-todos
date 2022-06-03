import TodoItem from "../TodoItem/TodoItem";
import "./TodoDisplay.css";

const TodoDisplay = (props) => {
  return (
    <div>
      <ul className="todo-list">
        {props.todos.map((item) => (
          <TodoItem key={item.id} id={item.id} text={item.text} onDeleteTodos={props.onDeleteTodos}> </TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoDisplay;
