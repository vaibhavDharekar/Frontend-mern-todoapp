import React from 'react'
import TaskInputForm from './TaskInputForm'
import Heading from './Heading'

const TodoApp = () => {
  return (
    <div className='w-2/3 mx-auto'>
        <Heading/>
        <TaskInputForm/>

    </div>
  )
}

export default TodoApp