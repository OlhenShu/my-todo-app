import {useState} from 'react';

export default function TodoInput({ addTask, setShowInput }) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('low');

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim()) return;

        addTask(title.trim(), priority);

        setTitle('');
        setPriority('low');

        if (setShowInput) {
            setShowInput(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-input">
            <input
                type="text"
                className="todo-input__field"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select
                className="todo-input__select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit" className="todo-input__submit">Add</button>
        </form>
    );
}
