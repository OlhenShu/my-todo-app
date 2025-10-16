import TodoInput from './TodoInput.jsx';
import TodoList from './TodoList.jsx';

export default function Main() {
  return (
    <main className="main">
      <section className="panel">
        <h2 className="visually-hidden">Tasks</h2>
        <TodoInput />
        <TodoList />
      </section>
    </main>
  );
}