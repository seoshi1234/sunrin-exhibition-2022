import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './pages/Header.js';
import Home from './pages/Home.js';
import Footer from './pages/Footer.js';
import Contact from './pages/Contact.js';
import Work from './pages/Work.js';
import WorkDetail from './pages/WorkDetail';
import { useEffect } from 'react';
import Profile from './pages/Profile';


function App(props) {

  return (
    <div className="App">
      <Header />
      <div className="app_header-box" />
      <Routes>        
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/work' element={<Work data={props.data}/>} />
        <Route exact path='/work/:title' element={<WorkDetail data={props.data}/>} />
        <Route exact path='/profile' element={<Profile data={props.profileData}/>}></Route>
      </Routes>
      <div className="app_footer-box" />
      <Footer />
    </div>
  );
}

export default App;
