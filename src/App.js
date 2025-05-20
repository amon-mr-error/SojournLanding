import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './sections/Features';
import Destinations from './sections/Destinations';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/features" element={<Features />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </Router>
      <div className="container mx-auto px-4 md:px-6">
        <Features />
        <Destinations />
      </div>
    </div>

  );
}

export default App;
