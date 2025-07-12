import React from 'react'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">📝 To-Do List</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  )
}
