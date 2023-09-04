//Set state with useState function
function TaskItem({task}) {
  return (
    <div className='card'>
      <div className="num-display">{task.priority}</div>
      <div className="text-display">
        {task.text}
      </div>
    </div>
  )
}

export default TaskItem
