import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddIcon} from '../assets/plus-solid.svg'

const AddButton = () => {
  return (
    <div>
      <Link to="/recipe/new/" className="floating-button">
        <AddIcon />
      </Link>
    </div>
  )
}

export default AddButton
