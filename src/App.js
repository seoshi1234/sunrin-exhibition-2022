import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import { useEffect } from 'react';


function App() {
  

  return (
    <div className="App">
      <Header />
      <div className="app_header-box" />
      <Routes>        
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <div className="app_footer-box" />
      <Footer />
    </div>
  );
}

export default App;
