import React, { useState } from "react";
import './ToDoForm.scss';

interface ToDoFormProps {
    addToDo: (todo: { taskName: string, taskDescription: string }) => void;
}

function ToDoForm({ addToDo } : ToDoFormProps) {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addToDo({ taskName, taskDescription });
        setTaskName('');
        setTaskDescription('');
    }

    return (
        <div className="task__form">
            <form className="to-do-form" onSubmit={handleSubmit} >
                <input type="text" className="task__input" placeholder="Add name of task"
                    value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                <input type="text" className="task__input" placeholder="Add description of task"
                    value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
                <button className="add-task-btn" type="submit"> + </button>
            </form>
        </div>
    );
}

export default ToDoForm;