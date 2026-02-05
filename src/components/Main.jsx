import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main({ tasks }) {
    return (
        <main className="main">
            <section className="panel">
                <TodoInput />
                <TodoList tasks={tasks} />
            </section>
        </main>
    );
}
