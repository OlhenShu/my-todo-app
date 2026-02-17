import TodoItem from './TodoItem.jsx';

export default function TodoList({ tasks, setTasks, filter }) {
    const visibleTasks = tasks.filter((t) => {
        if (filter === 'active') return !t.done;
        if (filter === 'completed') return t.done;
        return true; // all
    });

    return (
        <>
            {visibleTasks.length === 0 ? (
                <p className="empty-state">No tasks to display</p>
            ) : (
                <ul className="todo-list" role="list">
                    {visibleTasks.map((task) => (
                        <TodoItem key={task.id} task={task} setTasks={setTasks} />
                    ))}
                </ul>
            )}
        </>
    );
}
