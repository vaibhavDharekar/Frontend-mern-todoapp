import React, { useState } from 'react'
import { BackendURL } from '../utils/backendURL';

const TaskInputForm = ({setTasks,setTaskAdded,taskAdded}) => {
    let[task,setTask] = useState('');
  return (
    <div>
        <input type="text" placeholder='Add Task' value={task} className='w-11/12 bg-yellow-300 h-10 pl-2 outline-none' onChange={(e)=>{
            setTask(e.target.value);
        }}  />
        <button className='w-1/12 bg-teal-400 h-10' onClick={async()=>{
          if(task){
            try{
          let response = await fetch(`${BackendURL}/addTask`,{method:'post',headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+localStorage.getItem('jwt')
          },body:JSON.stringify({task:task})})
          setTask("");
          let data = await response.json();
          if(response.status == 201){
            console.log(data.msg);
            let flag = taskAdded;
            setTaskAdded(flag + 1);
          }
          else{
            console.log(data.error)
          }
            }
            catch(err){
              console.log('Error while adding task')
            }
          }
        }}>Add Task</button>
    </div>
  )
}

export default TaskInputForm