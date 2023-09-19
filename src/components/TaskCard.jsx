import React from "react";
import './TaskCard.css'
import Tag from "./Tag";
import Delete from '../assets/delete.png'

const TaskCard = ({task, tags, handleDelete}) => {
  return (
    <div className="task_card">
      <p className="card_content">{task}</p>
      <div className="card_buttons_container">
        <div className="tags_container">
          {
            tags && tags.length>0 && tags.map((item, index) =>{
              return (<Tag key={index} selected={true} tagName={item}/>)
            })
          }
        </div>
        <div className="delete_container">
            <img src={Delete} onClick={handleDelete} className="deleteIcon" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
