import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({setData}) => {
  // Getting Multiple User inputs using useState

  const [taskData, setTaskData] = useState({
    task: "", //getting tasks details ( User Input )
    status: "Todo", //getting status details (Selection of Statements [Todo, Doing, Done])
    tags: [], // getting the selected tags list
  });

  //Function to apply colors to the selected tags

  const selected = (e) => {
    return taskData.tags.some((item) => item === e);
  };

  // Function to get the list of selected tags

  const selectedTags = (tag) => {
    //passing selected tags from Tag.jsx
    if (taskData.tags.some((item) => item === tag)) {
      // Some() returns true or false. if tags contain the selected tag from Tag.jsx returns true or false.
      const filteredTags = taskData.tags.filter((item) => item !== tag); //filter() filters data on given condition. For here we are saying if tags.item is not equal to tag from Tag.jsx, then add it to the filteredTags.
      console.log(filteredTags)
      setTaskData((p) => {
        //passing the prev
        return { ...p, tags: [filteredTags] }; // returning the filteredTags with the previous tags
      });
    } else {
      setTaskData((p) => {
        return { ...p, tags: [...p.tags, tag] }; // returning the tags with the previous tags and assigning them to the previous data
      });
    }
  };

  //Using a single function to get both task and the status details

  const handleChange = (e) => {
    // passing the event variable
    const { name, value } = e.target; // using object [name represents the name associated in the corresponding tag, value represensts the value of that tag]
    setTaskData((p) => {
      // passing the event variable
      return { ...p, [name]: value }; // p means previous which contained the prev values. By using that spread operator, the p contains the previous values and the prev values are added to the corresponding name: value pair.
    });
  };

  // Using handleSubmit function to handle the form submission

  const handleSubmit = (e) => {
    //passing the event variable
    e.preventDefault(); // using the preventDefault() to stop the page submission whenever the submission action takes place.
    if (taskData.task=='' || taskData.tags.length==0){
      return;
    }
    console.log(taskData);
    setData(prev=>{
      return {...prev, [taskData.status]:[...prev[taskData.status], {task: taskData.task, tags: taskData.tags, id:taskData.task+Date.now()}]}  //  App.jsx todo (status)    App.jsx status data    Adding data from Formdata
    })
  };

  return (
    <div className="header">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          id=""
          onChange={handleChange}
        />
        <div className="bottom_container">
          <div className="tags_container">
            {/* passing the selectedTags to Tag.jsx */}
            <Tag
              tagName="HTML"
              selectedTags={selectedTags}
              selected={selected("HTML")}
            />
            <Tag
              tagName="CSS"
              selectedTags={selectedTags}
              selected={selected("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectedTags={selectedTags}
              selected={selected("JavaScript")}
            />
            <Tag
              tagName="React"
              selectedTags={selectedTags}
              selected={selected("React")}
            />
          </div>
          <div className="buttons_container">
            <select
              name="status"
              className="select_options"
              onChange={handleChange}
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button className="submit_button">+ Add Task</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
