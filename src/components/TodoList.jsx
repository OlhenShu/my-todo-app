import TodoItem from './TodoItem.jsx';
import { useTodo } from '../contexts/TodoContext.jsx';
import { useSettings } from '../contexts/SettingsContext.jsx';

export default function TodoList() {
    const { tasks } = useTodo();
    const { filter, viewMode } = useSettings();

    const visibleTasks = tasks.filter((t) => {
        if (filter === 'active') return !t.done;
        if (filter === 'completed') return !!t.done;
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
                <ul className={`todo-list todo-list--${viewMode || 'list'}`} role="list">
                    {visibleTasks.map((task) => (
                        <TodoItem
                            key={task.id}
                            task={task}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}
