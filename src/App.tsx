import React, { useState } from 'react'
import './App.scss'

interface Todo {
    text: string;
    id: number
}
function App() {

    const [ todos , setTodos ] = useState<Todo[]>([])
    const [ newTodo, setNewTodo ] = useState<string>('')

  const addTodo = () => {
      if (newTodo.trim() !== '') {
          setTodos([...todos, {text: newTodo, id: Date.now(),}])
          setNewTodo('')
      }
  }

    const kayDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

  const deleteTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
        <h1>Мой список задач.</h1>
        <div className="input_container">
            <input
                className="input"
                type="text"
                value={newTodo}
                placeholder='Напиши задачу'
                onKeyDown={kayDownSubmit}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button className="button_add-todo" onClick={addTodo}>Добавь задачу</button>
        </div>

        <ul className="todos_list">
            {todos.map(todo => (
                <li className="todo">
                    {todo.text}
                    <button className="button_delete-todo" onClick={() => deleteTodo(todo.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default App
