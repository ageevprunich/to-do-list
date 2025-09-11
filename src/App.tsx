import React from 'react';
import './App.scss';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';

function App() {
  return (
    <>  
    <div className='container'>
      <Header />
      <ToDoList />
      </div>
      <Footer />
    </>
  );
}

export default App;
