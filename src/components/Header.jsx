//Create a functional component
//impt is a shortcut to bring in PropTypes
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={HeaderStyles}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Task App UI',
  bgColor: '#8EC9BC',
  textColor: '#FBF5AA',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header