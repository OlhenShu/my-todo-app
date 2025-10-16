export default function TodoInput() {
  return (
    <form className="todo-input" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="new-task" className="todo-input__label">New task</label>
      <input
        id="new-task"
        className="todo-input__field"
        type="text"
        placeholder="Type a task..."
        aria-label="Task title"
      />
      <button className="todo-input__submit" type="submit">Add</button>
    </form>
  );
}