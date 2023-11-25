import React from 'react'
import TaskEditForm from './TaskEditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faSquareCheck,faSquare } from '@fortawesome/free-regular-svg-icons'

const ShowAllTasks = ({tasks,taskDone,taskEdit,taskDelete,taskAdded,setTaskAdded}) => {
  return (
    <div>
        {tasks.map((task)=>{
           return <div >
            {!task.editing 
            ? <div key={task._id} className='flex'>
            {task.completed ? <div className='w-3/4  flex items-center line-through text-xl text-gray-400 mb-1 bg-green-200'>{task.taskTitle}</div>
            :<div className='w-9/12 bg-red-400 text-xl mb-1'>{task.taskTitle}</div>}
            {!task.completed
             ?<button className={`w-1/12 border border-gray-300 mb-1 hover:bg-gray-300`} onClick={()=>{taskDone(task._id)}}><FontAwesomeIcon className='text-red-500' icon={faSquare} /></button>
             :<button className={`w-1/12 border border-gray-300 mb-1 hover:bg-gray-300`} onClick={()=>{taskDone(task._id)}}><FontAwesomeIcon className='text-green-400' icon={faSquareCheck} /></button>}
            <button className={`w-1/12  border border-gray-300  mb-1  hover:bg-gray-300`} onClick={()=>{taskEdit(task._id)}}><FontAwesomeIcon className={`${task.completed ? 'text-green-400' :'text-red-400' }`} icon={faPenToSquare} /></button>
            <button className={`w-1/12  border border-gray-300  mb-1 hover:bg-gray-300`} onClick={()=>{taskDelete(task._id)}}><FontAwesomeIcon className={`${task.completed ? 'text-green-400' :'text-red-400' }`} icon={faTrashCan} /></button>
            </div>
            :<TaskEditForm taskTitle={task.taskTitle} taskId={task._id} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>}
           </div>
        })}
    </div>
  )
}

export default ShowAllTasks