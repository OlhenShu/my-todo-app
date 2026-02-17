import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main({ tasks, setTasks, filter, setFilter }) {
    return (
        <main className="main">
            <section className="panel">
                <TodoInput />

                <div className="filters">
                    <button
                        type="button"
                        className={filter === 'all' ? 'is-active' : ''}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>

                    <button
                        type="button"
                        className={filter === 'active' ? 'is-active' : ''}
                        onClick={() => setFilter('active')}
                    >
                        Active
                    </button>

                    <button
                        type="button"
                        className={filter === 'completed' ? 'is-active' : ''}
                        onClick={() => setFilter('completed')}
                    >
                        Completed
                    </button>
                </div>

                <TodoList tasks={tasks} setTasks={setTasks} filter={filter} />
            </section>
        </main>
    );
}
