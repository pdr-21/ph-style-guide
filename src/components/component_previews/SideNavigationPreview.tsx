import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  Settings, 
  BarChart3,
  Mail,
  Phone
} from 'lucide-react';
import SideNavigationItem from '../layout/SideNavigationItem';
import { Environment, NavigationItem } from '../../types';

const SideNavigationPreview: React.FC = () => {
  const [currentView, setCurrentView] = useState<Environment>('App');
  const [activeStyleGuideSection, setActiveStyleGuideSection] = useState('colors');
  const [activeComponentSection, setActiveComponentSection] = useState('buttons');
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleEnvironmentChange = (view: Environment, subView?: string) => {
    setCurrentView(view);
    if (view === 'Style Guide' && subView) {
      setActiveStyleGuideSection(subView);
    } else if (view === 'Components' && subView) {
      setActiveComponentSection(subView);
    }
  };

  // App navigation items (icons only)
  const appNavigationItems: NavigationItem[] = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
    { id: 'contacts', icon: Users, label: 'Contacts', path: '/contacts' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar' },
    { id: 'reports', icon: BarChart3, label: 'Reports', path: '/reports' },
    { id: 'documents', icon: FileText, label: 'Documents', path: '/documents' },
    { id: 'email', icon: Mail, label: 'Email', path: '/email' },
    { id: 'calls', icon: Phone, label: 'Calls', path: '/calls' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  // Style Guide navigation items (text only)
  const styleGuideItems: NavigationItem[] = [
    { id: 'colors', label: 'Colors', path: '/style-guide/colors' },
    { id: 'typography', label: 'Typography', path: '/style-guide/typography' },
    { id: 'spacing', label: 'Spacing', path: '/style-guide/spacing' },
    { id: 'corner-radius', label: 'Corner Radius', path: '/style-guide/corner-radius' },
    { id: 'borders', label: 'Borders', path: '/style-guide/borders' },
    { id: 'shadows', label: 'Shadows', path: '/style-guide/shadows' },
  ];

  // Components navigation items (text only)
  const componentItems: NavigationItem[] = [
    { id: 'buttons', label: 'Buttons', path: '/components/buttons' },
    { id: 'inputs', label: 'Inputs', path: '/components/inputs' },
    { id: 'side-nav-item', label: 'Side Nav Item', path: '/components/side-nav-item' },
    { id: 'side-nav', label: 'Side Navigation', path: '/components/side-nav' },
    { id: 'top-nav', label: 'Top Navigation', path: '/components/top-nav' },
  ];

  const renderSideNavigation = () => {
    if (currentView === 'App') {
      return (
        <aside className="w-16 h-96 bg-gr-25 border-r border-n-75 rounded-lg">
          <nav className="py-4">
            <ul className="space-y-2">
              {appNavigationItems.map((item) => (
                <SideNavigationItem
                  key={item.id}
                  item={item}
                  isActive={activeItem === item.id}
                  onClick={() => setActiveItem(item.id)}
                  type="icon"
                />
              ))}
            </ul>
          </nav>
        </aside>
      );
    } else if (currentView === 'Style Guide') {
      return (
        <aside className="w-48 h-96 bg-gr-25 border-r border-n-75 rounded-lg">
          <nav className="py-4">
            <ul className="space-y-1">
              {styleGuideItems.map((item) => (
                <SideNavigationItem
                  key={item.id}
                  item={item}
                  isActive={activeStyleGuideSection === item.id}
                  onClick={() => handleEnvironmentChange('Style Guide', item.id)}
                  type="text"
                />
              ))}
            </ul>
          </nav>
        </aside>
      );
    } else if (currentView === 'Components') {
      return (
        <aside className="w-48 h-96 bg-gr-25 border-r border-n-75 rounded-lg">
          <nav className="py-4">
            <ul className="space-y-1">
              {componentItems.map((item) => (
                <SideNavigationItem
                  key={item.id}
                  item={item}
                  isActive={activeComponentSection === item.id}
                  onClick={() => handleEnvironmentChange('Components', item.id)}
                  type="text"
                />
              ))}
            </ul>
          </nav>
        </aside>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        {/* Environment Controls */}
        <div className="bg-white p-6 rounded-lg border border-n-100">
          <h2 className="text-lg font-medium text-gray-700 mb-4">Environment Controls</h2>
          <p className="text-sm text-gray-600 mb-4">
            Switch between different environments to see how the side navigation adapts:
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => handleEnvironmentChange('App')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'App'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
              }`}
            >
              App Environment
            </button>
            <button
              onClick={() => handleEnvironmentChange('Components')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'Components'
                  ? 'bg-b-200 text-white'
                  : 'bg-n-50 text-n-400 hover:bg-n-100 hover:text-n-500'
              }`}
            >
              Components Environment
            </button>
            <button
              onClick={() => handleEnvironmentChange('Style Guide')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'Style Guide'
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
          <h3 className="text-md font-medium text-gray-700 mb-3">Current Environment: {currentView}</h3>
          <div className="text-sm text-gray-600">
            {currentView === 'App' && (
              <div>
                <p><strong>Width:</strong> 64px (4rem)</p>
                <p><strong>Navigation Type:</strong> Icon-based with tooltips</p>
                <p><strong>Items:</strong> Dashboard, Contacts, Calendar, Reports, Documents, Email, Calls, Settings</p>
                <p><strong>Active Section:</strong> Dashboard (simulated)</p>
              </div>
            )}
            {currentView === 'Components' && (
              <div>
                <p><strong>Width:</strong> 192px (12rem)</p>
                <p><strong>Navigation Type:</strong> Text-based labels</p>
                <p><strong>Items:</strong> Buttons, Inputs, Dropdowns, Modals, Cards</p>
                <p><strong>Active Section:</strong> {activeComponentSection}</p>
              </div>
            )}
            {currentView === 'Style Guide' && (
              <div>
                <p><strong>Width:</strong> 192px (12rem)</p>
                <p><strong>Navigation Type:</strong> Text-based labels</p>
                <p><strong>Items:</strong> Colors, Typography, Spacing, Corner Radius, Borders, Shadows</p>
                <p><strong>Active Section:</strong> {activeStyleGuideSection}</p>
              </div>
            )}
          </div>
        </div>

        {/* Side Navigation Demo */}
        <div className="bg-white rounded-lg border border-n-100 overflow-hidden">
          <div className="p-6 border-b border-n-100">
            <h2 className="text-lg font-medium text-gray-700">Live Side Navigation Demo</h2>
            <p className="text-sm text-gray-600 mt-1">
              Interactive side navigation component with simulated layout
            </p>
          </div>
          
          <div className="flex p-8 bg-gray-50">
            {/* Side Navigation */}
            {renderSideNavigation()}
            
            {/* Simulated Content Area */}
            <div className="flex-1 ml-8 p-8 bg-white rounded-lg border border-n-100">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-n-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-n-200 rounded"></div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    {currentView} Content Area
                  </h3>
                  <p className="text-sm text-gray-600">
                    This represents the main content area that adjusts based on the side navigation width
                  </p>
                  {currentView !== 'App' && (
                    <p className="text-xs text-gray-500 mt-2">
                      Active: {currentView === 'Style Guide' ? activeStyleGuideSection : activeComponentSection}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">App Environment</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Icon-based navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-100 rounded"></div>
                <span>64px width (compact)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Tooltips on hover</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-k-200 rounded"></div>
                <span>8 navigation items</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Components Environment</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Text-based navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-100 rounded"></div>
                <span>192px width (expanded)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Component categories</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-k-200 rounded"></div>
                <span>5 component types</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-n-100">
            <h3 className="text-md font-medium text-gray-700 mb-4">Style Guide Environment</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-b-200 rounded"></div>
                <span>Text-based navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-n-100 rounded"></div>
                <span>192px width (expanded)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-g-200 rounded"></div>
                <span>Design system sections</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-k-200 rounded"></div>
                <span>6 style categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Layout Behavior</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Fixed Position:</strong> Side navigation is fixed to the left side of the viewport</p>
                <p><strong>Height:</strong> Full viewport height minus top navigation (72px)</p>
                <p><strong>Z-Index:</strong> Positioned above main content but below top navigation</p>
                <p><strong>Responsive:</strong> Maintains consistent width across all screen sizes</p>
                <p><strong>Content Offset:</strong> Main content area adjusts margin based on navigation width</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Environment Switching</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Dynamic Width:</strong> Automatically adjusts between 64px and 192px</p>
                <p><strong>Content Type:</strong> Switches between icon and text navigation</p>
                <p><strong>Active States:</strong> Maintains separate active states per environment</p>
                <p><strong>Smooth Transitions:</strong> Content area animates when navigation width changes</p>
                <p><strong>State Persistence:</strong> Remembers active sections within each environment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationPreview;