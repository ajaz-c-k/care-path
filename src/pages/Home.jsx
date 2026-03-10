import React from 'react';
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">
                    Your Trusted Partner in <span className="hero-title-highlight">Medical Travel</span>
                </h1>
                <p className="hero-subtitle">
                    CureRoute simplifies your healthcare journey. Find top-rated hospitals, compare transparent treatment costs, and plan your entire recovery process with our AI consultant.
                </p>
                <div className="hero-actions">
                    <Link to="/search" className="btn btn-primary">
                        <span>Find a Hospital</span>
                        <ArrowRight size={18} />
                    </Link>
                    <Link to="/planner" className="btn btn-secondary">
                        Try AI Planner
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="card feature-card">
                    <div className="feature-icon-wrapper">
                        <Activity size={32} />
                    </div>
                    <h3 className="feature-title">Smart Discovery</h3>
                    <p className="feature-desc">Find vetted hospitals by expertise, success rates, and real patient reviews.</p>
                </div>

                <div className="card feature-card">
                    <div className="feature-icon-wrapper">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="feature-title">Transparent Pricing</h3>
                    <p className="feature-desc">Compare verified treatment costs across top facilities with zero hidden fees.</p>
                </div>

                <div className="card feature-card">
                    <div className="feature-icon-wrapper">
                        <HeartPulse size={32} />
                    </div>
                    <h3 className="feature-title">End-to-End Support</h3>
                    <p className="feature-desc">From AI planning to local guides, we ensure a seamless recovery journey.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
