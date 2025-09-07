import React from 'react';
import './App.scss';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div>
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
