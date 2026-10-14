
import { useTodoStore } from "../store/todoStore";
import TodoItem from "./TodoItem";

export default function TodoList({ filter, onEditTodo }) {
  const todos = useTodoStore((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  if (filteredTodos.length === 0) {
    return (
      <p className="empty-state">
        No tasks to show.
      </p>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
}
