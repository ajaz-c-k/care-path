import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import HospitalSearch from './pages/HospitalSearch';
import CostComparison from './pages/CostComparison';
import AIPlanner from './pages/AIPlanner';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<HospitalSearch />} />
            <Route path="/compare" element={<CostComparison />} />
            <Route path="/planner" element={<AIPlanner />} />
            <Route path="/hospitals" element={<div className="py-12 text-center text-2xl font-bold">Hospital Discovery coming soon...</div>} />
            <Route path="/dashboard" element={<div className="py-12 text-center text-2xl font-bold">User Dashboard coming soon...</div>} />
            <Route path="/login" element={<div className="py-12 text-center text-2xl font-bold">Login & Signup coming soon...</div>} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            &copy; {new Date().getFullYear()} CureRoute. All rights reserved. Professional Medical Travel.
          </div>
        </footer>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
