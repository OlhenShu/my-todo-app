import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main({ tasks, filter, setFilter, addTask, updateTask, removeTask, showInput, setShowInput, loading, error }) {
    return (
        <main className="main">
            <section className="panel">
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

                {showInput && <TodoInput addTask={addTask} setShowInput={setShowInput} />}

                {loading && <p className="status-msg">Loading tasks from API...</p>}
                {error && <p className="status-msg status-msg--error">Error: {error}</p>}

                <TodoList
                    key={filter}
                    tasks={tasks}
                    filter={filter}
                    updateTask={updateTask}
                    removeTask={removeTask}
                />
            </section>
        </main>
    );
}
