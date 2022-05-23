import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/ToDoDisplay";
import useState from "react";

const DUMMY_DATA = [
  { todo: "clean your room", time: new Date() },
  { todo: "walk the dog", time: new Date() },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  return (
    <div className="App">
      <h1>Family Todos</h1>
      <TodoInput />
      <TodoDisplay todos={todos} />
    </div>
  );
}

export default App;
