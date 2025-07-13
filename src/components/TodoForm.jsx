import React, { useState } from 'react';

export default function TodoForm({ addTodo, darkMode }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
      <input
        type="text"
        className={`flex-grow p-2 rounded border outline-none transition-all
          ${darkMode
            ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400'
            : 'bg-white text-black border-gray-300 placeholder-gray-500'}`}
        placeholder="Enter a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded font-medium transition-all
          ${darkMode
            ? 'bg-blue-600 text-white hover:bg-blue-500'
            : 'bg-blue-500 text-white hover:bg-blue-600'}`}
      >
        Add
      </button>
    </form>
  );
}
