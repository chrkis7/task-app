//Set state with useState function
import PropTypes from 'prop-types'
import Card from "./shared/Card"

function TaskItem({task}) {
  return (
    <Card>
      <div className="num-display">{task.priority}</div>
      <div className="text-display">
        {task.text}
      </div>
    </Card>
  )
}

TaskItem.propTypes = {
  task : PropTypes.object.isRequired,
}

export default TaskItem
