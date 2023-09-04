import { useState } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import TaskData from "./data/TaskData";

function App() {
  const [tasks, setTasks] = useState(TaskData);

  return (
    <>
      <Header />
      <div className='container'>
        <h1>My app</h1>
        <TaskList tasks={tasks} />
      </div>
    </>
  )
}

export default App