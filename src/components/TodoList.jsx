import React, { useState } from "react";
import ToDoCard from "./TodoCard";
const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const upDatedTasks = tasks.filter((element, i)=>i!==index);
    setTasks(upDatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0){
        const upDatedTasks = [...tasks];
        [upDatedTasks[index], upDatedTasks[index-1]]= [upDatedTasks[index-1], upDatedTasks[index]];
        setTasks(upDatedTasks);
    }
  }

  function moveTaskDown(index){
    if(index < tasks.length - 1){
        const upDatedTasks = [...tasks];
        [upDatedTasks[index], upDatedTasks[index+1]]= [upDatedTasks[index+1], upDatedTasks[index]];
        setTasks(upDatedTasks);
    }
  }

  return (
    <div>
      <h1 className="to-do-list">To-do-List</h1>
      <div className="text-button">
        <input
          type="text"
          placeholder="Enter a Task . . ."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <ToDoCard className="no-task"/>
      )
      :(<ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              🗑️
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇️
            </button>
          </li>
        ))}
      </ol>)}
    </div>
  );
};
export default TodoList;
