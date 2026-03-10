import React, { useState, useMemo } from 'react';
import { 
    Search, 
    MapPin, 
    Wallet, 
    ChevronRight, 
    Star, 
    Stethoscope, 
    Calendar, 
    Clock, 
    Plane, 
    Hotel, 
    Truck, 
    Pill, 
    TrendingDown,
    Sparkles,
    Building2
} from 'lucide-react';
import HospitalMap from '../components/HospitalMap';

const AIPlanner = () => {
    const [step, setStep] = useState(1);
    const [searchData, setSearchData] = useState({ treatment: '', location: '', budget: '' });
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [travelData, setTravelData] = useState({ fromCity: '', travelers: 1, hotelClass: 'Standard' });
    const [isCheapestView, setIsCheapestView] = useState(false);

    const hospitals = [
        { id: 1, name: "Aster Medcity", rating: 4.6, cost: 250000, specialization: "Heart Surgery", location: "Kochi" },
        { id: 2, name: "Amrita Hospital", rating: 4.7, cost: 220000, specialization: "Cardiology", location: "Kochi" },
        { id: 3, name: "Lakeshore Hospital", rating: 4.5, cost: 190000, specialization: "Orthopedic Surgery", location: "Kochi" }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        // In a real app, this would filter or fetch
    };

    const selectHospital = (hospital) => {
        setSelectedHospital(hospital);
        setStep(2);
    };

    const costBreakdown = useMemo(() => {
        if (!selectedHospital) return null;
        const flight = 35000 * travelData.travelers;
        const hotelMultipliers = { 'Budget': 0.6, 'Standard': 1, 'Premium': 1.8 };
        const hotel = 18000 * hotelMultipliers[travelData.hotelClass];
        const medicine = 8000;
        const transport = 5000;
        const total = selectedHospital.cost + flight + hotel + medicine + transport;
        
        return { surgery: selectedHospital.cost, flight, hotel, medicine, transport, total };
    }, [selectedHospital, travelData]);

    const cheapestPlan = useMemo(() => {
        const cheapestHospital = hospitals.reduce((prev, curr) => prev.cost < curr.cost ? prev : curr);
        const flight = 35000 * travelData.travelers;
        const hotelMultipliers = { 'Budget': 0.6, 'Standard': 1, 'Premium': 1.8 };
        const hotel = 18000 * hotelMultipliers[travelData.hotelClass];
        const cost = cheapestHospital.cost + flight + hotel + 8000 + 5000;
        return { hospital: cheapestHospital.name, total: cost };
    }, [travelData]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Header / Stepper */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-text-main mb-4">Medical Travel Planner</h1>
                <div className="flex justify-center items-center gap-4 max-w-2xl mx-auto">
                    {[1, 2, 3].map(i => (
                        <React.Fragment key={i}>
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                                step >= i ? 'bg-primary text-white shadow-lg' : 'bg-gray-200 text-text-muted'
                            }`}>
                                {i}
                            </div>
                            {i < 3 && <div className={`h-1 w-16 rounded ${step > i ? 'bg-primary' : 'bg-gray-200'}`} />}
                        </React.Fragment>
                    ))}
                </div>
                <div className="flex justify-between max-w-2xl mx-auto mt-2 text-xs font-semibold text-text-muted uppercase tracking-wider px-2">
                    <span>Find Treatment</span>
                    <span>AI Recommendation</span>
                    <span>Cost Planner</span>
                </div>
            </div>

            {/* STEP 1: Find Treatment */}
            {step === 1 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <section className="card p-8 shadow-xl border-primary/5">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                             <Search className="text-primary" /> Search Hospitals
                        </h2>
                        <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text-muted uppercase">Treatment</label>
                                <div className="relative">
                                    <Stethoscope className="absolute left-3 top-3 text-text-muted" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="e.g. Knee Replacement" 
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-border-color rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        value={searchData.treatment}
                                        onChange={e => setSearchData({...searchData, treatment: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text-muted uppercase">Location</label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-text-muted" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="City or Country" 
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-border-color rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        value={searchData.location}
                                        onChange={e => setSearchData({...searchData, location: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-text-muted uppercase">Budget</label>
                                <div className="relative">
                                    <Wallet className="absolute left-3 top-3 text-text-muted" size={18} />
                                    <input 
                                        type="text" 
                                        placeholder="e.g. ₹2–3 Lakhs" 
                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-border-color rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        value={searchData.budget}
                                        onChange={e => setSearchData({...searchData, budget: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="flex items-end">
                                <button className="btn btn-primary w-full py-3.5 shadow-md shadow-primary/20 rounded-xl flex gap-2">
                                    <Sparkles size={18} /> Search Hospitals
                                </button>
                            </div>
                        </form>
                    </section>

                    <div className="grid md:grid-cols-3 gap-8">
                        {hospitals.map(h => (
                            <div key={h.id} className="card hover:border-primary/30 transition-all hover:-translate-y-1 duration-300 group">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-text-main group-hover:text-primary transition-colors">{h.name}</h3>
                                    <div className="flex items-center gap-1 bg-yellow-50 text-yellow-600 px-2 py-1 rounded-lg text-sm font-bold">
                                        <Star size={14} fill="currentColor" /> {h.rating}
                                    </div>
                                </div>
                                <p className="text-sm text-text-muted mb-4 font-medium">{h.specialization}</p>
                                <div className="mt-auto pt-4 border-t border-border-color flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-text-muted uppercase font-bold">Est. Cost</p>
                                        <p className="text-lg font-bold text-primary">₹{(h.cost/100000).toFixed(1)}L</p>
                                    </div>
                                    <button 
                                        onClick={() => selectHospital(h)}
                                        className="flex items-center gap-1 text-sm font-bold text-primary group/btn"
                                    >
                                        Select <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* STEP 2: AI Recommendation Panel */}
            {step === 2 && (
                <div className="space-y-8 animate-in fade-in zoom-in duration-500 max-w-3xl mx-auto">
                    <section className="card p-0 overflow-hidden shadow-2xl border-primary/20">
                        <div className="bg-primary p-6 text-white flex items-center gap-3">
                            <Sparkles size={24} />
                            <h2 className="text-xl font-bold">AI Recommended Plan</h2>
                        </div>
                        <div className="p-8 space-y-8">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-primary-light text-primary rounded-xl"><Building2 size={24} /></div>
                                    <div>
                                        <label className="text-xs font-bold text-text-muted uppercase">Hospital</label>
                                        <p className="text-lg font-bold text-text-main">{selectedHospital.name}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-primary-light text-primary rounded-xl"><Calendar size={24} /></div>
                                    <div>
                                        <label className="text-xs font-bold text-text-muted uppercase">Est. Surgery Date</label>
                                        <p className="text-lg font-bold text-text-main">Oct 15, 2026</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-primary-light text-primary rounded-xl"><Clock size={24} /></div>
                                    <div>
                                        <label className="text-xs font-bold text-text-muted uppercase">Hospital Stay</label>
                                        <p className="text-lg font-bold text-text-main">6 days</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-3 bg-primary-light text-primary rounded-xl"><Sparkles size={24} /></div>
                                    <div>
                                        <label className="text-xs font-bold text-text-muted uppercase">Recovery Time</label>
                                        <p className="text-lg font-bold text-text-main">4–6 weeks</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-4 bg-gray-50 rounded-xl border border-border-color">
                                <p className="text-sm text-text-main leading-relaxed">
                                    <strong>AI Insight:</strong> Based on your search for {searchData.treatment || 'this treatment'}, {selectedHospital.name} offers the best success-to-cost ratio. Dr. Ravi Kumar, a senior consultant with 20+ years of experience, is available for your procedure.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <button onClick={() => setStep(1)} className="btn btn-secondary flex-1 py-4 font-bold border-2">← Change Hospital</button>
                                <button onClick={() => setStep(3)} className="btn btn-primary flex-1 py-4 font-bold shadow-lg shadow-primary/20">Estimate Trip Cost</button>
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {/* STEP 3: Cost Planner */}
            {step === 3 && (
                <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Inputs */}
                        <section className="card p-8">
                            <h2 className="text-2xl font-bold mb-8">Trip Details</h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-text-muted uppercase flex items-center gap-2">
                                        <Plane size={16} /> From City
                                    </label>
                                    <input 
                                        type="text" 
                                        placeholder="Enter your city" 
                                        className="w-full p-4 bg-gray-50 border border-border-color rounded-xl outline-none"
                                        value={travelData.fromCity}
                                        onChange={e => setTravelData({...travelData, fromCity: e.target.value})}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-muted uppercase flex items-center gap-2">
                                             Number of Travelers
                                        </label>
                                        <input 
                                            type="number" 
                                            className="w-full p-4 bg-gray-50 border border-border-color rounded-xl outline-none"
                                            value={travelData.travelers}
                                            onChange={e => setTravelData({...travelData, travelers: parseInt(e.target.value) || 1})}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-text-muted uppercase flex items-center gap-2">
                                            <Hotel size={16} /> Hotel Type
                                        </label>
                                        <select 
                                            className="w-full p-4 bg-gray-50 border border-border-color rounded-xl outline-none appearance-none"
                                            value={travelData.hotelClass}
                                            onChange={e => setTravelData({...travelData, hotelClass: e.target.value})}
                                        >
                                            <option>Budget</option>
                                            <option>Standard</option>
                                            <option>Premium</option>
                                        </select>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => setIsCheapestView(true)}
                                    className="btn btn-secondary w-full py-4 font-bold border-2 hover:bg-primary-light hover:text-primary hover:border-primary/20 transition-all flex gap-2"
                                >
                                    <TrendingDown size={18} /> Find Cheapest Plan
                                </button>
                            </div>
                        </section>

                        {/* Breakdown */}
                        <section className="card p-8 bg-text-main text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10"><Sparkles size={80} /></div>
                            <h2 className="text-2xl font-bold mb-8 relative z-10">Cost Breakdown</h2>
                            
                            <div className="space-y-5 relative z-10">
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Stethoscope size={18} /> Treatment</span>
                                    <span className="font-bold text-white">₹{costBreakdown.surgery.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Plane size={18} /> Flights</span>
                                    <span className="font-bold text-white">₹{costBreakdown.flight.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Hotel size={18} /> Hotel</span>
                                    <span className="font-bold text-white">₹{costBreakdown.hotel.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Pill size={18} /> Medicine</span>
                                    <span className="font-bold text-white">₹{costBreakdown.medicine.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Truck size={18} /> Transport</span>
                                    <span className="font-bold text-white">₹{costBreakdown.transport.toLocaleString()}</span>
                                </div>
                                <div className="pt-6 mt-6 border-t border-white/20">
                                    <div className="flex justify-between items-end">
                                        <span className="text-lg font-bold">Total Estimated Cost</span>
                                        <span className="text-3xl font-black text-primary">₹{costBreakdown.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Cheapest Result Overlay */}
                    {isCheapestView && (
                        <div className="p-8 bg-green-50 border-2 border-green-200 rounded-3xl animate-in zoom-in duration-300 flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                                     Best Value Option
                                </div>
                                <h3 className="text-3xl font-black text-text-main mb-1">Cheapest Plan Found!</h3>
                                <p className="text-green-700 font-medium">Switch to <span className="font-bold">{cheapestPlan.hospital}</span> and save up to <span className="underline decoration-2">₹{(costBreakdown.total - cheapestPlan.total).toLocaleString()}</span></p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-text-muted uppercase">Cheapest Total</p>
                                <p className="text-4xl font-black text-green-600">₹{cheapestPlan.total.toLocaleString()}</p>
                                <button className="mt-2 text-sm font-bold text-green-700 hover:underline">Apply this plan & save</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Map Section */}
            <div className="mt-20">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Hospital Network Map</h2>
                    <p className="text-text-muted">Explore clinics and hospitals in your target region.</p>
                </div>
                <HospitalMap />
            </div>
        </div>
    );
};

export default AIPlanner;
