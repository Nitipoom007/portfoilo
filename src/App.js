import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
