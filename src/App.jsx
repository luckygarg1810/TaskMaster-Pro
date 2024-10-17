import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './contexts/ToDoCOntext'
import TodoForm from './components/ToDoform'
import TodoItem from './components/ToDoItems'

function App() {
  const [todos, setTodos] = useState([])

  const addToDo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateToDo = (id, todo) =>{
    setTodos((prev) => prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo)))
  }

  const deleteToDo = (id) =>{
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const completeToDo = (id) =>{
setTodos((prev) => prev.map((prevToDo) => prevToDo.id === id ? {...prevToDo,  completed: !prevToDo.completed}: prevToDo))

  }

  useEffect(() =>{
  const todos = JSON.parse(localStorage.getItem("todos"))

  if(todos && todos.length>0){
    setTodos(todos)
  }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos) )
  }, [todos])
  return (
    <ToDoProvider value={{todos, addToDo, updateToDo, deleteToDo, completeToDo }}>
      
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                        
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                          <TodoItem todo={todo}/>

                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
  )
}

export default App
