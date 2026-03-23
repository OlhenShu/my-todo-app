import { useState } from 'react';
import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main({ tasks, filter, setFilter, addTask, updateTask, removeTask, showInput, setShowInput, loading, error }) {
    const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
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

                {showInput && <TodoInput addTask={addTask} setShowInput={setShowInput} />}

                {loading && <p className="status-msg">Loading tasks from API...</p>}
                {error && <p className="status-msg status-msg--error">Error: {error}</p>}

                <TodoList
                    key={`${filter}-${viewMode}`}
                    tasks={tasks}
                    filter={filter}
                    updateTask={updateTask}
                    removeTask={removeTask}
                    viewMode={viewMode}
                />
            </section>
        </main>
    );
}
