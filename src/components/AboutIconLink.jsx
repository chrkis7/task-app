import { FcAbout } from 'react-icons/fc';
import { Link } from 'react-router-dom'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FcAbout size={30}/>
      </Link>
    </div>
  )
}

export default AboutIconLink
