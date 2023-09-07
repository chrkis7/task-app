//Set state with useState function
import { FaTimes, FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import Card from './shared/Card'

function TaskItem({ task }) {
  const { deleteTask, editTask } = useContext(TaskContext)

  return (
    <Card>
      <div className='num-display'>{task.priority}</div>
      <button onClick={()=>deleteTask(task.id)} className='close'>
        <FaTimes color='white' />
      </button>
      <button onClick={()=>editTask(task)} className='edit'>
        <FaEdit color='white' />
      </button>
      <div className='text-display'>
        {task.text}
      </div>
    </Card>
  )
}

TaskItem.propTypes = {
  task : PropTypes.object.isRequired,
}

export default TaskItem
