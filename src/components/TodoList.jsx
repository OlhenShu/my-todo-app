import TodoItem from './TodoItem.jsx';

export default function TodoList({ tasks, setTasks }) {
  return (
      <ul className="todo-list">
        {tasks.map(task => (
            <TodoItem
                key={task.id}
                task={task}
                setTasks={setTasks}
            />
        ))}
      </ul>
  );
}
