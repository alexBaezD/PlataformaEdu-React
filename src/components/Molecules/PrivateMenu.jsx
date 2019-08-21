import React from 'react'
import {NavLink} from 'react-router-dom'


const removeToken = ()=>{
  localStorage.removeItem('token')
  window.location="/login"
}

const PrivateMenu = () => {
  return (
     <ul>
      <li><NavLink exact to="/">Inicio</NavLink></li>
      <li><NavLink to="/especialidades">Especialidades</NavLink></li>
      <li><NavLink to="/cursos">Cursos</NavLink></li>
      <li><NavLink to="/profesores">Profesores</NavLink></li>
      <li><button onClick={()=>removeToken()} className="button micro third-color">Cerrar Sesión</button></li>
    </ul>
  )
}

export default PrivateMenu
