import React, { useState } from 'react';
import "./App.css";
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo])
  }


  return (
    <div className='main-container'>
      <div className='center-container'>
        <ToDoInput addList={addList} />
        <h1 className='app-heading'>TO-DO List : </h1>
        <hr className='todo-hr' />
        {listTodo.map((listItem, i) => {
          return (
            <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  )
}

export default App;