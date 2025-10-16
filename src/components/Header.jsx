export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">My To-Do</h1>
      <button className="header__add" type="button" aria-label="Add new task">
        + New Task
      </button>
    </header>
  );
}