import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    Stethoscope, 
    Home, 
    Search, 
    Building2, 
    Sparkles, 
    Calculator, 
    LayoutDashboard, 
    UserCircle 
} from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Find Treatment', path: '/search', icon: Search },
        { name: 'Hospitals', path: '/hospitals', icon: Building2 },
        { name: 'AI Planner', path: '/planner', icon: Sparkles },
        { name: 'Cost Estimator', path: '/compare', icon: Calculator },
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    ];

    return (
        <nav className="bg-bg-card border-b border-border-color sticky top-0 z-50">
            <div className="container">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-text-main tracking-tight">
                        <Stethoscope size={32} className="text-primary" />
                        <span>CureRoute</span>
                    </Link>

                    <div className="hidden lg:flex gap-6">
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
                            <span>Login / Sign Up</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
