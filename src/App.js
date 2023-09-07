import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import TaskForm from './components/TaskForm'
import AboutPage from './components/helpPage/AboutPage'
import { TaskProvider } from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
                <TaskForm />
                <TaskStats />
                <TaskList />
              </>
            }>
            </Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App