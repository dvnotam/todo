import { useState } from 'react'
import './App.css'

function App() {

    const [ todos, setTodos ] = useState([])
    const [ newTodo, setNewTodo ] = useState('')

  const addTodo = () => {
      setTodos([...todos, {text: newTodo, id: setTodos.length + 1,}])
      setNewTodo('')
  }

  return (
    <>
        <input
            type="text"
            value={newTodo}
            placeholder='Напиши задачу'
            onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Добавь задачу</button>

        <ul>
            {todos.map(todo => (
                <li>
                    {todo.text}
                </li>
            ))}
        </ul>
    </>
  )
}

export default App
