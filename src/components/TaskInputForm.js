import React, { useState } from 'react'

const TaskInputForm = () => {
    let[task,setTask] = useState('');
  return (
    <div>
        <input type="text" placeholder='Add Task' value={task} className='w-11/12 bg-yellow-300 h-10 pl-2 outline-none' onChange={(e)=>{
            setTask(e.target.value);
        }}  />
        <button className='w-1/12 bg-pink-500 h-10'>Add Task</button>
    </div>
  )
}

export default TaskInputForm