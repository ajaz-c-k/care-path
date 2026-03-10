import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Search, Calculator, Sparkles, UserCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Find Hospital', path: '/search', icon: Search },
        { name: 'Compare Costs', path: '/compare', icon: Calculator },
        { name: 'AI Planner', path: '/planner', icon: Sparkles },
    ];

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <Link to="/" className="navbar-brand">
                        <Stethoscope size={32} className="navbar-brand-icon" />
                        <span>CureRoute</span>
                    </Link>

                    <div className="navbar-links">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`nav-link ${isActive ? 'active' : ''}`}
                                >
                                    <Icon size={18} />
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="navbar-actions">
                        <button className="login-btn">
                            <UserCircle size={20} />
                            <span>Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
