import React, {useState} from "react";
import './ToDo.scss';

type ToDoProps = {
    todo: {
        id: string;
        taskName: string;
        taskDescription: string;
        isCompleted: boolean;
        isEditing: boolean;
    }
    toggleComplete: (id: string) => void;
}

function ToDo({todo, toggleComplete}: ToDoProps) { 
    

    return <div className="task">
        <div className="task__text-container">
            <p className="task__name">{ todo.taskName}</p>
            <p className="task__description">{todo.taskDescription}</p>
        </div>
        <div className="btn-container">
            <button className="task__btn edit-btn">Edit</button>
            <button className="task__btn delete-btn">Delete</button>
            <button className="task__btn complete-btn" onClick={() => toggleComplete(todo.id)}>
                {todo.isCompleted ? "✅" : "⬜"}</button>
        </div>
    </div>;
}

export default ToDo;