import TodoItem from "./TodoItem";
import Card from "./Card/Card";

const TodoDisplay = (props) => {
  console.log(props.todos);

  return (
    <div>
      <Card>
        <h3>Current Todos</h3>

        {props.todos.map((item) => (
          <TodoItem key={item.id} id={item.id} text={item.text} />
        ))}
      </Card>
    </div>
  );
};

export default TodoDisplay;
