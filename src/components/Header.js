import React from 'react'
import './Header.css'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';


function Header() {
  let navigate = useNavigate();
  const params = useParams();
  const path = useLocation().pathname;
  return (
    <header>
      <img className='header__logo' onClick={() => navigate('/', { replace: true })} />
      <div className="header__btns">
        <Link to="/" className={path === '/' ? 'active' : ''} >Home</Link>
        <Link to="/work" className={path.startsWith('/work') ? 'active' : ''}>Work</Link>
        <Link to="/profile" className={path === '/profile' ? 'active' : ''}>Profile</Link>
        <Link to="/contact" className={path === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
    </header>
  )
}

export default Header