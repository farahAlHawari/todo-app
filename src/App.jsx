
import { useState } from "react";
import { useTodoStore } from "./store/todoStore";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import { Lottie } from "lottie-react";
import todoAnimation from "./assets/todo-animation.json";

export default function App() {
  const [filter, setFilter] = useState("all");
  const [editingTodo, setEditingTodo] = useState(null);

  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore(
    (state) => state.clearCompleted
  );

  const activeEditingTodo =
    todos.find((todo) => todo.id === editingTodo?.id) ?? null;

  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  function handleFinishEdit() {
    setEditingTodo(null);
  }

  function handleCancelEdit() {
    setEditingTodo(null);
  }

  return (
    <main className="app-container">
      <section className="todo-card">
      <header className="app-header">
  <div className="title-animation">
    <Lottie src={todoAnimation} loop autoplay />
  </div>

  <div className="title-text">
    <h1 className="app-title">Doozy</h1>
    <p className="subtitle">Your personal todo app</p>
  </div>
</header>

        <TodoForm
          editingTodo={activeEditingTodo}
          onCancelEdit={handleCancelEdit}
          onFinishEdit={handleFinishEdit}
        />

        <div className="list-toolbar">
          <span>
            {remaining} {remaining === 1 ? "task" : "tasks"} left
          </span>

          <button
            type="button"
            className="clear-button"
            onClick={clearCompleted}
            disabled={!todos.some((todo) => todo.completed)}
          >
            Clear completed
          </button>
        </div>

        <TodoFilters
          filter={filter}
          onChange={setFilter}
        />

        <TodoList
          filter={filter}
          onEditTodo={setEditingTodo}
        />

        <footer className="app-footer">
        
        </footer>
      </section>
    </main>
  );
}
