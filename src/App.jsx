import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
    const tasks = [
        { id: 1, title: 'Learn React basics', done: false, priority: 'high' },
        { id: 2, title: 'Build To-Do layout', done: true, priority: 'low' }
    ];

    return (
        <div className="app">
            <Header title="My To-Do App" />
            <Main tasks={tasks} />
            <Footer />
        </div>
    );
}



