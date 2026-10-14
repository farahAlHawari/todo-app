
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],

      addTodo: (title) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              title: title,
              completed: false,
            },
          ],
        })),

      editTodo: (id, newTitle) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, title: newTitle }
              : todo
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter(
            (todo) => todo.id !== id
          ),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        })),

      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter(
            (todo) => !todo.completed
          ),
        })),
    }),
    {
      name: "my-todo-list",
    }
  )
);
