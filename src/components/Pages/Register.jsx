import React from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

const registration = e =>{
  e.preventDefault()
  const form = e.target
  const data={
    "email":form.email.value,
    "name": form.fullName.value,
    "password":form.password.value
  }

  Axios.post('https://api-edteam.alejogs4.now.sh/signup',data)
       .then(()=>{
         alert('Usuario Creado')
         window.location="/"
        })
       .catch(()=> alert('Error al crear cuenta'))
}

const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear Cuenta</h1>
      <form onSubmit={registration.bind()}>
      <div className="form__item">
          <label htmlFor="fullName">
            Nombre
            <input type="text" name="fullName" id="fullName" placeholder="your name" required/>
          </label>
        </div>
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
          <input type="submit" value="Crear cuenta" className="button ghost second-color full big"/>
        </div>
      </form>
      <div className="center">
        <p>Ya tienes cuenta? <Link to="/login">Inicia Sesión.</Link> </p>
      </div>
    </div>
  </div>
)
  
export default Register
