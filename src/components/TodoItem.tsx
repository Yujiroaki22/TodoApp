import React from 'react'
import type { Todo } from '../types/todo'

type TodoItemProps={
    todo : Todo
    toogleComplete: (id : number) => void
    deleteTodo : (id : number) => void

}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toogleComplete, deleteTodo }) => {
    return (
        <div className="p-4 border border-gray-200 rounded-md shadow-md bg-black text-white">
            <div className="flex items-center hover:cursor-pointer" >
                <div className="mr-2" onClick={() => toogleComplete(todo.id)}>
                    {todo.isCompleted ? "✅" : "⭕️"}
                </div>
                <span className={todo.isCompleted ? "line-through " : ""} >{todo.body}</span>
            </div>
            <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => deleteTodo(todo.id)}>Remove Todo</button>
        </div>
    );
}

export default TodoItem