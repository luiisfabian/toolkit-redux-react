import React, { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)

    const   {data: todo, isLoading} = useGetTodoByIdQuery(todoId);

const nextTodo = () => {
    setTodoId(todoId + 1);
}

const previewTodo = () => {
    if (todoId === 1) {
        return
    }
    setTodoId(todoId - 1);
}


    return (
        <>
            <h1>todos! - ARK QUERY</h1>
            <hr />
            {/* <h4>isLoading  {isLoading ? 'True' : 'False'}</h4> */}
            <pre>{JSON.stringify(todo)}</pre>


            <button onClick={nextTodo}>Preview Todo</button>

            <button onClick={previewTodo}>Next Todo</button>

            {/* <ul>
                {todos.map((todo) => (<li key={todo.id}>
                    <strong>{todo.completed ? 'DONE ': 'PENDING '}</strong> 
                    {todo.title}</li>)
                )}
            </ul> */}
        </>
    )
}
