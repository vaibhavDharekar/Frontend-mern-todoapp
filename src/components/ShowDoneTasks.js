import React from 'react'
import TaskEditForm from './TaskEditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck,faSquare } from '@fortawesome/free-regular-svg-icons'

const ShowDoneTasks = ({tasks,taskDone,taskEdit,taskDelete,setTaskAdded,taskAdded}) => {
  return (
    <div>
        {tasks.map((task)=>{
           return <>
           {
           task.completed && ( !task.editing ?  <div key={task._id} className='flex'>
            <div className='w-3/4 text-xl bg-green-200 mb-1'>{task.taskTitle}</div>
            <button className={`w-1/12 border border-gray-300 mb-1`} onClick={()=>{taskDone(task._id)}}><FontAwesomeIcon className='text-green-400' icon={faSquareCheck} /></button>
            <button className='w-1/12 mb-1 border border-gray-200' onClick={()=>{taskEdit(task._id)}}><FontAwesomeIcon className={`${task.completed ? 'text-green-400' :'text-red-400' }`} icon={faPenToSquare} /></button>
            <button className='w-1/12 mb-1 border border-gray-200' onClick={()=>{taskDelete(task._id)}}><FontAwesomeIcon className={`${task.completed ? 'text-green-400' :'text-red-400' }`} icon={faTrashCan} /></button>
            </div>
            : <TaskEditForm taskTitle={task.taskTitle} taskId={task._id} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>
           )
            
           }
           </>
        })}
    </div>
  )
}

export default ShowDoneTasks