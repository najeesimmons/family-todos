import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoDisplay from "./components/TodoDisplay";
import { useState } from "react";

const DUMMY_DATA = [
  { id: 1, text: "clean your room" },
  { id: 2, text: "walk the dog" },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_DATA);

  const handleAddTodos = (enteredText) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.unshift({ id: Math.random().toString(), text: enteredText });
      return updatedTodos;
    });
  };

  const handleRemoveTodos = (todoId) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== todoId);
      return updatedTodos;
    });
  };

  let todoList = <p>There are no tasks to display.</p>;

  if (todos.length > 0) {
    todoList = <TodoDisplay todos={todos} onDeleteTodos={handleRemoveTodos} />;
  }

  return (
    <>
    <h1>Team To-do List</h1>
    <div>
      <section id="todo-form">
        <TodoInput onAddTodos={handleAddTodos} />
      </section>
      <section id="todos">{todoList}</section>
    </div>
    </>
  );
}

export default App;
