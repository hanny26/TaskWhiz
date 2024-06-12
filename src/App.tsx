import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app min-h-screen  p-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">To-Do List</h1>
      <div className="max-w-md mx-auto mt-4 bg-white p-4 rounded-lg shadow-md">
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
