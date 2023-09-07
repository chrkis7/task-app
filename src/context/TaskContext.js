import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'example 1',
    priority: 5,
  },
  {
    id: 2,
    text: 'example 2',
    priority: 1,
  },
  {
    id: 3,
    text: 'example 3',
    priority: 2,
  }])

  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false,
  })

  const deleteTask = (id) => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => id !== task.id))
    }
  }

  const addTask = newTask => {
    newTask.id = uuidv4()
    setTasks([newTask, ...tasks])
  }

  const updateTask = (id, newTask) => {
    setTasks(tasks.map(task => task.id === id ? {...task, ...newTask} : task
    ))
  }

  const editTask = task => {
    setTaskEdit({
      task,
      edit: true,
    })
  }
 
  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      addTask,
      editTask,
      taskEdit,
      updateTask,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext