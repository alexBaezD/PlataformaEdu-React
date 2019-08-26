import React ,{createRef} from 'react'
import {NavLink} from 'react-router-dom'
import PrivateMenu from '../Molecules/PrivateMenu';
import PublicMenu from '../Molecules/PublicMenu';

//Manejo de referencias en React
const menu = createRef()
const toggleMenu = ()=> menu.current.classList.toggle('show')

const Header = () => (
  <header className="main-header dark-header">
    <div className="ed-grid s-grid-5 lg-grid-4">
      <div className="s-cols-4 lg-cols-1 s-cross-center" >
       <NavLink to="/">
         <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo"/>
       </NavLink> 
      </div>
      <div className="s-cols-1 lg-cols-3 s-cross-center s-main-end">
        <nav className="main-menu" ref={menu}>
         {
           localStorage.getItem('token') 
           ? <PrivateMenu/>
           : <PublicMenu/>
         }
        </nav>
        <div className="main-menu-toggle to-l"
        onClick={()=> toggleMenu()}
        ></div>
      </div>
    </div>
  </header>
)

export default Header
