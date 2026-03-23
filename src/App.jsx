import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import TodoDetail from './components/TodoDetail.jsx';
import NotFound from './components/NotFound.jsx';
import './App.css';

export default function App() {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem('app-data');
        if (!stored) return [];
        try {
            const data = JSON.parse(stored);
            if (!Array.isArray(data)) return [];

            // Міграція: гарантуємо, що у таски є булеве поле 'done'
            return data.map(t => {
                if (!t || typeof t !== 'object') return t;
                
                let done = t.done;
                
                // Якщо немає done, але є completed (стара структура)
                if (Object.prototype.hasOwnProperty.call(t, 'completed') && !Object.prototype.hasOwnProperty.call(t, 'done')) {
                    done = t.completed;
                }
                
                // Якщо done не булеве або undefined, приводимо до boolean
                return { ...t, done: !!done };
            });
        } catch (e) {
            console.error('Error parsing stored tasks:', e);
            return [];
        }
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://dummyjson.com/todos?limit=10');
                if (!response.ok) throw new Error(`Failed to fetch tasks: ${response.status}`);
                
                const data = await response.json();
                
                if (!data || !Array.isArray(data.todos)) {
                    throw new Error('Invalid data format from API');
                }

                // Трансформуємо дані з DummyJSON під нашу структуру
                const apiTasks = data.todos.map(t => ({
                    id: String(t.id),
                    title: t.todo || 'Untitled task', // назва задачі
                    done: !!t.completed,      // completed -> done
                    priority: t.completed ? 'low' : 'high' // логіка пріоритету
                }));

                setTasks(prev => {
                    // Ми об'єднуємо таски з API та локальні, уникаючи дублікатів за назвою або ID
                    const existingTitles = new Set(prev.map(t => t.title.toLowerCase()));
                    const newTasks = apiTasks.filter(t => !existingTitles.has(t.title.toLowerCase()));
                    
                    return [...prev, ...newTasks];
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchTasks();
    }, []);

    useEffect(() => {
        localStorage.setItem('app-data', JSON.stringify(tasks));
    }, [tasks]);

    const [filter, setFilter] = useState('all'); // all | active | completed
    const [showInput, setShowInput] = useState(false);

    // Додавання задачі (POST)
    async function addTask(title, priority) {
        console.log('addTask called with:', { title, priority });
        const newTask = {
            todo: title,
            completed: false,
            userId: 5, // обов'язкове поле для DummyJSON
        };

        try {
            const response = await fetch('https://dummyjson.com/todos/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask)
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `API error: ${response.status}`);
            }

            const data = await response.json();
            console.log('API response for addTask:', data);
            
            // Навіть якщо API повертає об'єкт, ми додаємо свої поля для нашої структури
            const mappedTask = {
                id: `${data.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`, // уникаємо дублікатів ID
                title: data.todo || title,
                done: !!data.completed,
                priority: priority || 'low'
            };

            setTasks(prev => [mappedTask, ...prev]);
        } catch (err) {
            console.error('Error adding task:', err);
            // Фолбек: додаємо локально, якщо API впало
            const localTask = {
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                title,
                done: false,
                priority: priority || 'low'
            };
            setTasks(prev => [localTask, ...prev]);
        }
    }

    // Оновлення задачі (PUT/PATCH)
    async function updateTask(id, updates) {
        // Обов'язково перетворюємо done на boolean, якщо він оновлюється
        const safeUpdates = { ...updates };
        if (Object.prototype.hasOwnProperty.call(safeUpdates, 'done')) {
            safeUpdates.done = !!safeUpdates.done;
        }

        // Оновлюємо локально для миттєвого відгуку
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...safeUpdates } : t));

        // Якщо це API-задача (числове ID або ID з дефісом від DummyJSON), пробуємо відправити запит
        const apiId = String(id).split('-')[0];
        if (!isNaN(apiId)) {
            try {
                const body = {};
                if (Object.prototype.hasOwnProperty.call(updates, 'done')) body.completed = updates.done;
                if (Object.prototype.hasOwnProperty.call(updates, 'title')) body.todo = updates.title;

                if (Object.keys(body).length > 0) {
                    const response = await fetch(`https://dummyjson.com/todos/${apiId}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(body)
                    });
                    if (!response.ok) {
                        console.warn(`Failed to update task on API (ID: ${apiId}). Status: ${response.status}`);
                    }
                }
            } catch (err) {
                console.error('Error updating task on API:', err);
            }
        }
    }

    // Видалення задачі (DELETE)
    async function removeTask(id) {
        console.log('removeTask called for ID:', id);
        // Видаляємо локально відразу для кращого UX
        setTasks(prev => prev.filter(t => t.id !== id));

        // Якщо це API-задача, відправляємо DELETE запит
        const apiId = String(id).split('-')[0];
        if (!isNaN(apiId)) {
            try {
                const response = await fetch(`https://dummyjson.com/todos/${apiId}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    console.warn(`Failed to delete task from API (ID: ${apiId}). Status: ${response.status}`);
                } else {
                    console.log('API DELETE request successful for:', apiId);
                }
            } catch (err) {
                console.error('Error deleting task from API:', err);
            }
        }
    }

    return (
        <div className="app">
            <Header title="My To-Do App" />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={
                    <Main
                        tasks={tasks}
                        filter={filter}
                        setFilter={setFilter}
                        addTask={addTask}
                        updateTask={updateTask}
                        removeTask={removeTask}
                        showInput={showInput}
                        setShowInput={setShowInput}
                        loading={loading}
                        error={error}
                    />
                } />
                <Route path="/tasks/:id" element={<TodoDetail tasks={tasks} loading={loading} />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Footer activeCount={tasks.filter(t => !t.done).length} />
        </div>
    );
}
