import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default MainNavigation
