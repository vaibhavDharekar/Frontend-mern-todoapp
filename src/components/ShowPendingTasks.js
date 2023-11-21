import React from 'react'

const ShowPendingTasks = ({tasks,taskDone}) => {
  return (
    <div>
        {tasks.map((task)=>{
           return <>{
            !task.completed && <div key={task._id} className='flex'>
            <div className='w-11/12 bg-pink-400'>{task.taskTitle}</div>
            <button className='w-1/12 bg-yellow-400' onClick={()=>{taskDone(task._id)}}>Done</button>
            </div>
           }
           </>
        })}
    </div>
  )
}

export default ShowPendingTasks