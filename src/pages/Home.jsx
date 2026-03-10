import React from 'react';
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col gap-16 py-8">
            {/* Hero Section */}
            <section className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-text-main leading-tight mb-6 tracking-tight">
                    Your Trusted Partner in <span className="text-primary">Medical Travel</span>
                </h1>
                <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                    CureRoute simplifies your healthcare journey. Find top-rated hospitals, compare transparent treatment costs, and plan your entire recovery process with our AI consultant.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
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
            <section className="grid gap-8 py-12 md:grid-cols-3">
                <div className="card text-center flex flex-col items-center p-8">
                    <div className="bg-primary-light p-4 rounded-full mb-6 text-primary flex items-center justify-center">
                        <Activity size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-text-main">Smart Discovery</h3>
                    <p className="text-text-muted leading-relaxed">Find vetted hospitals by expertise, success rates, and real patient reviews.</p>
                </div>

                <div className="card text-center flex flex-col items-center p-8">
                    <div className="bg-primary-light p-4 rounded-full mb-6 text-primary flex items-center justify-center">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-text-main">Transparent Pricing</h3>
                    <p className="text-text-muted leading-relaxed">Compare verified treatment costs across top facilities with zero hidden fees.</p>
                </div>

                <div className="card text-center flex flex-col items-center p-8">
                    <div className="bg-primary-light p-4 rounded-full mb-6 text-primary flex items-center justify-center">
                        <HeartPulse size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-text-main">End-to-End Support</h3>
                    <p className="text-text-muted leading-relaxed">From AI planning to local guides, we ensure a seamless recovery journey.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
