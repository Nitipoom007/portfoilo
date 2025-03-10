import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './contents/Home';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Certificate from './contents/Certificate';
import Contact from './contents/Contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certi" element={<Certificate />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;