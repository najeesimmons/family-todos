import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import { useState } from "react";

const DUMMY_DATA = [
  { todo: "clean your room", time: new Date() },
  { todo: "walk the dog", time: new Date() },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const handleAddTodo = (newTodo) => {
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })
  }

  return (
    <div className="App">
      <h1>Family Todos</h1>
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoDisplay todos={todos} />
    </div>
  );
}

export default App;
