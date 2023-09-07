import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import TaskItem from './TaskItem'
import TaskContext from '../context/TaskContext'


function TaskList() {
  const {tasks} = useContext(TaskContext)

  if(!tasks || tasks.length === 0) return (
    <p>No task yet</p>
  )

  return (
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
