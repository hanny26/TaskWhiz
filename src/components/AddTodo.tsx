import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
