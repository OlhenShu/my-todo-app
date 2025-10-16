export default function TodoItem({ title, done, priority }) {
  return (
    <li className={`todo-item ${done ? 'is-done' : ''}`}>
      <label className="todo-item__body">
        <input
          className="todo-item__checkbox"
          type="checkbox"
          defaultChecked={done}
          aria-label={`Mark "${title}" as done`}
        />
        <span className="todo-item__title">{title}</span>
      </label>
      <span className={`todo-item__tag todo-item__tag--${priority}`}>
        {priority}
      </span>
      <button className="todo-item__remove" type="button" aria-label="Remove task">×</button>
    </li>
  );
}