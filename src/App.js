import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import { useState } from "react";

const DUMMY_DATA = [{id: 1, text: "clean your room" }, { id: 2, text: "walk the dog" }];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const handleAddTodos = (enteredText) => {
    setTodos(prevTodos => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ id: Math.random().toString(), text: enteredText,  });
      return updatedTodos;
    });
  };

  return (
    <div className="App">
      <h1>Family Todos</h1>
      <TodoInput onAddTodos={handleAddTodos} />
      <TodoDisplay todos={todos} />
    </div>
  );
}

export default App;
