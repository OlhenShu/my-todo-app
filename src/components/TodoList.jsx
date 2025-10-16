import TodoItem from './TodoItem.jsx';

export default function TodoList() {
  // Поки що — статичні елементи
  const demo = [
    { id: 1, title: 'Learn React basics', done: false, priority: 'high' },
    { id: 2, title: 'Build To-Do layout', done: true, priority: 'low'  },
  ];

  return (
    <ul className="todo-list" role="list">
      {demo.map((t) => (
        <TodoItem key={t.id} title={t.title} done={t.done} priority={t.priority} />
      ))}
    </ul>
  );
}