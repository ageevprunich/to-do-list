import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import './ToDoList.scss';
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isEditable } from '@testing-library/user-event/dist/utils';

interface ToDo {
    id: string;
    taskName: string;
    taskDescription: string;
    isCompleted: boolean;
    isEditing: boolean;
}

function ToDoList() {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [filter, setFilter] = useState < 'all' | 'done' | 'in-progress' > ('all');

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

    const deleteToDo = (id: string) => {
        setToDos(prevToDo => prevToDo.filter(todo => todo.id !== id));
    }

    const editToDo = (id: string) => { 
        setToDos(prevToDo =>
            prevToDo.map(todo =>
                todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
            )
        )
    }

    const saveToDo = (id: string, newTaskName: string, newTaskDescription: string) => {
        setToDos(prevToDo =>
            prevToDo.map(todo => 
                todo.id === id ? {...todo, taskName: newTaskName, taskDescription: newTaskDescription, isEditing: false} : todo
            )
        )
    }

    const filteredToDos = toDos.filter(todo => {
        if (filter === 'all') return true;
        if (filter === 'done') return todo.isCompleted;
        if (filter === 'in-progress') return !todo.isCompleted;
        return true;
    });

    return (
        <div className='task-container'>
            <div className="task__header">
                <h2>Things to do</h2>
                <div className="task__filters">
                    <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All</button>
                    <button className={`filter-btn ${filter === 'done' ? 'active' : ''}`} onClick={() => setFilter('done')}>Done</button>
                    <button className={`filter-btn ${filter === 'in-progress' ? 'active' : ''}`} onClick={() => setFilter('in-progress')}>In progress</button>
                </div>
            </div>
            <ToDoForm addToDo={addToDo} />
            <div className="task-list"> 
                {filteredToDos.map(todo => (
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                        saveToDo={saveToDo}
                    />  
                ))}
            </div>
        </div>
    );
}

export default ToDoList;