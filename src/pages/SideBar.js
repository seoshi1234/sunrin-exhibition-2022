import React,{useEffect} from 'react'
import './SideBar.css'
import { Link,useNavigate } from 'react-router-dom'
import Facebook from '../assets/FooterFacebookIcon.png';
import Instagram from '../assets/FooterInstagramIcon.png';
import Sunrin from '../assets/FooterSunrinIcon.png';
import Youtube from '../assets/FooterYoutubeIcon.png';

function SideBar(props) {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])


  return (
    <div className={`sidebar ${props.opened?'active':''}`} onClick={props.close}>
      <div className="sidebar-container">
        <img className='sidebar__logo' onClick={() => navigate('/', { replace: true })}/>
        <div className="sidebar__btns">
          
          <Link to="/" className={props.path === '/' ? 'active' : ''} >HOME</Link>
          <Link to="/work" className={props.path.startsWith('/work') ? 'active' : ''}>WORK</Link>
          <Link to="/profile" className={props.path === '/profile' ? 'active' : ''}>PROFILE</Link>
          <Link to="/contact" className={props.path === '/contact' ? 'active' : ''}>CONTACT</Link>
        </div>
        <div className="sidebar__icons-wrapper">
          <a className="sidebar__icons" href="https://sunrint.hs.kr/">
            <img src={Sunrin} />
          </a>
          <a className="sidebar__icons" href="https://www.facebook.com/SunrinGraduationExhibition">
            <img src={Facebook} />
          </a>
          <a className="sidebar__icons" href="https://www.youtube.com/watch?v=-Bg2ePh3628">
            <img src={Youtube} />
          </a>
          <a className="sidebar__icons" href="https://www.instagram.com/sr_design_exhibit/">
            <img src={Instagram} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBar