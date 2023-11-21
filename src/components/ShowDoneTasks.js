import React from 'react'

const ShowDoneTasks = ({tasks,taskDone}) => {
  return (
    <div>
        {tasks.map((task)=>{
           return <>
           {
           task.completed &&  <div key={task._id} className='flex'>
            <div className='w-full bg-pink-400'>{task.taskTitle}</div>
            </div>
           }
           </>
        })}
    </div>
  )
}

export default ShowDoneTasks