import React from 'react';
import { Search, Settings, ChevronDown } from 'lucide-react';
import { Environment } from '../../types';

interface TopNavigationProps {
  currentEnvironment: Environment;
  onEnvironmentChange: (env: Environment) => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ 
  currentEnvironment, 
  onEnvironmentChange 
}) => {
  const environments: Environment[] = ['App', 'Components', 'Style Guide'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-18 px-6">
        {/* Left Section - Logo and Tenant Name */}
        <div className="flex items-center space-x-4">
          {/* Logo Container */}
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.056 21.1528C9.60842 22.5367 6.57346 22.5367 4.13989 21.1528C3.45457 20.7653 2.58744 21.0006 2.19583 21.6787C1.80423 22.3568 2.04199 23.2148 2.7273 23.6023C4.37765 24.5433 6.23779 25 8.09793 25C9.95807 25 11.8182 24.5295 13.4686 23.6023C14.1539 23.2148 14.3916 22.3568 14 21.6787C13.6084 21.0006 12.7413 20.7653 12.056 21.1528Z" fill="black"/>
              <path d="M13.0908 2C9.58028 2 6.71314 4.83694 6.71314 8.31047C6.71314 8.37966 6.71314 8.44886 6.71314 8.51805C6.71314 8.55957 6.71314 8.58725 6.71314 8.62876V17.9561C6.71314 18.731 7.3565 19.3676 8.13972 19.3676C8.92293 19.3676 9.56629 18.731 9.56629 17.9561V13.5692C10.5733 14.2335 11.7901 14.6209 13.0908 14.6209C16.6152 14.6209 19.4684 11.784 19.4684 8.31047C19.4684 4.83694 16.6152 2 13.0908 2ZM13.0908 11.8117C11.1467 11.8117 9.56629 10.2479 9.56629 8.32431C9.56629 6.40072 11.1467 4.83694 13.0908 4.83694C15.0348 4.83694 16.6152 6.40072 16.6152 8.32431C16.6292 10.2341 15.0348 11.8117 13.0908 11.8117Z" fill="#353B46"/>
            </svg>
          </div>
          
          {/* Tenant Name */}
          <h1 className="text-xl font-semibold text-gray-800">
            Phenom CRM
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search" 
              className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none text-sm"
            />
          </div>

          {/* Environment Dropdown */}
          <div className="relative">
            <select 
              value={currentEnvironment}
              onChange={(e) => onEnvironmentChange(e.target.value as Environment)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-600 focus:border-primary-600 outline-none text-sm font-medium cursor-pointer"
            >
              {environments.map((env) => (
                <option key={env} value={env}>{env}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

          {/* Settings Icon - Only visible in App environment */}
          {currentEnvironment === 'App' && (
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {/* Profile Container */}
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">JD</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;