import TodoItem from './TodoItem.jsx';

export default function TodoList({ tasks, setTasks, filter, removeTask }) {
    const visibleTasks = tasks.filter((t) => {
        if (filter === 'active') return !t.done;
        if (filter === 'completed') return t.done;
        return true; // all
    });

    const getEmptyMessage = () => {
        if (filter === 'active') return 'No active tasks. Good job!';
        if (filter === 'completed') return 'No completed tasks yet.';
        return 'Your to-do list is empty.';
    };

    return (
        <>
            {visibleTasks.length === 0 ? (
                <p className="empty-state">{getEmptyMessage()}</p>
            ) : (
                <ul className="todo-list" role="list">
                    {visibleTasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                            setTasks={setTasks}
                            removeTask={removeTask}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}
