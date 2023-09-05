import { useState } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import TaskStats from "./components/TaskStats"
import TaskForm from "./components/TaskForm"
import TaskData from "./data/TaskData";

function App() {
  const [tasks, setTasks] = useState(TaskData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => id !== task.id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <TaskForm />
        <TaskStats tasks={tasks} />
        <TaskList tasks={tasks} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App