import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import './ToDoList.scss';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ToDo {
    id: string;
    taskName: string;
    taskDescription: string;
    isCompleted: boolean;
    isEditing: boolean;
}

function ToDoList() {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const addToDo = (todo : { taskName: string; taskDescription: string}) => {
        setToDos([...toDos, {
            id: uuidv4(),
            taskName: todo.taskName,
            taskDescription: todo.taskDescription,
            isCompleted: false,
            isEditing: false
        }]);
    }
    const toggleComplete = (id: string) => {
        setToDos(prevToDo =>
            prevToDo.map(todo =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
        );

    }

    return (
        <div className='task-container'>
            <div className="task__header">
                <h2>Things to do</h2>
                <div className="task__filters">
                    <button className='filter-btn active'>All</button>
                    <button className='filter-btn'>Done</button>
                    <button className='filter-btn'>In progress</button>
                </div>
            </div>
            <ToDoForm addToDo={addToDo} />
            <div className="task-list"> 
                {toDos.map(todo => (
                    <ToDo key={todo.id} todo={todo} toggleComplete={toggleComplete} />  
                ))}
            </div>
        </div>
    );
}

export default ToDoList;