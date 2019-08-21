import React from 'react'
import {Route, Redirect} from 'react-router-dom'


const Public = ({component: Component, ...rest}) => {
  const userLogged = localStorage.getItem('token')

 /**
  * Guardar en LocalStorage en historial para 
  * regresar al usuario a la página anterior. y 
  * llevarlo a esa ruta en lugar de siempre al home
  */

  if(userLogged){
     return <Redirect to="/" />
  }
  return <Route {...rest} component={Component}/>
  
}

export default Public
