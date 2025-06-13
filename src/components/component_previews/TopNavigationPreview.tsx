import React, { useState } from 'react';
import { Search, Settings, LayoutGrid } from 'lucide-react';
import AppSwitcherDropdown from '../ui/app-switcher-dropdown';
import { Environment } from '../../types';

const TopNavigationPreview: React.FC = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState<Environment>('App');
  const [isAppSwitcherOpen, setIsAppSwitcherOpen] = useState(false);

  const renderTopNavigation = () => {
    return (
      <nav className="bg-white border-b border-n-75 rounded-lg">
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
            <h1 className="text-xl font-semibold text-n-500">
              Phenom CRM
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-n-200 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search" 
                className="pl-10 pr-4 py-2 w-80 border border-n-75 rounded-lg focus:ring-2 focus:ring-b-200 focus:border-b-200 outline-none text-sm"
              />
            </div>

            {/* App Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsAppSwitcherOpen(!isAppSwitcherOpen)}
                className="p-2 hover:bg-n-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-b-200"
                aria-label="App switcher"
              >
                <LayoutGrid className="w-5 h-5 text-n-300" />
              </button>

              <AppSwitcherDropdown
                currentEnvironment={currentEnvironment}
                onEnvironmentChange={setCurrentEnvironment}
                onClose={() => setIsAppSwitcherOpen(false)}
                isOpen={isAppSwitcherOpen}
              />
            </div>

            {/* Settings Icon - Only visible in App environment */}
            {currentEnvironment === 'App' && (
              <button className="p-2 hover:bg-n-50 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-n-300" />
              </button>
            )}

            {/* Profile Container */}
            <div className="w-8 h-8 bg-b-300 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        {/* Environment Controls */}
        <div className="bg-white p-6 rounded-lg border border-n-100">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Environment Controls</h2>
          <p className="text-sm text-gray-600 mb-4">
            Switch between different environments to see how the top navigation adapts (notice the settings icon visibility):
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setCurrentEnvironment('App')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentEnvironment === 'App'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
              }`}
            >
              App Environment
            </button>
            <button
              onClick={() => setCurrentEnvironment('Components')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentEnvironment === 'Components'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
              }`}
            >
              Components Environment
            </button>
            <button
              onClick={() => setCurrentEnvironment('Style Guide')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentEnvironment === 'Style Guide'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
              }`}
            >
              Style Guide Environment
            </button>
          </div>
        </div>

        {/* Current Environment Info */}
        <div className="bg-white p-6 rounded-lg border border-n-100">
          <h3 className="text-md font-medium text-gray-700 mb-3">Current Environment: {currentEnvironment}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Visible Elements</h4>
              <ul className="space-y-1">
                <li>• Logo and tenant name (Phenom CRM)</li>
                <li>• Search bar (320px width)</li>
                <li>• App switcher dropdown</li>
                <li>• User profile avatar (JD)</li>
                {currentEnvironment === 'App' && <li>• Settings icon (App only)</li>}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Behavior</h4>
              <ul className="space-y-1">
                <li>• Fixed position at top of viewport</li>
                <li>• 72px height (4.5rem)</li>
                <li>• White background with bottom border</li>
                <li>• App switcher shows current environment</li>
                <li>• Settings icon conditional visibility</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Live Demo */}
        <div className="bg-white rounded-lg border border-n-100 overflow-hidden">
          <div className="p-6 border-b border-n-100">
            <h2 className="text-lg font-medium text-gray-700">Live Top Navigation Demo</h2>
            <p className="text-sm text-gray-600 mt-1">
              Interactive top navigation component with simulated layout
            </p>
          </div>
          
          <div className="p-8 bg-gray-50">
            {/* Top Navigation */}
            {renderTopNavigation()}
            
            {/* Simulated Content Below */}
            <div className="mt-8 p-8 bg-white rounded-lg border border-n-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-n-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-n-200 rounded"></div>
                </div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  Page Content Area
                </h3>
                <p className="text-sm text-gray-600">
                  This represents the main page content that appears below the top navigation.
                  The top navigation is fixed and will stay at the top when scrolling.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Current Environment: {currentEnvironment}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo & Branding */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Logo & Branding</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-500 rounded"></div>
                <span>Phenom logo (SVG)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Tenant name display</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Consistent branding</span>
              </div>
            </div>
          </div>

          {/* Search Functionality */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Search Functionality</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-200 rounded"></div>
                <span>Search icon (left)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>320px input width</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Focus ring styling</span>
              </div>
            </div>
          </div>

          {/* App Switcher */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">App Switcher</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-300 rounded"></div>
                <span>Grid icon trigger</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Dropdown menu</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Environment switching</span>
              </div>
            </div>
          </div>

          {/* Settings & Profile */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Settings & Profile</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-300 rounded"></div>
                <span>Settings icon (App only)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-300 rounded-full"></div>
                <span>User avatar (JD)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Hover interactions</span>
              </div>
            </div>
          </div>

          {/* Responsive Design */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Responsive Design</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-100 rounded"></div>
                <span>Fixed positioning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Full width layout</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Consistent height</span>
              </div>
            </div>
          </div>

          {/* Accessibility */}
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Accessibility</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-200 rounded"></div>
                <span>Keyboard navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Focus management</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>ARIA labels</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Layout & Positioning</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fixed Position:</strong> Always stays at the top of the viewport</p>
                <p><strong>Height:</strong> 72px (4.5rem) consistent across all environments</p>
                <p><strong>Z-Index:</strong> Highest z-index to stay above all other content</p>
                <p><strong>Background:</strong> White background with subtle bottom border</p>
                <p><strong>Content Spacing:</strong> Main content should have top padding of 72px</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Environment Behavior</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>App Environment:</strong> Shows settings icon for app-specific actions</p>
                <p><strong>Components/Style Guide:</strong> Hides settings icon for cleaner interface</p>
                <p><strong>App Switcher:</strong> Provides quick access to all environments</p>
                <p><strong>Search:</strong> Global search functionality across all environments</p>
                <p><strong>Profile:</strong> User avatar and profile access always visible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationPreview;