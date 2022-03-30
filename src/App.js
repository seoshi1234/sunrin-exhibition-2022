import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Header from './Header.js';
import { useEffect } from 'react';


function App() {
  

  return (
    <div className="App">
      <Header></Header>
      <Routes>        
        <Route path='/' element={<h1>123</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
