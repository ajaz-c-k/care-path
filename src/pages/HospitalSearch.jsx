import React from 'react';
import HospitalMap from '../components/HospitalMap';

const HospitalSearch = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-main mb-2">Find a Hospital</h1>
                <p className="text-text-muted text-lg">
                    Explore highly-rated medical facilities in Kochi, Kerala. Click on markers to view treatment details and compare costs.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
                <div className="lg:col-span-3">
                    <HospitalMap />
                </div>
                
                <div className="space-y-6">
                    <div className="card">
                        <h3 className="font-semibold text-lg mb-4">Search Filters</h3>
                        <p className="text-sm text-text-muted">Filtering options based on specialty and cost will be available here.</p>
                    </div>
                    
                    <div className="card bg-primary-light border-primary/20">
                        <h3 className="font-semibold text-primary mb-2">Need Help?</h3>
                        <p className="text-sm text-primary/80 mb-4 font-medium">Use our AI Planner to find the best treatment path for your budget.</p>
                        <button className="btn btn-primary w-full shadow-md">Try AI Planner</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HospitalSearch;
