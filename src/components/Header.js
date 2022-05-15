import React, { useState } from 'react'
import './Header.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import SideBar from '../pages/SideBar';


function Header() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  let navigate = useNavigate();
  const params = useParams();
  const path = useLocation().pathname;
  return (
    <header>
      <SideBar path={path} opened={sidebarOpened} close={()=>setSidebarOpened(false)}/>
      <img className='header__logo' onClick={() => navigate('/', { replace: true })} />
      <img className='header__open-menu' onClick={()=>setSidebarOpened(true)} src="../assets/HeaderLogo.png" alt="" />
      <div className="header__btns">
        
        <Link to="/" className={path === '/' ? 'active' : ''} >HOME</Link>
        <Link to="/work" className={path.startsWith('/work') ? 'active' : ''}>WORK</Link>
        <Link to="/profile" className={path === '/profile' ? 'active' : ''}>PROFILE</Link>
        <Link to="/contact" className={path === '/contact' ? 'active' : ''}>CONTACT</Link>
      </div>
    </header>
  )
}

export default Header