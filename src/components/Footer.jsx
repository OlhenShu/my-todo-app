import { useTodo } from '../contexts/TodoContext.jsx';

export default function Footer() {
  const { tasks } = useTodo();
  const activeCount = tasks.filter(t => !t.done).length;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__stats">Tasks left: {activeCount}</p>
        <small>© {year} My To-Do - demo application for practical tasks</small>
      </div>
    </footer>
  );
}
