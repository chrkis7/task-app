import { useState, useContext, useEffect } from 'react'
import PrioritySelect from './PrioritySelect'
import Card from './shared/Card'
import Button from './shared/Button'
import TaskContext from '../context/TaskContext'

function TaskForm() {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addTask, taskEdit, updateTask } = useContext(TaskContext)

  useEffect(() => {
    if(taskEdit.edit === true) {
      setBtnDisabled(false)
      setText(taskEdit.task.text)
      setPriority(taskEdit.task.priority)
    }
    console.log('use effect')
  }, [taskEdit])

  const handleTextChange = e => {
    if(text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters!')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(text.trim().length >= 10) {
      const newTask = {
        text,
        priority,
      }

      if(taskEdit.edit === true) {
        updateTask(taskEdit.task.id, newTask)
      }else {
        addTask(newTask)
      }

      setText('')
      setPriority(0)

    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>What is the priority of a new task?</h2>
        {/* @todo - rating select component */}
        <PrioritySelect select={priority => setPriority(priority)}/>
        <div className='input-group'>
          <input 
            onChange={handleTextChange} 
            type='text' 
            placeholder='Write a description of the task.' 
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default TaskForm
