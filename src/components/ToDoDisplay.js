import TodoItem from "./TodoItem";
import Card from "./Card/Card";

const TodoDisplay = (props) => {
  return (
    <div>
      <Card>
        <h3>Current Todos</h3>
        {props.todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            text={item.text}
            onDeleteTodos={props.onDeleteTodos}
          />
        ))}
      </Card>
    </div>
  );
};

export default TodoDisplay;
