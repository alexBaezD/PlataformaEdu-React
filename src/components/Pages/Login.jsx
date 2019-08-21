import React from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

const authentication = e =>{
  e.preventDefault()
  const form=e.target

  const data = {
    "email":form.email.value,
    "password":form.password.value
  }
  Axios.post('https://api-edteam.alejogs4.now.sh/login',data)
        .then(response =>{
          localStorage.setItem('token',response.data.token)
          window.location="/"
        })
        .catch(error => {
          console.log(error)
          alert('Error al iniciar sesión: el usuario no existe o tu contraseña es incorrecta')
        })
}


const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar Sesión</h1>
      <form onSubmit={authentication.bind()}>
        <div className="form__item">
          <label htmlFor="email">
            Correo electrónico
            <input type="email" name="email" id="email" placeholder="youremail@domain.com" required autoComplete="username"/>
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" placeholder="Secret" required  autoComplete="current-password"/>
          </label>
        </div>
        <div className="form__item">
          <input type="submit" value="Iniciar sesión" className="button ghost second-color full big"/>
        </div>
      </form>
      <div className="center">
        <p>¿No tienes cuenta? <Link to="/registro">Crea tu cuenta</Link> </p>
      </div>
    </div>
  </div>
)
  
export default Login
