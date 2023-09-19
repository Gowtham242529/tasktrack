import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import './App.css'
import TaskColumn from "./components/TaskColumn";
import Todo from './assets/direct-hit.png';
import Doing from './assets/glowing-star.png';
import Done from './assets/check-mark-button.png';

const App = () => {
  const [data, setData] = useState({
    Todo:[],
    Doing: [],
    Done : []
  })

  const deleteTask=(status, id)=>{
    const newTasks = data[status].filter(item => item.id !==id)
    setData(prev=>{
      return {...prev,[status]:newTasks}
    })
  }

  return (
    <div className="app">
      <TaskForm setData={setData}/>
      <div className="footer">
        <TaskColumn data={data.Todo} deleteTask={deleteTask} name="Todo" icon={Todo}/>
        <TaskColumn data={data.Doing} deleteTask={deleteTask} name="Doing" icon={Doing}/>
        <TaskColumn data={data.Done} deleteTask={deleteTask} name="Done" icon={Done}/>
      </div>
    </div>
  );
};

export default App;
