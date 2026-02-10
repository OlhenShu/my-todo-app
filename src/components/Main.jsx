import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main({ tasks, setTasks }) {
    return (
        <main className="main">
            <section className="panel">
                <TodoInput />
                <TodoList tasks={tasks} setTasks={setTasks} />
            </section>
        </main>
    );
}
