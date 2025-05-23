import React, { useState, type FormEvent } from 'react'
import type { Todo } from './types/todo';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos]=useState<Todo []>([]);
  const [newTodo,setNewTodo]=useState<string>("");

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(newTodo.trim()==="") return;
    const newTask : Todo={
      id : Date.now(),
      body : newTodo,
      isCompleted : false,
    }    
    setTodos([...todos,newTask]);
    setNewTodo("");                
  }

  const toogleComplete=(id : number)=>{
    setTodos(todos.map(todo=>todo.id===id ? {...todo , isCompleted : !todo.isCompleted} : todo))
  }

  const deleteTodo=(id : number)=>{
    setTodos(todos.filter(todo => todo.id !== id));  
  }

  return (
    <main className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h1 className='text-3xl font-bold mb-4 text-white'>Todo App with React + Typescript</h1>
      <form onSubmit={addNewTodo} className="flex items-center">
        <input className="border-2 border-white rounded-md p-2 mr-2 text-white" type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button className="border-2 border-white rounded-md p-2 bg-blue-500 text-white" type='submit'>Add Todo</button>
      </form>
      <TodoList todos={todos}  toogleComplete={toogleComplete} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
