import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Vehicle } from '../types';
import { vehicles } from '../data/mockData';

const Map: React.FC = () => {
  return (
    <div className="flex-1 h-screen">
      <MapContainer
        center={[40.7128, -74.0060]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vehicles.map((vehicle: Vehicle) => (
          <Marker
            key={vehicle.id}
            position={[vehicle.position.lat, vehicle.position.lng]}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{vehicle.name}</h3>
                <p>Speed: {vehicle.speed} mph</p>
                <p>Status: {vehicle.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;