import React from 'react'

const ShowAllTasks = ({tasks,taskDone}) => {
  return (
    <div>
        {tasks.map((task)=>{
           return <div key={task._id} className='flex'>
            {task.completed ? <div className='w-full line-through bg-pink-400'>{task.taskTitle}</div>
            :<div className='w-11/12 bg-pink-400'>{task.taskTitle}</div>}
            {!task.completed && <button className='w-1/12 bg-yellow-400' onClick={()=>{taskDone(task._id)}}>Done</button>
}
            </div>
        })}
    </div>
  )
}

export default ShowAllTasks