import TodoItem from './TodoItem.jsx';

export default function TodoList({ tasks }) {
  return (
      <ul className="todo-list">
        {tasks.map(task => (
            <TodoItem
                key={task.id}
                title={task.title}
                done={task.done}
                priority={task.priority}
            />
        ))}
      </ul>
  );
}
