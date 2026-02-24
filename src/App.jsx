import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn React basics', done: false, priority: 'high' },
        { id: 2, title: 'Build To-Do layout', done: true, priority: 'low' },
    ]);

    const [filter, setFilter] = useState('all'); // all | active | completed
    const [showInput, setShowInput] = useState(false);

    function removeTask(id) {
    const task = tasks.find(t => t.id === id);

    if (!window.confirm(`Delete "${task.title}"?`)) return;

    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="app">
      <Header title="My To-Do App" onAddClick={() => setShowInput(prev => !prev)} />
      <Main
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        setFilter={setFilter}
        removeTask={removeTask}
        showInput={showInput}
        setShowInput={setShowInput}
      />
      <Footer />
    </div>
  );
}
