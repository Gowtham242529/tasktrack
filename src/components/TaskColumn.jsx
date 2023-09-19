import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

const TaskColumn = ({name, icon, data, deleteTask}) => {
  return (
    <div className="columns">
        <h1 className='Task_Column_heading'><img src={icon} alt="" className='column_icon'/>{name}</h1>
        {
          data && data.length>0 && data.map((item)=>{
            return <TaskCard handleDelete={() =>{deleteTask(name, item.id)}} key={item.id} task={item.task} tags={item.tags}/>
          })
        }
    </div>
  )
}

export default TaskColumn
