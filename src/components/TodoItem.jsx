export default function TodoItem({ task, setTasks, removeTask }) {

    function handleToggle() {
        setTasks(prev =>
            prev.map(t =>
                t.id === task.id ? { ...t, done: !t.done } : t
            )
        );
    }

    function handlePriorityChange(e) {
        const newPriority = e.target.value;
        setTasks(prev =>
            prev.map(t =>
                t.id === task.id ? { ...t, priority: newPriority } : t
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

            <select
                className={`todo-item__priority todo-item__priority--${task.priority}`}
                value={task.priority}
                onChange={handlePriorityChange}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

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
