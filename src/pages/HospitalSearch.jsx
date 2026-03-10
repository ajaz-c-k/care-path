import React, { useEffect, useState } from 'react';
import HospitalMap from '../components/HospitalMap';
import { supabase } from '../lib/supabase';

const HospitalSearch = () => {
    const [hospitals, setHospitals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHospitals = async () => {
            try {
                const { data, error } = await supabase
                    .from('hospitals')
                    .select('*');
                
                if (error) throw error;
                setHospitals(data || []);
            } catch (error) {
                console.error('Error fetching hospitals:', error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHospitals();
    }, []);

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
                    {loading ? (
                        <div className="w-full h-[500px] flex items-center justify-center bg-gray-50 rounded-xl border border-border-color">
                            <div className="flex flex-col items-center gap-4">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                                <p className="text-text-muted font-medium">Loading hospital network...</p>
                            </div>
                        </div>
                    ) : (
                        <HospitalMap markers={hospitals.map(h => ({
                            id: h.id,
                            name: h.name,
                            treatment: 'Multi-specialty',
                            cost: 'Consult for cost',
                            rating: h.rating,
                            position: [9.9312 + (Math.random() - 0.5) * 0.1, 76.2673 + (Math.random() - 0.5) * 0.1]
                        }))} />
                    )}
                </div>
                
                <div className="space-y-6">
                    <div className="card">
                        <h3 className="font-semibold text-lg mb-4">Search Filters</h3>
                        <p className="text-sm text-text-muted">Filtering options based on specialty and cost will be available here.</p>
                        {hospitals.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-border-color">
                                <p className="text-xs font-bold text-text-muted uppercase mb-2">Available Hospitals ({hospitals.length})</p>
                                <ul className="space-y-2">
                                    {hospitals.slice(0, 5).map(h => (
                                        <li key={h.id} className="text-sm font-medium text-text-main flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                            {h.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
