import React from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import VehicleList from './components/VehicleList';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex ml-16 w-full">
        <VehicleList />
        <Map />
      </div>
    </div>
  );
}

export default App;