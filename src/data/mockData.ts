import { Vehicle, Driver, Fleet } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Truck 01',
    plateNumber: 'ABC123',
    type: 'truck',
    status: 'active',
    position: { lat: 40.7128, lng: -74.0060 },
    speed: 65,
    heading: 90,
    lastUpdate: new Date().toISOString()
  },
  {
    id: 'v2',
    name: 'Van 01',
    plateNumber: 'XYZ789',
    type: 'van',
    status: 'active',
    position: { lat: 40.7580, lng: -73.9855 },
    speed: 45,
    heading: 180,
    lastUpdate: new Date().toISOString()
  }
];

export const drivers: Driver[] = [
  {
    id: 'd1',
    name: 'John Doe',
    phone: '+1 555-0123',
    status: 'driving',
    vehicleId: 'v1'
  },
  {
    id: 'd2',
    name: 'Jane Smith',
    phone: '+1 555-0124',
    status: 'driving',
    vehicleId: 'v2'
  }
];

export const fleets: Fleet[] = [
  {
    id: 'f1',
    name: 'Main Fleet',
    vehicles: ['v1', 'v2'],
    drivers: ['d1', 'd2']
  }
];