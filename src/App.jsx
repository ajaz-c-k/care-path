import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">
            &copy; {new Date().getFullYear()} CureRoute. All rights reserved. Professional Medical Travel.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
