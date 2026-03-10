import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Search, Calculator, Sparkles, UserCircle } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Find Hospital', path: '/search', icon: Search },
        { name: 'Compare Costs', path: '/compare', icon: Calculator },
        { name: 'AI Planner', path: '/planner', icon: Sparkles },
    ];

    return (
        <nav className="bg-bg-card border-b border-border-color sticky top-0 z-50">
            <div className="container">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-text-main tracking-tight">
                        <Stethoscope size={32} className="text-primary" />
                        <span>CureRoute</span>
                    </Link>

                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                                        isActive ? 'text-primary' : 'text-text-muted hover:text-primary'
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span>{link.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-sm font-medium text-text-muted bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-primary">
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
