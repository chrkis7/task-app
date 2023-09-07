import { useContext } from 'react';
import TaskContext from '../context/TaskContext';


function TaskStats() {
  const {tasks} = useContext(TaskContext)

  let avg = tasks.reduce((acc, cur) => acc + cur.priority, 0) / tasks.length;
  avg = avg.toFixed(1).replace(/\.0+$/, '')

  return (
    <div className='task-stats'>
      <h4>Total {tasks.length} tasks</h4>
      <h4>Average of severities: {isNaN(avg) ? 0 : avg} </h4>
    </div>
  )
}

export default TaskStats
