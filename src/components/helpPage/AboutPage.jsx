import Card from "../shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Practice project</h1>
        <p>This is a react app to create tasks with priority.</p>
        <p>Version:1.0</p>
        <p><Link to='/'>Home</Link></p>
      </div>
    </Card>
  )
}

export default AboutPage
