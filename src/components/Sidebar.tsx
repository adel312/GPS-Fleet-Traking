import React from 'react';
import { Menu, Users, Truck, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-16 bg-gray-900 text-white flex flex-col items-center py-4 fixed left-0 top-0">
      <div className="mb-8">
        <Menu className="w-6 h-6" />
      </div>
      <nav className="flex-1 flex flex-col gap-6">
        <button className="p-3 hover:bg-gray-800 rounded-lg transition-colors">
          <Truck className="w-6 h-6" />
        </button>
        <button className="p-3 hover:bg-gray-800 rounded-lg transition-colors">
          <Users className="w-6 h-6" />
        </button>
        <button className="p-3 hover:bg-gray-800 rounded-lg transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;