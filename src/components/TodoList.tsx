import React from 'react'
import type { Todo } from '../types/todo'
import TodoItem from './TodoItem'

type TodoListProps ={
    todos : Todo[];
    toogleComplete: (id : number) => void;
    deleteTodo  : (id : number) => void;

}

function TodoList({todos , toogleComplete,deleteTodo} : TodoListProps) {
   

  return (
    <main>  
    {todos.map((todo)=>(<TodoItem key={todo.id} todo={todo} toogleComplete={toogleComplete} deleteTodo={deleteTodo}/>))}
    </main>
  )
}

export default TodoList