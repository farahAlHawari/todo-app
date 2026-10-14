
import { useState, useEffect } from "react";
import { useTodoStore } from "../store/todoStore";

export default function TodoForm({
  editingTodo,
  onCancelEdit,
  onFinishEdit,
}) {
  const [title, setTitle] = useState("");

  const addTodo = useTodoStore((state) => state.addTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  useEffect(() => {
    if (editingTodo) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(editingTodo.title);
    } else {
      setTitle("");
    }
  }, [editingTodo]);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    if (editingTodo) {
      editTodo(editingTodo.id, trimmedTitle);
      onFinishEdit();
    } else {
      addTodo(trimmedTitle);
    }

    setTitle("");
  }

  function handleCancel() {
    setTitle("");
    onCancelEdit();
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={
          editingTodo
            ? "Edit your task..."
            : "What do you need to do?"
        }
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        aria-label={editingTodo ? "Edit task" : "New task"}
        maxLength={150}
      />

      <button type="submit">
        {editingTodo ? "Save Changes" : "Add Task"}
      </button>

      {editingTodo && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  );
}
