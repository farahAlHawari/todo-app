
const filters = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

export default function TodoFilters({ filter, onChange }) {
  return (
    <div className="todo-filters" aria-label="Filter tasks">
      {filters.map((item) => (
        <button
          key={item.value}
          type="button"
          className={filter === item.value ? "filter active" : "filter"}
          onClick={() => onChange(item.value)}
          aria-pressed={filter === item.value}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
