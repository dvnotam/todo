import { useState } from 'react'
import './App.scss'

function App() {

    const [ todos , setTodos ] = useState([])
    const [ newTodo, setNewTodo ] = useState('')


  const addTodo = () => {
      if (newTodo.trim() !== '') {
          setTodos([...todos, {text: newTodo, id: Date.now(),}])
          setNewTodo('')
      }
  }

  const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <>
        <div className="input_container">
            <input
                className="input"
                type="text"
                value={newTodo}
                placeholder='Напиши задачу'
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
