import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TodoItem({ task, updateTask, removeTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(task.title);

    // Синхронізація локального стану редагування при зміні таски ззовні
    useEffect(() => {
        setEditText(task.title);
    }, [task.title]);

    function handleToggle() {
        updateTask(task.id, { done: !task.done });
    }

    function handlePriorityChange(e) {
        updateTask(task.id, { priority: e.target.value });
    }

    function handleSave() {
        if (editText.trim() && editText !== task.title) {
            updateTask(task.id, { title: editText.trim() });
        }
        setIsEditing(false);
    }

    function handleCancel() {
        setEditText(task.title);
        setIsEditing(false);
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') handleSave();
        if (e.key === 'Escape') handleCancel();
    }

    return (
        <li className={`todo-item ${task.done ? 'is-done' : ''} ${isEditing ? 'is-editing' : ''}`}>
            <div className="todo-item__body">
                {!isEditing && (
                    <input
                        className="todo-item__checkbox"
                        type="checkbox"
                        checked={task.done}
                        onChange={handleToggle}
                    />
                )}

                {isEditing ? (
                    <input
                        className="todo-item__edit-field"
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    <Link to={`/tasks/${task.id}`} className="todo-item__title" title="View details">
                        {task.title}
                    </Link>
                )}
            </div>

            <div className="todo-item__actions">
                <select
                    className={`todo-item__priority todo-item__priority--${task.priority || 'low'}`}
                    value={task.priority || 'low'}
                    onChange={handlePriorityChange}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                {isEditing ? (
                    <>
                        <button className="todo-item__btn todo-item__btn--save" onClick={handleSave} title="Save">
                            ✓
                        </button>
                        <button className="todo-item__btn todo-item__btn--cancel" onClick={handleCancel} title="Cancel">
                            ×
                        </button>
                    </>
                ) : (
                    <>
                        <button className="todo-item__btn todo-item__btn--edit" onClick={() => setIsEditing(true)} title="Edit">
                            ✎
                        </button>
                        <button
                            className="todo-item__btn todo-item__btn--remove"
                            type="button"
                            onClick={() => removeTask(task.id)}
                            aria-label="Remove task"
                            title="Remove"
                        >
                            ×
                        </button>
                    </>
                )}
            </div>
        </li>
    );
}
