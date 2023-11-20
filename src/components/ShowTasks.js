import React, { useEffect } from 'react'

const ShowTasks = ({tasks,setTasks,taskAdded}) => {
    let getTasks = async()=>{
        let response = await fetch('http://localhost:8080/showAllTasks',{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let tasks = await response.json();
        setTasks(tasks.allTasks);
    }
    useEffect(()=>{
        getTasks();
    },[taskAdded]);
  return (
    <div>
        {tasks.map((task)=>{
            return <div key={task._id} className='flex'>
                <div className='w-full bg-pink-400'>{task.taskTitle}</div>
                </div>
        })}
    </div>
  )
}

export default ShowTasks;