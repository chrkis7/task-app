import { createContext, useState, useEffect } from 'react';

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false,
  })

  useEffect(() => {
  fetchTask()
  }, [])

  const fetchTask = async () => {
    const response = await fetch('/tasks?_sort=id&_order=desc')
    const data = await response.json()

    setTasks(data)
    setIsLoading(false)
  }

  const deleteTask = async (id) => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      await fetch(`/tasks/${id}`, {
        method: 'DELETE',
      })

      setTasks(tasks.filter(task => id !== task.id))
    }
  }

  const addTask = async newTask => {
    const res = await fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask),
    })
    const data = await res.json();
    setTasks([data, ...tasks])
  }

  const updateTask = async (id, newTask) => {
    const response = await fetch(`/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask) 
    })
    const data = response.json()


    setTasks(tasks.map(task => task.id === id ? {...task, ...data} : task
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
      isLoading,
    }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext