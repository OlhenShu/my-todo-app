import {useState} from 'react';

export default function TodoInput({setTasks, setShowInput}) {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('low');

    function handleSubmit(e) {
        e.preventDefault();

        if (!title.trim()) return;

        const newTask = {
            id: Date.now(),
            title: title.trim(),
            done: false,
            priority: priority
        };

        setTasks(prev => [...prev, newTask]);

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
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <button type="submit">Add</button>
        </form>
    );
}
