import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <span
        className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="px-2 py-1 ml-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
