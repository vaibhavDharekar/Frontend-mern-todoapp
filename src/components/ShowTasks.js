import React, { useEffect,useState } from 'react'
import ShowAllTasks from './ShowAllTasks';
import ShowPendingTasks from './ShowPendingTasks';
import ShowDoneTasks from './ShowDoneTasks';

const ShowTasks = ({tasks,setTasks,taskAdded}) => {
    let getTasks = async()=>{
        let response = await fetch('http://localhost:8080/showTasks',{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let tasks = await response.json();
        setTasks(tasks.allTasks);
    }
    let [taskCategoryId,setTaskCategoryId] = useState(0);
    useEffect(()=>{
        getTasks();
    },[taskAdded]);
    let taskDone = async(taskId)=>{
        let response = await fetch(`http://localhost:8080/taskDone/${taskId}`,{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let data = await response.json();
        
        setTasks(data.allTasks);
    }
  return (
    <div>
        <div className='py-1 flex justify-around bg-blue-300'>
            <button className='bg-gray-300' onClick={()=>{
                setTaskCategoryId(0);
            }}>All Tasks</button>
            <button className='bg-gray-600' onClick={()=>{
                setTaskCategoryId(1);
            }}>Pending Tasks</button>
            <button className='bg-gray-600' onClick={()=>{
                setTaskCategoryId(2);
            }}>Done Tasks</button>
        </div>
        <div>
        {taskCategoryId == 0 && <ShowAllTasks tasks={tasks} taskDone={taskDone}/>}
        {taskCategoryId == 1 && <ShowPendingTasks tasks={tasks} taskDone={taskDone}/>}
        {taskCategoryId == 2 && <ShowDoneTasks tasks={tasks} taskDone={taskDone}/>}


    </div>
    
    </div>
  )
}

export default ShowTasks;