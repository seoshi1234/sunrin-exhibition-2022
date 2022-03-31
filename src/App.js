import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
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
    </div>
  );
}

export default App;
