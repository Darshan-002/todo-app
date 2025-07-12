import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

export default function App() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    localStorage.setItem('darkMode', darkMode)
  }, [todos, darkMode])

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-all`}>
      <div className="max-w-xl mx-auto p-6">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <TodoForm addTodo={addTodo} />
        <div className="space-y-3 mt-5">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </div>
  )
}
