
import { useTodoStore } from "../store/todoStore";

export default function TodoItem({ todo, onEditTodo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span>{todo.title}</span>
      </label>

      <div className="task-buttons">
        <button
          type="button"
          className="edit-button"
          onClick={() => onEditTodo(todo)}
          aria-label={`Edit ${todo.title}`}
        >
          Edit
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => deleteTodo(todo.id)}
          aria-label={`Delete ${todo.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
