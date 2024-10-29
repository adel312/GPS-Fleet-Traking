export interface Vehicle {
  id: string;
  name: string;
  plateNumber: string;
  type: 'truck' | 'van' | 'car';
  status: 'active' | 'inactive' | 'maintenance';
  position: {
    lat: number;
    lng: number;
  };
  speed: number;
  heading: number;
  lastUpdate: string;
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  status: 'available' | 'driving' | 'off-duty';
  vehicleId?: string;
}

export interface Fleet {
  id: string;
  name: string;
  vehicles: string[];
  drivers: string[];
}