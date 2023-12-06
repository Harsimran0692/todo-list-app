import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (value) {
            addTodo(value);
            setValue("");
        }
    }
    return(
        <form onSubmit={HandleSubmit} className="TodoForm">
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder="What is the Task Today?"/>
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    );

}