import { useEffect, useState } from 'react'
import {TodoProvider} from "./contexts"
import './App.css'

function App() {
  const [todos , settodos] = useState([]);
  const addTodo =(todo) =>{
    settodos((prev) => [{id : Date.now(), ...todo},...prev ])
  }

  const updateTodo = (id , todo ) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) =>{
    settodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo ))
  }
  useEffect(() =>{
      const todos = json.parse(localStorage.getItem("todos")) 

      if(todos && todos.length> 0 ){
        settodos(todos)
      }
  },[])

  useEffect(() =>{
    localStorage.setItem("todos",json.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
            </TodoProvider>
  )

}

export default App
