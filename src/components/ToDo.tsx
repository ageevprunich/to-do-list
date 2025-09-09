import React, { useState } from "react";
import './ToDo.scss';

interface ToDoProps {
    todo: {
        id: string;
        taskName: string;
        taskDescription: string;
        isCompleted: boolean;
        isEditing: boolean;
    }
    toggleComplete: (id: string) => void;
    deleteToDo: (id: string) => void;
    editToDo: (id: string) => void;
    saveToDo: (id: string, newTaskName: string, newTaskDescription: string) => void;
}

function ToDo({ todo, toggleComplete, deleteToDo, editToDo, saveToDo }: ToDoProps) {
    const [editedTaskName, setEditedTaskName] = useState(todo.taskName);
    const [editedTaskDescription, setEditedTaskDescription] = useState(todo.taskDescription);

    if (todo.isEditing) {
        return <div className="task" >
            <input type="text" className="task__editing" value={editedTaskName} onChange={(e) => setEditedTaskName(e.target.value)} />
            <input type="text" className="task__editing" value={editedTaskDescription} onChange={(e) => setEditedTaskDescription(e.target.value)} />
            <button className="task__btn" onClick={() => saveToDo(todo.id, editedTaskName, editedTaskDescription)}>💾 Save</button>
        </div >;
    }

    return <div className="task">
        <div className="task__text-container">
            <p className="task__name">{todo.taskName}</p>
            <p className="task__description">{todo.taskDescription}</p>
        </div>
        <div className="btn-container">
            <button className="task__btn" onClick={() => editToDo(todo.id)}>Edit</button>
            <button className="task__btn" onClick={() => deleteToDo(todo.id)}>Delete</button>
            <button className="task__btn" onClick={() => toggleComplete(todo.id)}>
                {todo.isCompleted ? "✅" : "⬜"}</button>
        </div>
    </div>;
}

export default ToDo;