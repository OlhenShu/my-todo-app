import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';
import { useTodo } from '../contexts/TodoContext.jsx';
import { useSettings } from '../contexts/SettingsContext.jsx';

export default function Main() {
    const { tasks, loading, error } = useTodo();
    const { filter, setFilter, viewMode, setViewMode, showInput, setShowInput } = useSettings();

    return (
        <main className="main">
            <section className="panel">
                <div className="main__header">
                    <div className="main__header-left">
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
                        <div className="view-switcher">
                            <button
                                type="button"
                                className={viewMode === 'list' ? 'is-active' : ''}
                                onClick={() => setViewMode('list')}
                                title="List view"
                            >
                                ☰
                            </button>
                            <button
                                type="button"
                                className={viewMode === 'grid' ? 'is-active' : ''}
                                onClick={() => setViewMode('grid')}
                                title="Grid view"
                            >
                                ⊞
                            </button>
                        </div>
                    </div>

                    <button
                        className="btn-add-task"
                        type="button"
                        aria-label="Add new task"
                        onClick={() => setShowInput(prev => !prev)}
                    >
                        {showInput ? '✕ Close' : '+ New Task'}
                    </button>
                </div>

                {showInput && <TodoInput />}

                {loading && <p className="status-msg">Loading tasks from API...</p>}
                {error && <p className="status-msg status-msg--error">Error: {error}</p>}

                <TodoList />
            </section>
        </main>
    );
}
