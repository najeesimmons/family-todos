import TodoItem from "./TodoItem";
import Card from "./Card/Card";

const TodoDisplay = (props) => {
  console.log(props.todos);

  return (
    <div>
      <Card>
        <h3>Current Todos</h3>
        <ul>
          {props.todos.map((item) => (
            <TodoItem key={item.id} id={item.id} text={item.text} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default TodoDisplay;
