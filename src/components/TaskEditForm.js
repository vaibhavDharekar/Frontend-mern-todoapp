import React, { useState } from 'react'

const TaskEditForm = ({setTasks,setTaskAdded,taskAdded,taskTitle,taskId}) => {
    let[task,setTask] = useState(taskTitle);
  return (
    <div>
        <input type="text" placeholder='Add Task' value={task} className='w-11/12 bg-yellow-300 h-10 pl-2 outline-none' onChange={(e)=>{
            setTask(e.target.value);
        }}  />
        <button className='w-1/12 bg-gray-200 h-10' onClick={async()=>{
          if(task){
            try{
          let response = await fetch(`http://localhost:8080/taskEdit/${taskId}`,{method:'post',headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "+localStorage.getItem('jwt')
          },body:JSON.stringify({task:task})})
        //   setTask("");
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
        }}>Edit Task</button>
    </div>
  )
}

export default TaskEditForm