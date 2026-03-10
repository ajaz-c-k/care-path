import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const HospitalMap = ({ markers = [] }) => {
    const kochiPosition = [9.9312, 76.2673];
    const zoomLevel = 13;

    // Use provided markers or fallback to empty array (or we could keep the old ones as default)
    const displayMarkers = markers.length > 0 ? markers : [
        {
            id: 'mock-1',
            name: "Aster Medcity",
            treatment: "Heart Surgery",
            cost: "₹2.5L",
            rating: 4.6,
            position: [10.0465, 76.2662]
        },
        {
            id: 'mock-2',
            name: "Amrita Hospital",
            treatment: "Cardiology",
            cost: "₹2.2L",
            rating: 4.7,
            position: [10.0332, 76.2917]
        },
        {
            id: 'mock-3',
            name: "Lakeshore Hospital",
            treatment: "Orthopedic Surgery",
            cost: "₹1.9L",
            rating: 4.5,
            position: [9.9221, 76.3115]
        }
    ];

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg border border-border-color">
            <MapContainer 
                center={kochiPosition} 
                zoom={zoomLevel} 
                scrollWheelZoom={true}
                className="w-full h-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {displayMarkers.map(hospital => (
                    <Marker key={hospital.id} position={hospital.position || kochiPosition}>
                        <Popup>
                            <div className="p-1 min-w-[150px]">
                                <h3 className="font-bold text-text-main text-lg mb-1">{hospital.name}</h3>
                                <p className="text-sm border-b border-border-color pb-2 mb-2">
                                    <span className="text-text-muted">Specialty:</span> {hospital.treatment || 'Multi-specialty'}
                                </p>
                                <div className="flex justify-between items-center bg-gray-50 p-2 rounded-md">
                                    <div>
                                        <p className="text-xs text-text-muted uppercase font-semibold">Est. Cost</p>
                                        <p className="text-primary font-bold">{hospital.cost || 'Contact for cost'}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-text-muted uppercase font-semibold">Rating</p>
                                        <p className="text-yellow-500 font-bold">★ {hospital.rating || 'N/A'}</p>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default HospitalMap;
