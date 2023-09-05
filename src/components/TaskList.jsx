import PropTypes from 'prop-types'
import TaskItem from "./TaskItem"


function TaskList({ tasks, handleDelete}) {
  if(!tasks || tasks.length === 0) return (
    <p>No task yet</p>
  )

  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      priority: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  )
}

export default TaskList
