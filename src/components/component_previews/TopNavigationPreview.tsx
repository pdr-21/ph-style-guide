import React, { useState } from 'react';
import TopNavigation from '../layout/TopNavigation';
import { Environment } from '../../types';

const TopNavigationPreview: React.FC = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState<Environment>('App');

  return (
    <div className="min-h-screen bg-gr-25">
      <div className="w-full space-y-8">
        {/* Header Info */}
        <div className="p-8 pb-0">
          {/* Environment Controls */}
          <div className="bg-white p-6 rounded-lg border border-n-100 mb-8">
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
        </div>

        {/* Live Demo */}
        <div className="relative">
          <TopNavigation
            currentEnvironment={currentEnvironment}
            onEnvironmentChange={setCurrentEnvironment}
          />
          
          {/* Simulated Content Below */}
          <div className="pt-18 p-8">
            <div className="bg-white rounded-lg border border-n-100 p-8">
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
        <div className="p-8 pt-0">
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
        </div>

        {/* Usage Guidelines */}
        <div className="p-8 pt-0">
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
    </div>
  );
};

export default TopNavigationPreview;