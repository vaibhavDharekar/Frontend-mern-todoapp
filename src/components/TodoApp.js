import React,{useEffect, useState} from 'react'
import TaskInputForm from './TaskInputForm'
import Heading from './Heading'
import ShowTasks from './ShowTasks'


const TodoApp = () => {
  let [tasks,setTasks] = useState([]);
  let [taskAdded,setTaskAdded] = useState(0);



  return (
    <div className='w-2/3 mx-auto'>
        <Heading/>
        <TaskInputForm setTasks={setTasks} setTaskAdded={setTaskAdded} taskAdded={taskAdded}/>
        <ShowTasks tasks={tasks} setTasks={setTasks} setTaskAdded={setTaskAdded} taskAdded={taskAdded} />
    </div>
  )
}

export default TodoApp