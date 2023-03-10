import React, { useReducer, useEffect } from 'react'
import { useTodos } from '../hooks/useTodos'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'



export const TodoApp = () => {

    const {todos,todosCount, pendingTodosCount,  handleDeleteTodo, handleToggleTodo, handleNewTodo, } = useTodos();

    return (
        <>
            <h1>TodoApp: { todosCount() }  <small>pendientes:  {pendingTodosCount()} </small>  </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList */}
                    <TodoList
                        todos={todos}
                        onDeleteTodo= {handleDeleteTodo}
                        onToggleTodo= {handleToggleTodo}
                    />

                </div>

                <div className="col-5">
                    <h4>Agregar TODO </h4>
                    <hr />

                    {/* TodoAdd */}
                    <TodoAdd
                        oneNewTodo={ handleNewTodo}
                    />
                    {/* Fin TodoAdd */}
                </div>
            </div>

        </>
    )
}
