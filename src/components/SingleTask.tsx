import React from 'react'
import { Task } from '../model'
import { FaTrash } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { MdEdit } from 'react-icons/md';

interface Props {
  task: Task;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

// const SingleTask:React.FC<Props> = ({task, taskList, setTaskList}:Props) => {
const SingleTask:React.FC<Props> = ({task}:Props) => {
  return (
    <div className='w-full text-white bg-primary p-4 rounded-lg cursor-pointer flex justify-between'>
      <div>{task.task}</div>
      <div className='flex gap-3'>
        <MdEdit className='text-lg' title='Edit' />
        <FaTrash title='Delete' />
        <FaCheck title='Done' />
      </div>
    </div>
  )
}

export default SingleTask