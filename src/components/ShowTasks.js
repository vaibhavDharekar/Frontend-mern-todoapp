import React, { useEffect,useState } from 'react'
import ShowAllTasks from './ShowAllTasks';
import ShowPendingTasks from './ShowPendingTasks';
import ShowDoneTasks from './ShowDoneTasks';
import { BackendURL } from '../utils/backendURL';

const ShowTasks = ({tasks,setTasks,taskAdded,setTaskAdded}) => {
    let getTasks = async()=>{
        let response = await fetch(`${BackendURL}/showTasks`,{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let tasks = await response.json();
        setTasks(tasks.allTasks);
    }
    let [taskCategoryId,setTaskCategoryId] = useState(0);
    useEffect(()=>{
        getTasks();
    },[taskAdded]);
    let taskDone = async(taskId)=>{
        let response = await fetch(`${BackendURL}/taskDone/${taskId}`,{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let data = await response.json();
        setTasks(data.allTasks);
    }
    let taskEdit = async(taskId)=>{
        let response = await fetch(`${BackendURL}/taskEdit/${taskId}`,{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let data = await response.json();
        setTasks(data.allTasks);
    }
    let taskDelete = async(taskId)=>{
        let response = await fetch(`${BackendURL}/taskDelete/${taskId}`,{method:"get",headers:{"Content-Type":"application/json","Authorization":"Bearer "+localStorage.getItem("jwt")},body:JSON.stringify()});
        let data = await response.json();
        setTasks(data.allTasks);
    }
  return (
    <div>
        <div className='py-1 flex justify-around bg-gray-200'>
            <button className={`${taskCategoryId == 0 ? 'bg-gray-300' : 'bg-gray-400' }`} onClick={()=>{
                setTaskCategoryId(0);
            }}>All Tasks</button>
            <button className={`${taskCategoryId == 1 ? 'bg-gray-300' : 'bg-gray-400' }`} onClick={()=>{
                setTaskCategoryId(1);
            }}>Pending Tasks</button>
            <button className={`${taskCategoryId == 2 ? 'bg-gray-300' : 'bg-gray-400' }`} onClick={()=>{
                setTaskCategoryId(2);
            }}>Done Tasks</button>
        </div>
        <div>
        {taskCategoryId == 0 && <ShowAllTasks tasks={tasks} taskDone={taskDone} taskEdit={taskEdit} taskDelete={taskDelete} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>}
        {taskCategoryId == 1 && <ShowPendingTasks tasks={tasks} taskDone={taskDone} taskEdit={taskEdit} taskDelete={taskDelete} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>}
        {taskCategoryId == 2 && <ShowDoneTasks tasks={tasks} taskDone={taskDone} taskEdit={taskEdit} taskDelete={taskDelete} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>}


    </div>
    
    </div>
  )
}

export default ShowTasks;