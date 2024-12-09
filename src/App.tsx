import React, { useRef, useState } from 'react'
import './App.scss'

interface Todo {
    text: string;
    id: number
}

function App() {

  const [ todos , setTodos ] = useState<Todo[]>([])
  const newTodo = useRef<HTMLInputElement>( null)

  const addTodo = () => {
    if (newTodo.current) {
      setTodos([...todos, {text: newTodo.current.value, id: Date.now(),}])
      newTodo.current.value = ''
    }
  }

  const kayDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTodo.current) {
      addTodo()
      newTodo.current.value = ''
    }
  }

  const deleteTodo = (id: number) => {
      setTodos(todos.filter((todo: any) => todo.id !== id))
  }

  // @ts-ignore
  return (
    <>
        <h1>Мой список задач.</h1>
        <div className="input_container">
            <input
                className="input"
                type="text"
                ref={newTodo}
                placeholder='Напиши задачу'
                onKeyDown={kayDownSubmit}
            />
            <button className="button_add-todo" onClick={addTodo}>Добавь задачу</button>
        </div>

        <ul className="todos_list">
            {todos.map((todo: any) => (
                <li className="todo" >
                    {todo.text}
                    <button className="button_delete-todo" onClick={() => deleteTodo(todo.id)}>Удалить</button>
                </li>
            ))}
        </ul>
    </>
  )
}

export default App
