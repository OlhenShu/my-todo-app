export default function TodoItem({ task, setTasks, removeTask }) {

    function handleToggle() {
        setTasks(prev =>
            prev.map(t =>
                t.id === task.id ? { ...t, done: !t.done } : t
            )
        );
    }

    return (
        <li className={`todo-item ${task.done ? 'is-done' : ''}`}>
            <label className="todo-item__body">
                <input
                    className="todo-item__checkbox"
                    type="checkbox"
                    checked={task.done}
                    onChange={handleToggle}
                />

                <span className="todo-item__title">{task.title}</span>
            </label>

            <span className={`todo-item__tag todo-item__tag--${task.priority}`}>
        {task.priority}
      </span>

            <button
                className="todo-item__remove"
                type="button"
                onClick={() => removeTask(task.id)}
                aria-label="Remove task"
                title="Remove"
            >
                ×
            </button>
        </li>
    );
}
