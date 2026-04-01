import { useParams, Link } from 'react-router-dom';
import { useTodo } from '../contexts/TodoContext.jsx';

export default function TodoDetail() {
    const { id } = useParams();
    const { tasks, loading } = useTodo();
    
    if (loading) return <div className="main"><section className="panel"><p className="status-msg">Loading task details...</p></section></div>;
    
    const task = tasks.find(t => String(t.id) === id);

    if (!task) {
        return (
            <main className="main">
                <section className="panel">
                    <div className="not-found">
                        <h2>Task Not Found</h2>
                        <p>Sorry, the task with ID <strong>{id}</strong> does not exist in your list.</p>
                        <Link to="/tasks" className="back-link">← Return to List</Link>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="main">
            <section className="panel">
                <div className="todo-detail">
                    <Link to="/tasks" className="back-link">← Back</Link>
                    <div className="todo-detail__card">
                        <div className="todo-detail__header">
                            <span className={`todo-item__priority todo-item__priority--${task.priority || 'low'}`}>
                                {task.priority}
                            </span>
                            <span className="todo-detail__id">ID: {task.id}</span>
                        </div>
                        <h2 className="todo-detail__title">{task.title}</h2>
                        <div className="todo-detail__status-badge">
                            <span className={`status-dot ${task.done ? 'is-done' : ''}`}></span>
                            {task.done ? 'Completed' : 'In Progress'}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
