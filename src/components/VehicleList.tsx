import React from 'react';
import { vehicles } from '../data/mockData';
import { Circle } from 'lucide-react';

const VehicleList: React.FC = () => {
  return (
    <div className="w-80 bg-white h-screen overflow-y-auto shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Vehicles</h2>
      </div>
      <div className="divide-y">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{vehicle.name}</h3>
                <p className="text-sm text-gray-500">{vehicle.plateNumber}</p>
              </div>
              <div className="flex items-center">
                <Circle
                  className={`w-3 h-3 ${
                    vehicle.status === 'active'
                      ? 'text-green-500'
                      : vehicle.status === 'inactive'
                      ? 'text-gray-500'
                      : 'text-yellow-500'
                  }`}
                  fill="currentColor"
                />
                <span className="ml-2 text-sm">{vehicle.speed} mph</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleList;