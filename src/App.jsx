import { useState } from 'react';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Learn React basics', done: false, priority: 'high' },
        { id: 2, title: 'Build To-Do layout', done: true, priority: 'low' }
    ]);

    return (
        <div className="app">
            <Header title="My To-Do App" />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer />
        </div>
    );
}



