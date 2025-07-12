import React from 'react'

export default function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div
      className={`flex justify-between items-center p-3 rounded shadow transition
        ${todo.completed ? 'bg-green-200 dark:bg-green-800 line-through opacity-70' : 'bg-white dark:bg-gray-800'}
        text-gray-900 dark:text-white`}
    >
      <span
        onClick={() => toggleComplete(todo.id)}
        className="cursor-pointer flex-1"
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-600 hover:text-red-800 transition"
      >
        ❌
      </button>
    </div>
  )
}
