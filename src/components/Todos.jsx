import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleUpdateTodo = (id) => {
    const newText = prompt('Enter new text for the todo:')
    if (newText) {
      dispatch(updateTodo({ id, text: newText }))
    }
  }

  return (
    <>
      <div className='py-5'>Todos List-Items</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='flex justify-between items-center border-b py-2'>
            <span className='text-left'>{todo.text}</span>
            <div className='flex space-x-2'>
              <button 
                className='px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600' 
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                ⌫
              </button>
              <button 
                className='px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600' 
                onClick={() => handleUpdateTodo(todo.id)}
              >
                ✏️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}  

export default Todos
