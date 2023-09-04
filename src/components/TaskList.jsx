import TaskItem from "./TaskItem"

function TaskList({tasks}) {
  if(!tasks || tasks.length === 0) return (
    <p>No task yet</p>
  )

  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
