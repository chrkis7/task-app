import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import TaskItem from './TaskItem'
import TaskContext from '../context/TaskContext'
import Spinner from './shared/Spinner'


function TaskList() {
  const {tasks, isLoading} = useContext(TaskContext)

  if(!isLoading && (!tasks || tasks.length === 0)) return (
    <p>No task yet</p>
  )

  return isLoading ? <Spinner /> : (
    <div className='task-list'>
      <AnimatePresence>
        {tasks.map(task => (
          <motion.div 
            key={task.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <TaskItem key={task.id} task={task} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )

  // return (
  //   <div className='task-list'>
  //     {tasks.map(task => (
  //       <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
  //     ))}
  //   </div>
  // )
}

export default TaskList
