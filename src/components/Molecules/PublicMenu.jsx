import React from 'react'
import {NavLink} from 'react-router-dom'

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/login">Login</NavLink></li>
      <li><NavLink to="/registro">Crea tu cuenta</NavLink></li>
    </ul>
  )
}

export default PublicMenu
