import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Footer from './Footer.js';
import { useEffect } from 'react';


function App() {
  

  return (
    <div className="App">
      <Header />
      <div className="Routes-Wrapper">
        <Routes>        
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
