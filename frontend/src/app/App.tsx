import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cases from './pages/Gallery';
import Contact from './pages/Contact';
import '../styles/fonts.css';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}

