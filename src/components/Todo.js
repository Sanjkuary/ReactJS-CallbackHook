import React from 'react'
import { memo } from 'react'

const Todo = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <div className='todoApp'>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button className='btn1' onClick={addTodo}>addTodo</button>
            </div>
        </>
    );
};

export default memo(Todo);
