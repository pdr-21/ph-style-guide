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
import { NavigationItem } from '../../types';

const SideNavigationItemPreview: React.FC = () => {
  const [activeIconItem, setActiveIconItem] = useState('dashboard');
  const [activeTextItem, setActiveTextItem] = useState('colors');

  // Sample icon navigation items
  const iconNavigationItems: NavigationItem[] = [
    { id: 'dashboard', icon: Home, label: 'Dashboard', path: '/' },
    { id: 'contacts', icon: Users, label: 'Contacts', path: '/contacts' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar' },
    { id: 'reports', icon: BarChart3, label: 'Reports', path: '/reports' },
    { id: 'documents', icon: FileText, label: 'Documents', path: '/documents' },
    { id: 'email', icon: Mail, label: 'Email', path: '/email' },
    { id: 'calls', icon: Phone, label: 'Calls', path: '/calls' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
  ];

  // Sample text navigation items
  const textNavigationItems: NavigationItem[] = [
    { id: 'colors', label: 'Colors', path: '/style-guide/colors' },
    { id: 'typography', label: 'Typography', path: '/style-guide/typography' },
    { id: 'spacing', label: 'Spacing', path: '/style-guide/spacing' },
    { id: 'corner-radius', label: 'Corner Radius', path: '/style-guide/corner-radius' },
    { id: 'borders', label: 'Borders', path: '/style-guide/borders' },
    { id: 'shadows', label: 'Shadows', path: '/style-guide/shadows' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-6xl space-y-12">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Side Navigation Item Component</h1>
          <p className="text-gray-600">Individual navigation items used in the side navigation</p>
        </div>

        {/* Icon Navigation Items */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Icon Navigation Items</h2>
            <p className="text-sm text-gray-600 mb-6">
              Used in the App environment. Features icons with tooltips on hover and a 64px (4rem) width container.
            </p>
            
            <div className="bg-gr-25 border border-n-75 rounded-lg p-6">
              <div className="w-16 bg-gr-25 border-r border-n-75">
                <nav className="py-4">
                  <ul className="space-y-2">
                    {iconNavigationItems.map((item) => (
                      <SideNavigationItem
                        key={item.id}
                        item={item}
                        isActive={activeIconItem === item.id}
                        onClick={() => setActiveIconItem(item.id)}
                        type="icon"
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Text Navigation Items */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Text Navigation Items</h2>
            <p className="text-sm text-gray-600 mb-6">
              Used in Components and Style Guide environments. Features text labels with a 192px (12rem) width container.
            </p>
            
            <div className="bg-gr-25 border border-n-75 rounded-lg p-6">
              <div className="w-48 bg-gr-25 border-r border-n-75">
                <nav className="py-4">
                  <ul className="space-y-1">
                    {textNavigationItems.map((item) => (
                      <SideNavigationItem
                        key={item.id}
                        item={item}
                        isActive={activeTextItem === item.id}
                        onClick={() => setActiveTextItem(item.id)}
                        type="text"
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* States Demonstration */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Item States</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Icon States */}
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-4">Icon Item States</h3>
                <div className="bg-gr-25 border border-n-75 rounded-lg p-4">
                  <div className="w-16 space-y-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Active State</p>
                      <SideNavigationItem
                        item={{ id: 'active', icon: Home, label: 'Active Item', path: '/' }}
                        isActive={true}
                        onClick={() => {}}
                        type="icon"
                      />
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Inactive State (Hover to see tooltip)</p>
                      <SideNavigationItem
                        item={{ id: 'inactive', icon: Users, label: 'Inactive Item', path: '/' }}
                        isActive={false}
                        onClick={() => {}}
                        type="icon"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text States */}
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-4">Text Item States</h3>
                <div className="bg-gr-25 border border-n-75 rounded-lg p-4">
                  <div className="w-48 space-y-4">
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Active State</p>
                      <SideNavigationItem
                        item={{ id: 'active-text', label: 'Active Text Item', path: '/' }}
                        isActive={true}
                        onClick={() => {}}
                        type="text"
                      />
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-600 mb-2">Inactive State</p>
                      <SideNavigationItem
                        item={{ id: 'inactive-text', label: 'Inactive Text Item', path: '/' }}
                        isActive={false}
                        onClick={() => {}}
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-6">Interactive Demo</h2>
            <p className="text-sm text-gray-600 mb-4">
              Click on the navigation items to see the active state changes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-4">Icon Navigation (App Environment)</h3>
                <div className="bg-gr-25 border border-n-75 rounded-lg p-4">
                  <div className="w-16">
                    <nav className="py-4">
                      <ul className="space-y-2">
                        {iconNavigationItems.slice(0, 4).map((item) => (
                          <SideNavigationItem
                            key={item.id}
                            item={item}
                            isActive={activeIconItem === item.id}
                            onClick={() => setActiveIconItem(item.id)}
                            type="icon"
                          />
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-md font-medium text-gray-700 mb-4">Text Navigation (Style Guide Environment)</h3>
                <div className="bg-gr-25 border border-n-75 rounded-lg p-4">
                  <div className="w-48">
                    <nav className="py-4">
                      <ul className="space-y-1">
                        {textNavigationItems.slice(0, 4).map((item) => (
                          <SideNavigationItem
                            key={item.id}
                            item={item}
                            isActive={activeTextItem === item.id}
                            onClick={() => setActiveTextItem(item.id)}
                            type="text"
                          />
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Icon Navigation Items</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Usage:</strong> App environment with limited horizontal space</p>
                <p><strong>Width:</strong> 64px (4rem) container width</p>
                <p><strong>Tooltips:</strong> Show on hover for inactive items</p>
                <p><strong>Active State:</strong> Blue background with blue icon color</p>
                <p><strong>Hover State:</strong> Light gray background with darker icon</p>
                <p><strong>Accessibility:</strong> Includes title attribute and tooltip</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">Text Navigation Items</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Usage:</strong> Components and Style Guide environments</p>
                <p><strong>Width:</strong> 192px (12rem) container width</p>
                <p><strong>Labels:</strong> Clear, descriptive text labels</p>
                <p><strong>Active State:</strong> Blue background with blue text color</p>
                <p><strong>Hover State:</strong> Light gray background with darker text</p>
                <p><strong>Spacing:</strong> Tighter vertical spacing than icon items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigationItemPreview;