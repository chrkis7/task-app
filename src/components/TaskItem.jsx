//Set state with useState function
import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function TaskItem({ task, handleDelete }) {

  return (
    <Card>
      <div className='num-display'>{task.priority}</div>
      <button onClick={()=>handleDelete(task.id)} className='close'>
        <FaTimes color='white' />
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
